import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoreModule } from './categore/categore.module';
import { OfferModule } from './offer/offer.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { FavoriteListModule } from './favorite-list/favorite-list.module';
import { ReviewModule } from './review/review.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() { }
}
