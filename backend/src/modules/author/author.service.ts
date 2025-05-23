import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(@InjectModel('Author') private authorModel: Model<Author>) { }
  async create(createAuthorDto: CreateAuthorDto) {
    try {
      const author = new this.authorModel(createAuthorDto);
      return await author.save();
    }
    catch (error) {
      throw new Error('Error creating author');
    }
  }

  async findAll() {
    return await this.authorModel.find().exec();
  }

  async findOne(id: number) {
    return await this.authorModel.findById(id).exec();
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
