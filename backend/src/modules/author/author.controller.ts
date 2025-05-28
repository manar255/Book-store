import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { FileUploadInterceptor } from 'src/interceptors/file-upload/file-upload.interceptor';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService ,private cloudinaryService:CloudinaryService) {}

  @Post()
    @UseInterceptors(FileUploadInterceptor)
  async create(@Body() createAuthorDto: CreateAuthorDto ,
  @UploadedFile() file: Express.Multer.File,
) {
        createAuthorDto.image = await this.cloudinaryService.uploadFile(file.path);

    return this.authorService.create(createAuthorDto);
  }

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(+id, updateAuthorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorService.remove(+id);
  }
}
