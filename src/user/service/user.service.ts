import { Injectable } from '@nestjs/common';
import { User } from "../entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {

    constructor(
       @InjectRepository(User)
       private userRepository: Repository<User>
    ) {}

    async findOneByUsername(username: string): Promise<User | null> {
        return this.userRepository.findOneBy({
            username: username,
        })
    }
}