import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploadService } from './services/file-upload.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attachment } from './entities/attachment.entity';
import { SmeDetail } from './entities/sme-details.entity';
import { AttachmentService } from './services/attachment.service';
import { SmeDetailService } from './services/sme-details.service';
import { FileUploadController } from './controllers/file-upload/file-upload.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.23.0.3',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'smereplica',
      entities: [Attachment, SmeDetail],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Attachment, SmeDetail]),
  ],
  controllers: [AppController, FileUploadController],
  providers: [
    AppService,
    FileUploadService,
    AttachmentService,
    SmeDetailService,
  ],
})
export class AppModule {}
