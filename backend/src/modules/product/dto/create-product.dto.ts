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

    @IsNumber()
    @Min(0)
    price: number;

    @IsString()
    @IsUrl()
    image: string;

    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    categoryId: string[];

    @IsInt()
    @Min(0)
    stock: number;
}
