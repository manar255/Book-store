import { IsString, IsNotEmpty, IsNumber, IsArray, IsUrl, IsInt, Min } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsNotEmpty()
    @IsString()   
    price: string;

    // @IsString()
    image: string;

    // @IsArray()
    // @IsString({ each: true })
    // @IsNotEmpty({ each: true })
    categoryId: string[];

    @IsNotEmpty()
    @IsString() 
    stock: string;
}
