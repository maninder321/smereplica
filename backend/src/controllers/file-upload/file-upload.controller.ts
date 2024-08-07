import {
  BadRequestException,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileUploadService } from 'src/services/file-upload.service';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Get()
  getHello(): string {
    return this.fileUploadService.getFileUpload();
  }

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './fileUploads',
        filename: (req, file, callback) => {
          const name = file.originalname.split('.')[0];
          const extension = file.originalname.split('.')[1];
          const uploadFileName =
            name.split(' ').join('_') + '_' + Date.now() + '.' + extension;
          callback(null, uploadFileName);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(pdf)$/)) {
          callback(null, false);
        }
        callback(null, true);
      },
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return new BadRequestException('File Not Uploaded');
    }
    return this.fileUploadService.addUploadedFile(file);
  }
}
