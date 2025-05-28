import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { FavoriteListService } from './favorite-list.service';
import { CreateFavoriteListDto } from './dto/create-favorite-list.dto';
import { UpdateFavoriteListDto } from './dto/update-favorite-list.dto';
import { AuthGuard } from 'src/guards/is-auth/is-auth.guard';

@Controller('favorite-list')
export class FavoriteListController {
  constructor(private readonly favoriteListService: FavoriteListService) {}

  @Post()
  @UseGuards(AuthGuard)
  addToFavorite(@Body() productId: string,@Request() req: any) {
    return this.favoriteListService.addToFavorite(productId, req.userId);
  }

  @Get()
  @UseGuards(AuthGuard)
  findUserFavorite(@Request()req:any) {
    return this.favoriteListService.findUserFavorite(req.userId);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  removeFromFavorite(@Body('productId') productId: string, @Request() req: any) {
    return this.favoriteListService.removeFromFavorite(productId, req.userId);
  }
}
