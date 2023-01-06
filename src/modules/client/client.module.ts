import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { Client } from './entity/client.entity';
import { Address } from './entity/address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [
    TypeOrmModule.forFeature([
      Client,
      Address
    ])
  ],
  providers: [ClientService],
  controllers: [ClientController]
})
export class ClientModule {}
