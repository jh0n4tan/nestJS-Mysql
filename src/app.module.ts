import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './modules/product/product.module';
import config from '../ormconfig';
import { ClientModule } from './modules/client/client.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config as TypeOrmModule),
    ProductModule,
    ClientModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
