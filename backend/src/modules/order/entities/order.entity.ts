
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import mongoose, { HydratedDocument } from "mongoose";

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
    @Prop({ required: true, type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } })
    user: mongoose.Schema.Types.ObjectId;
    @Prop({ required: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }] })
    products: mongoose.Schema.Types.ObjectId[];
    @Prop({ required: true })
    totalePrice: number;
    @Prop({ required: true })
    shippingAddress: string;
    @Prop({ required: true })
    phoneNumber: string;
    @Prop({ required: true })
    paymentMethod: string;
    @Prop({ required: true })
    orderStatus: string;
    @Prop({ required: true })
    orderDate: Date;
    @Prop({ required: true })
    deliveryDate: Date;
    @Prop({ required: true })
    deliveryStatus: string;

}

export const orderSchema = SchemaFactory.createForClass(Order)
