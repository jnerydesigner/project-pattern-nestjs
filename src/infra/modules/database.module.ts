import { Module } from '@nestjs/common';
import { PrismaService } from '../data/prisma/prisma.service';
import { UserInterface } from '../repositories/interfaces/user.interface';
import { UserRepository } from '../repositories/user.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
        provide: UserInterface,
        useClass: UserRepository
    },
    PrismaService
  ],
  exports:[
    UserInterface,
    PrismaService
  ]
})
export class DatabaseModule {}
