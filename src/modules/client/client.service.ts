import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { ClientDto } from './dto/client.dto';
import { Address } from './entity/address.entity';
import { Client } from './entity/client.entity';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(Client)
        private clientRepository: Repository<Client>,
        @InjectRepository(Address)
        private addressRepository: Repository<Address>,
    ){}

    private async validateIfClientExists(client:ClientDto){        
        const clientById = ( (!client.id)? null : await this.clientRepository.findOne({where:{ id:client.id}}) ); 
        const clientByEmail = await this.clientRepository.findOne({where:{ email:client.email}}); 
        if(clientById === null && clientByEmail === null) return false
        return true
    }
    private async validateIfAddressExists(client:ClientDto){
        if(!client.address.id) return false;
        const AddressById = await this.addressRepository.findOne({where:{ id:client.address.id}});         
        if(AddressById === null) return false        
        return true
    }

    private async validateIfemailExists(client:ClientDto){
        if(!client.email) return false;
        const EmailById = await this.clientRepository.findOne({            
            where:{ id: Not(client.id),email:client.email}
        });        
        if(EmailById === null) return false        
        return true
    }

    async getAllClients(){
        return await this.clientRepository.find({});         
    }

    async getClientById(id:number){
        return await this.clientRepository.findOne({where:{id}});         
    }

    async createClient(client:ClientDto){

        if(await this.validateIfClientExists(client)) return "client Id/email already registered. Don't send the Id to generate a new one";
        if(await this.validateIfAddressExists(client)) return "Address Id already registered. Don't send the Id to generate a new one";
        return await this.clientRepository.save(client);
    }

    async modifyClient(client:ClientDto){
        const { id } = client

        if(!id){
            return await this.clientRepository.update(
                {email:client.email},
                {name:client.name})
        }

        const emailIsValid = await this.validateIfemailExists(client);       

        if(!emailIsValid){
            return await this.clientRepository.update(
                {id:client.id},
                {email:client.email,name:client.name}
            )        
        }

        return "email address already exists"
        
    }

    async deleteClient(id:number){        
        return this.clientRepository.delete({id},);
    }   
}

