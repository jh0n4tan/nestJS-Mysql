import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';

@Controller('api/v1/products')
@ApiTags('products')
export class ProductController {  
    constructor (private productService:ProductService){}  
}
