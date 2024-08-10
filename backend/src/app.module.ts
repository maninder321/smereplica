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
import { SmeController } from './controllers/sme/sme.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SmeValidator } from './validator/sme.validator';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [Attachment, SmeDetail],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Attachment, SmeDetail]),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, FileUploadController, SmeController],
  providers: [
    AppService,
    FileUploadService,
    AttachmentService,
    SmeDetailService,
    SmeValidator,
    AuthService,
  ],
})
export class AppModule {}
