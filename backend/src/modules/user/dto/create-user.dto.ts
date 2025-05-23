import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    firstName:string;
    @IsNotEmpty()
    lastName:string;
    @IsNotEmpty()
    @IsEmail()
    email:string;
    @IsNotEmpty({ message: "Password should not be empty" })
    password: string;
    @IsNotEmpty()
    phone?:string;
}
