import { Module } from '@nestjs/common';
import { UploadFileService } from './upload-file.service';
import { UploadFileController } from './upload-file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { multerConfig } from './upload-file.config';

@Module({
  imports:[MulterModule.register({
    storage:multerConfig.storage,
    // fileFilter: multerConfig.fileFilter
  })],
  controllers: [UploadFileController],
  providers: [UploadFileService],
})
export class UploadFileModule {}
