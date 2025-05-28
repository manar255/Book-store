import { Module } from '@nestjs/common';
import { FavoriteListService } from './favorite-list.service';
import { FavoriteListController } from './favorite-list.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { favoriteListSchema } from './entities/favorite-list.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'FavoriteList',schema: favoriteListSchema,}])],
  controllers: [FavoriteListController],
  providers: [FavoriteListService],
})
export class FavoriteListModule { }
