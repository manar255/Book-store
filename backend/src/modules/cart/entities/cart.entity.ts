import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import mongoose, { HydratedDocument } from "mongoose";

export type CartDocument = HydratedDocument<Cart>;

@Schema()
export class Cart {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    user: mongoose.Schema.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true })
    product: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true, default: 1 })
    quantity: number;

    @Prop({ required: true, enum: ['pending', 'ordered'], default: 'pending' })
    cartStatus: string;
}

export const cartSchema = SchemaFactory.createForClass(Cart)
