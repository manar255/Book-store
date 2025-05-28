import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Mongoose } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    description: string;
    @Prop({ required: true ,type: mongoose.Schema.Types.ObjectId, ref: 'Author' })
    author: mongoose.Schema.Types.ObjectId;
    @Prop({ required: true })
    price: number;
    @Prop({ required: true })
    image: string;
    @Prop({ required: true ,type:[{type:mongoose.Schema.Types.ObjectId,ref:'Category'}], default: [] })
    categoryId: mongoose.Schema.Types.ObjectId[];
    @Prop({ required: true })
    stock: number;
    // @Prop({ required: true })
    // rating: number;
    // @Prop({ required: true })
    // reviewsCount: number;
}

export const productSchema = SchemaFactory.createForClass(Product);