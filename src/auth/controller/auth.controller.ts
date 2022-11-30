import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from "../guards/local-auth.guard";
import { AuthService } from "../service/auth.service";

@Controller()
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    public async login(@Request() req: any) {
        return this.authService.login(req.user);
    }
}