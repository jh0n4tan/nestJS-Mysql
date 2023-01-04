import { IsOptional } from "class-validator";
import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class ProductDto {

    @IsOptional()
    @IsNumber()
    @IsPositive()
    id?: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    stock: number;

    
    @IsOptional()
    @IsBoolean()
    deleted: boolean;
}