import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { FileUploadInterceptor } from 'src/interceptors/file-upload/file-upload.interceptor';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService, private cloudinaryService: CloudinaryService) { }

  @Post()
  @UseInterceptors(FileUploadInterceptor)
  async create(@Body() createProductDto: CreateProductDto,@UploadedFile() file: Express.Multer.File,) {
    createProductDto.image = await this.cloudinaryService.uploadFile(file.path);
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
