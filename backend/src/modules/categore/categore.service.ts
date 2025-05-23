import { Injectable } from '@nestjs/common';
import { CreateCategoreDto } from './dto/create-categore.dto';
import { UpdateCategoreDto } from './dto/update-categore.dto';

@Injectable()
export class CategoreService {
  create(createCategoreDto: CreateCategoreDto) {
    return 'This action adds a new categore';
  }

  findAll() {
    return `This action returns all categore`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categore`;
  }

  update(id: number, updateCategoreDto: UpdateCategoreDto) {
    return `This action updates a #${id} categore`;
  }

  remove(id: number) {
    return `This action removes a #${id} categore`;
  }
}
