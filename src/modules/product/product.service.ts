import { Injectable } from '@nestjs/common';
import { ConflictException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { StockDto } from './dto/stock.dto';
import { Product } from './entity/product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ){}

    private async findProduct(id:number){
        return await this.productRepository.findOne({where:{id}});                
    }

    async getProductById (id:number){
        return await this.findProduct(id);
    }

    async getAllDeletedProducts(){
        return await this.productRepository.find({where:{deleted:true}});
    }


    async getAllProducts(){
        return await this.productRepository.find({where:{deleted:false}});
    }
    
    async createProduct (product:ProductDto){
        const productExists = await this.findProduct(product.id);
        if(productExists) throw new ConflictException("product id already exists");
        await this.productRepository.save(product);
        return "product successfully created"
    }

    async modifyProduct(product:ProductDto){
        return await this.productRepository.save(product)
    }

    async deleteProduct(id:number){
        const productFound = await this.findProduct(id);        
        if(!productFound) throw new ConflictException("product id doesn't exists"); 
                
        await this.productRepository.update(
            {id:id},
            {deleted:true}
        );
    }


    async restoreProduct(id:number){
        const productFound = await this.findProduct(id);        
        if(!productFound) throw new ConflictException("product id doesn't exists");         
        
        await this.productRepository.update(
            {id:id},
            {deleted:false}
        );
    }

    async updateStock(stock:StockDto){
        const productFound = await this.findProduct(stock.id);        
        if(!productFound) throw new ConflictException("product id doesn't exists");                 
        await this.productRepository.update(
            {id:stock.id},
            {stock:stock.stock}
        );
    }
}
