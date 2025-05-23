import { Schema } from "@nestjs/mongoose";

import { Prop, SchemaFactory } from "@nestjs/mongoose";
import {  HydratedDocument } from "mongoose";

export type AuthorDocument =HydratedDocument<Author>;


@Schema()
export class Author {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    image: string;
}
export const AuthorSchema = SchemaFactory.createForClass(Author);
