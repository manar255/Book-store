import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { productSchema } from './entities/product.entity';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Product', schema: productSchema }])],
  controllers: [ProductController],
  providers: [ProductService,CloudinaryService],
})
export class ProductModule {}
