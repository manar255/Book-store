import { Injectable } from '@nestjs/common';
import { CreateFavoriteListDto } from './dto/create-favorite-list.dto';
import { UpdateFavoriteListDto } from './dto/update-favorite-list.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FavoriteList } from './entities/favorite-list.entity';
import { Model } from 'mongoose';

@Injectable()
export class FavoriteListService {
  constructor(@InjectModel('FavoriteList') private favoriteListModel: Model<FavoriteList>) { }
  async addToFavorite(productId: string, userId: string) {
    //check if the product is already in the user's favorite list
    const favoriteItem = await this.favoriteListModel.findOne({ user: userId, products: productId });
    if (favoriteItem) {
      throw new Error('Product already in favorite list');
    }
    //create a new favorite list item
    const newFavoriteItem = new this.favoriteListModel({
      user: userId,
      products: productId,
    });
    //save the new favorite item to the database
    return await newFavoriteItem.save();
  }

 async findUserFavorite(userId: string) {
  const favoriteList = await this.favoriteListModel.find({ user: userId }).populate('products');
    return favoriteList;
  }


 async removeFromFavorite(productId: string, userId: string) {
    //check if the favorite item exists
    const favoriteItem = await this.favoriteListModel.findOne({ user: userId, products: productId });
    if (!favoriteItem) {
      throw new Error('Product not found in favorite list');
    }
    //remove the favorite item from the database
    return await this.favoriteListModel.findByIdAndDelete(favoriteItem._id);
  }
}
