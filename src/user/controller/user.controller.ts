import { Controller, Get, UseGuards, Request } from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";

@Controller()
export class UserController {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get('me')
    async getProfile(@Request() req: any) {
        const user = await this.userRepository.findOneBy({
            id: req.user.id,
        });

        if (user === null) {
            throw new Error('Expected a valid user in request');
        }

        const {password, ...data} = user;

        return data;
    }

}