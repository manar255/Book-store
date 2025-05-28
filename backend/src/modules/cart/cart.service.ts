import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(@InjectModel('Cart') private cartModel: Model<Cart>) { }


  async create(createCartDto: CreateCartDto) {
    const cart = new this.cartModel(createCartDto);
    await cart.save();
    return cart;
  }
  async findUserCart(userId: string) {
    return await this.cartModel.find({ user: userId , cartStatus:'pending'}).exec();
  }


  async updateQuantity(id: string, quantity: number = 1, userId: string) {
    // Check if the cart item belongs to the user
    const cartItem =await this.cartModel.findOne({ _id: id, user: userId }).exec();
    if (!cartItem) {
      throw new Error('Cart item not found or does not belong to the user');
    }
    // Update the quantity of the cart item
    if (quantity < 1) {
      throw new Error('Quantity must be at least 1');
    }
    cartItem.quantity += quantity;
    await cartItem.save();
    // Return the updated cart item
    return cartItem;
  }

  remove(id: string) {
    return this.cartModel.findByIdAndDelete(id).exec();
  }

}
