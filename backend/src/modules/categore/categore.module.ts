import { Module } from '@nestjs/common';
import { CategoreService } from './categore.service';
import { CategoreController } from './categore.controller';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { MongooseModule } from '@nestjs/mongoose';
import { categoreSchema } from './entities/categore.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Categore', schema: categoreSchema }])],
  controllers: [CategoreController],
  providers: [CategoreService, CloudinaryService],

})
export class CategoreModule { }
