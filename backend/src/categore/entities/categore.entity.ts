import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { HydratedDocument } from "mongoose";

export type CategoreDocument = HydratedDocument<Categore>;

@Schema()
export class Categore {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    description: string;
    @Prop({ required: true })
    image: string;
}

export const categoreSchema = SchemaFactory.createForClass(Categore)
