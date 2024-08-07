import { Injectable } from '@nestjs/common';

@Injectable()
export class FileUploadService {
  getFileUpload(): string {
    return 'File Upload';
  }
}
