import { IsNotEmpty } from "class-validator";

export class CreateAuthorDto {
    @IsNotEmpty()
    name: string;
    
    // @IsNotEmpty()
    image: string;
}
