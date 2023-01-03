import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({}),
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
