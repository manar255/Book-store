
import { Injectable } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig, fileFilter } from '../../modules/upload-file/upload-file.config';


@Injectable()
export class FileUploadInterceptor extends FileInterceptor('image', {
  storage: multerConfig.storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
}) {}