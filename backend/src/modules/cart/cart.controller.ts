import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { AuthGuard } from '../../guards/is-auth/is-auth.guard';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @UseGuards(AuthGuard)
  addToCart(@Body() createCartDto: CreateCartDto ,@Request() req: any) {
    createCartDto.user = req.userId;
    return this.cartService.create(createCartDto);
  }

  @UseGuards(AuthGuard)
  @Get('user')
  findUserCart(@Request() req: any) { 
    return this.cartService.findUserCart(req.userId);
  }


  @Patch(':id')
  @UseGuards(AuthGuard)
  updateQuantity(@Param('id') id: string, @Body() quantity: number, @Request() req: any) {
    
     return this.cartService.updateQuantity(id, quantity, req.userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(id);
  }
}
