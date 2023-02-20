import { Injectable } from "@nestjs/common";
import { PrismaService } from "../data/prisma/prisma.service";
import { UserInterface } from "./interfaces/user.interface";


@Injectable()
export class UserRepository implements UserInterface{
    constructor(private readonly prismaService: PrismaService){}
    async createUser(data: any): Promise<any> {
        return this.prismaService.user.create({
            data: data
        });
    }
    async findAll(): Promise<any> {
        return await this.prismaService.user.findMany()
    }

}