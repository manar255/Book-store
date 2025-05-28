import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './entities/author.entity';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }])],
  controllers: [AuthorController],
  providers: [AuthorService,CloudinaryService],
})
export class AuthorModule {}
