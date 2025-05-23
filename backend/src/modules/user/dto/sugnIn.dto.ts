import { IsEmail, IsNotEmpty } from "class-validator";

export class SignInDto {
    
    @IsNotEmpty()
    @IsEmail()
    email:string;
    @IsNotEmpty({ message: "Password should not be empty" })
    password: string;
   
}
