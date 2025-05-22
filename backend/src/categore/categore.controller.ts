import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoreService } from './categore.service';
import { CreateCategoreDto } from './dto/create-categore.dto';
import { UpdateCategoreDto } from './dto/update-categore.dto';

@Controller('categore')
export class CategoreController {
  constructor(private readonly categoreService: CategoreService) {}

  @Post()
  create(@Body() createCategoreDto: CreateCategoreDto) {
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
