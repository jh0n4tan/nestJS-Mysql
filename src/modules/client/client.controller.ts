import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Delete, Param } from '@nestjs/common/decorators';
import { ClientService } from './client.service';
import { ClientDto } from './dto/client.dto';

@Controller('api/vi/client')
export class ClientController {
    constructor(private clienteService:ClientService){}

    @Get('/:id')
    getClientById(@Param('id') id:number){
        return this.clienteService.getClientById(id);
    }

    @Get()
    getAllClients(){
        return this.clienteService.getAllClients();
    }

    @Post()
    createClient(@Body() client:ClientDto){
        return this.clienteService.createClient(client);
    }

    @Put()
    modifyClient(@Body() client:ClientDto){
        return this.clienteService.modifyClient(client);
    }

    @Delete('/:id')
    deleteClient(@Param('id') id:number){
        return this.clienteService.deleteClient(id);
    }
    
}
