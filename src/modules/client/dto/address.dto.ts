import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class AddressDto{
    
    @IsOptional()
    @IsPositive()
    @IsNumber()
    id?:number;
    
    @IsNotEmpty()
    @IsString()
    country!:string;

    @IsNotEmpty()
    @IsString()
    province!:string;

    @IsNotEmpty()
    @IsString()
    city!:string;
    
    @IsNotEmpty()
    @IsString()
    town!:string;

    @IsNotEmpty()
    @IsString()
    street!:string;
    
}