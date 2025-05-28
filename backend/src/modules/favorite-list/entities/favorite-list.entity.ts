import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import mongoose, { HydratedDocument } from "mongoose";

export type FavoriteListDocument = HydratedDocument<FavoriteList>;

@Schema()
export class FavoriteList {
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: mongoose.Schema.Types.ObjectId;
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    products: mongoose.Schema.Types.ObjectId;
}

export const favoriteListSchema = SchemaFactory.createForClass(FavoriteList)
