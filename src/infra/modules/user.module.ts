import { Module } from '@nestjs/common';
import { UserContracts } from 'src/app/services/contracts/user.contracts';
import { UserService } from 'src/app/services/user.service';
import { UsersController } from 'src/presentation/controllers/user.controller';
import { DatabaseModule } from './database.module';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    UsersController
  ],
  providers: [
    {
        provide: UserContracts,
        useClass: UserService
    }
  ],
  exports:[
    UserContracts
  ]
})
export class UserModule {}
