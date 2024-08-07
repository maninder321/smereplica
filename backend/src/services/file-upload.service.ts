import { Inject, Injectable } from '@nestjs/common';
import { CreateAttachmentDto } from 'src/dtos/create-attachment.dto';
import { AttachmentService } from './attachment.service';
import { Attachment } from 'src/entities/attachment.entity';

@Injectable()
export class FileUploadService {
  constructor(private attachmentService: AttachmentService) {}

  getFileUpload(): string {
    return 'File Upload';
  }

  async addUploadedFile(file: Express.Multer.File) {
    let createAttachmentDto: CreateAttachmentDto = {
      fileName: file.filename,
      fileSize: file.size + '',
      createdAt: new Date(),
    };

    let attachmentEntity =
      await this.attachmentService.create(createAttachmentDto);
    return {
      error: false,
      message: 'File Uploaded',
      data: {
        id: attachmentEntity.id,
        fileName: attachmentEntity.fileName,
      },
    };
  }
}
