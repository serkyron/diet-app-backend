import { Module } from '@nestjs/common';
import {HttpModule} from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { UsersService } from "./service/user.service";
import { UserController } from "./controller/user.controller";

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([
            User,
        ])
    ],
    providers: [
        UsersService,
    ],
    controllers: [
        UserController,
    ],
    exports: [
        UsersService,
    ],
})
export class UserModule {
}
