import { Body, Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common';
import { DietService } from '../service/diet.service';
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";
import { ResponseDto } from "../dto/response.dto";
import { DayEntity } from "../entity/day.entity";
import { DayDto } from "../dto/day.dto";

@Controller({
    path: 'day',
})
export class DietController {
    constructor(
        private readonly dietService: DietService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get('/')
    public async list(): Promise<ResponseDto<DayEntity>> {
        const meals = await this.dietService.getAll();

        return new ResponseDto<DayEntity>(meals);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/')
    public async create(@Body() dto: DayDto): Promise<ResponseDto<DayEntity>> {
        const meal = await this.dietService.create(dto);

        return new ResponseDto<DayEntity>([meal]);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    public async delete(@Param('id') id: number): Promise<ResponseDto<DayEntity>> {
        await this.dietService.delete(id);

        return new ResponseDto<DayEntity>([]);
    }
}
