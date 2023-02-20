import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserContracts } from "src/app/services/contracts/user.contracts";




@Controller('api/v1/users')
export class UsersController{
    constructor(private readonly userService: UserContracts){}
    @Get()
    findAll(){
        return this.userService.findAll()
    }

    @Post()
    createUser(@Body() body: any){
        return this.userService.create(body)
    }
}