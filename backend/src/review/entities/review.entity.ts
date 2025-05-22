import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";


export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {
    @Prop({ required: true, type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } })
    user: mongoose.Schema.Types.ObjectId;
    @Prop({ required: true, type: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' } })
    product: mongoose.Schema.Types.ObjectId;
    @Prop({ required: true })
    rating: number;
    @Prop({ required: true })
    comment: string;
    @Prop({ required: true, default: Date.now })
    createdAt: Date;
}

export const reviewSchema = SchemaFactory.createForClass(Review);
