import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './modules/product/product.module';
import config from '../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config as TypeOrmModule),
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
