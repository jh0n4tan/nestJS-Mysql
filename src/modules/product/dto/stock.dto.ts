import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPositive, Max, Min } from "class-validator";

export class StockDto{

    @ApiProperty({
        name:"id",
        required:true,
        description:"Product's Id ",
        type: Number
    })
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    id:number;

    @ApiProperty({
        name:"stock",
        required:true,
        description:"Product's quantity ",
        type: Number
    })
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(1000)
    stock:number;
}