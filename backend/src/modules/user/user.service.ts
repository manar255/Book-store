import { Injectable, NotAcceptableException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';

import * as bcrypt from 'bcryptjs';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }
  async create(createUserDto: CreateUserDto) {
    // find if user already exists
    const user = await this.userModel.findOne({ email: createUserDto.email });
    if (user) {
     throw new NotAcceptableException('User already exists');
    }
    // hash password
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = hashedPassword;

    // create user
    const newUser = new this.userModel(createUserDto);
    await newUser.save();
    return newUser;
  }
  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
