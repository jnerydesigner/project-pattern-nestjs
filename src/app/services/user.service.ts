import { Injectable } from "@nestjs/common";
import { UserInterface } from "src/infra/repositories/interfaces/user.interface";
import { UserContracts } from "./contracts/user.contracts";


@Injectable()
export class UserService implements UserContracts{
    constructor(private readonly userRepository: UserInterface){}
    
    async findAll(): Promise<any> {
        return this.userRepository.findAll()
    }

    async create(body: any): Promise<any> {
        return this.userRepository.createUser(body)
    }
}