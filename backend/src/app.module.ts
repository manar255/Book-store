import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { CategoreModule } from './modules/categore/categore.module';
import { OfferModule } from './modules/offer/offer.module';
import { CartModule } from './modules/cart/cart.module';
import { OrderModule } from './modules/order/order.module';
import { FavoriteListModule } from './modules/favorite-list/favorite-list.module';
import { ReviewModule } from './modules/review/review.module';
import { AuthorModule } from './modules/author/author.module';
import { MulterModule } from '@nestjs/platform-express';
import { UploadFileModule } from './modules/upload-file/upload-file.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.mongodb_url!.replace('<db_password>', process.env.mongodb_password!)
    ),
    UserModule,
    ProductModule,
    CategoreModule,
    OfferModule,
    CartModule,
    OrderModule,
    FavoriteListModule,
    ReviewModule,
    AuthorModule,
    UploadFileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() { }
}
