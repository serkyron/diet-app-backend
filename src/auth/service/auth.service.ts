import { Injectable } from '@nestjs/common';
import { UsersService } from "../../user/service/user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByUsername(username);

        if (user === null) {
            return null;
        }

        const {password, ...userProps} = user;
        const match = user.password === pass;
        // const match = await bcrypt.compare(user.password, pass);

        if (!match) {
            return null;
        }

        return userProps;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}