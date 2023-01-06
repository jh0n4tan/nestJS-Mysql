import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common/decorators';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductDto } from './dto/product.dto';
import { StockDto } from './dto/stock.dto';
import { ProductService } from './product.service';

@Controller('api/v1/products')
@ApiTags('products')
export class ProductController {  
    constructor (private productService:ProductService){}  

    @Get('/all')
    @ApiOperation({description:"Gets all the products"})
    @ApiResponse({
        status:200,
        description:"Product list"
    })
    getAllProducts(){
        return this.productService.getAllProducts();
    }

    @Get('/deleted')
    @ApiOperation({description:"Gets the deleted products"})
    @ApiResponse({
        status:200,
        description:"Product list"
    })
    getAllDeletedProducts(){
        return this.productService.getAllDeletedProducts();
    }

    @Get('/:id')
    @ApiOperation({description:"Gets a product by Id"})
    @ApiResponse({
        status:200,
        description:"Product list"
    })
    getProductById(@Param('id') id:number){
        return this.productService.getProductById(id);
    }

    @Post()
    @ApiOperation({description:"Creates a new product"})
    @ApiBody({
        description:"creates a new product",
        type:ProductDto,
        examples:{
            ejemplo1:{
                value:{
                    "id":1,
                    "name":"Leche Gloria",
                    "price":4,
                    "stock":50,
                    "deleted":false
                }                     
            }
        }

    })
    @ApiResponse({
        status:200,
        description:"Product has been successfully created"
    })
    @ApiResponse({
        status:409,
        description:"Product already exists"
    })
    createProduct(@Body() product:ProductDto){
        return this.productService.createProduct(product);
    }

    @Put()
    @ApiOperation({description:"Modifies an specific product"})
    @ApiBody({
        description:"Modifies an specific product",
        type:ProductDto,
        examples:{
            ejemplo1:{
                value:{
                    "id":1,
                    "name":"Leche Gloria",
                    "price":6,
                    "stock":30,
                    "deleted":false
                }                     
            }
        }

    })
    @ApiResponse({
        status:200,
        description:"Product has been successfully modified"
    })
    modifyProduct(@Body() product:ProductDto){
        return this.productService.modifyProduct(product);
    }

    @Patch('/restore/:id')
    @ApiOperation({description:"Restores a product by Id"})
    @ApiParam({
        name:"id",
        required:true,
        description:"Product Id",
        type:Number
    })
    restoreProduct(@Param('id') id:number){
        return this.productService.restoreProduct(id);
    }

    @Patch('/stock')
    @ApiOperation({description:"Modifies a product stock"})
    @ApiBody({
        description:"Modifies a product stock",
        type:StockDto,
        examples:{
            ejemplo1:{
                value:{
                    "id":1,
                    "stock":30
                }                     
            }
        } 
    })
    updateStock(@Body() stock:StockDto){
        return this.productService.updateStock(stock);
    }

    @Delete('/:id')
    @ApiOperation({description:"Deletes a product by Id"})
    @ApiParam({
        name:"id",
        required:true,
        description:"Product Id",
        type:Number
    })
    @ApiResponse({
        status:200,
        description:"Product has been successfully deleted"
    })
    deleteProduct(@Param('id') id:number){
        return this.productService.deleteProduct(id);
    }

}

