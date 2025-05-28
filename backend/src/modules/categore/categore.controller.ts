import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, ParseFilePipe, FileTypeValidator } from '@nestjs/common';
import { CategoreService } from './categore.service';
import { CreateCategoreDto } from './dto/create-categore.dto';
import { UpdateCategoreDto } from './dto/update-categore.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'
import { FileUploadInterceptor } from 'src/interceptors/file-upload/file-upload.interceptor';
import { CloudinaryService } from '../cloudinary/cloudinary.service';


@Controller('categore')
export class CategoreController {
  constructor(private readonly categoreService: CategoreService, private readonly cloudinaryService: CloudinaryService) { }

  @Post()
  @UseInterceptors(FileUploadInterceptor)
  async create(
    @Body() createCategoreDto: CreateCategoreDto,
     @UploadedFile() file: Express.Multer.File,
    ) {
   
    createCategoreDto.image = await this.cloudinaryService.uploadFile(file.path);
    return this.categoreService.create(createCategoreDto);
  }

  @Get()
  findAll() {
    return this.categoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoreDto: UpdateCategoreDto) {
    return this.categoreService.update(+id, updateCategoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoreService.remove(+id);
  }
}
