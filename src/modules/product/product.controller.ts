import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('api/v1/products')
@ApiTags('products')
export class ProductController {  
    constructor (private productService:ProductService){}  

    @Get('/all')
    getAllProducts(){
        return this.productService.getAllProducts();
    }

    @Get('/deleted')
    getAllDeletedProducts(){
        return this.productService.getAllDeletedProducts();
    }

    @Get('/:id')
    getProductById(@Param('id') id:number){
        return this.productService.getProductById(id);
    }

    @Post()
    createProduct(@Body() product:ProductDto){
        return this.productService.createProduct(product);
    }

    @Put()
    modifyProduct(@Body() product:ProductDto){
        return this.productService.modifyProduct(product);
    }
    
    @Delete('/:id')
    deleteProduct(@Param('id') id:number){
        return this.productService.deleteProduct(id);
    }

    @Patch('/restore/:id')
    restoreProduct(@Param('id') id:number){
        return this.productService.restoreProduct(id);
    }

}

