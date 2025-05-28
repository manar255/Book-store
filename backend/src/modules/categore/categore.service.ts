import { Injectable } from '@nestjs/common';
import { CreateCategoreDto } from './dto/create-categore.dto';
import { UpdateCategoreDto } from './dto/update-categore.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Categore } from './entities/categore.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoreService {
   constructor(@InjectModel('Categore') private categoryModel: Model<Categore>) {}
  async create(createCategoreDto: CreateCategoreDto) {
    let categore = new this.categoryModel(createCategoreDto);
    await categore.save();
    return categore;
  }

  findAll() {
    return this.categoryModel.find().exec();
  }

  findOne(id: number) {
    return this.categoryModel.findById(id).exec();
  }

  update(id: number, updateCategoreDto: UpdateCategoreDto) {
    return this.categoryModel.findByIdAndUpdate(id, updateCategoreDto, { new: true }).exec();
  }

  remove(id: number) {
    return this.categoryModel.findByIdAndDelete(id).exec();
  }
}
