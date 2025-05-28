import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoreDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    description: string;

    // @IsNotEmpty()
    image: any;

}
