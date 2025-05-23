import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({required:true})
    firstName: string;
    @Prop({required:true})
    lastName: string;
    @Prop({required:true,unique:true})
    email: string;
    @Prop({required:true})
    password: string;
    @Prop({required:true})
    phone: string;
    @Prop()
    image: string;
    @Prop()
    address: string;
    @Prop()
    city: string;
    @Prop()
    country: string;
}

export const userSchema = SchemaFactory.createForClass(User);