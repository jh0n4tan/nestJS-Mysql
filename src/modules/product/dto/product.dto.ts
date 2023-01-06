import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class ProductDto {

    @ApiProperty({
        name:"id",
        required:false,
        description:"Product Id",
        type: Number
    })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    id?: number;

    @ApiProperty({
        name:"name",
        required:true,
        description:"Product's name",
        type: String
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        name:"price",
        required:true,
        description:"Product Unit price",
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    price: number;

    @ApiProperty({
        name:"stcok",
        required:true,
        description:"Product current stock",
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    stock: number;

    @ApiProperty({
        name:"deleted",
        required:true,
        description:"Product delete status",
        type: Boolean
    })
    @IsOptional()
    @IsBoolean()
    deleted: boolean;
}