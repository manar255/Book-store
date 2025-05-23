import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private autorModel: Model<Product>) { }
  async create(createProductDto: CreateProductDto) {
    try {
      const product = new this.autorModel(createProductDto);
      return await product.save();
    }
    catch (error) {
      throw new Error('Error creating product');
    }
  }

  async findAll() {
     try{
     const product =  await this.autorModel.find().exec();
     return product;
    }
    catch (error) {
      throw new Error('Error fetching products');   
    };
  }

  findOne(id: string) {
    return this.autorModel.findById(id).exec();
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.autorModel.findByIdAndUpdate(id, updateProductDto, { new: true }).exec();
  }

  remove(id: string) {
    return this.autorModel.findByIdAndDelete(id).exec();
  }
}
