import { Body, Controller, Delete, Get, Param, Patch, Put, UseGuards } from '@nestjs/common';
import { ResponseDto } from "../dto/response.dto";
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";
import { MealService } from "../service/meal.service";
import { Meal } from "../entity/meal.entity";
import { MealDto } from "../dto/meal.dto";

@Controller({
    path: 'meal',
})
export class MealController {
    constructor(
        private readonly mealService: MealService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get('/')
    public async list(): Promise<ResponseDto<Meal>> {
        const meals = await this.mealService.getAll();

        return new ResponseDto<Meal>(meals);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/')
    public async create(@Body() dto: MealDto): Promise<ResponseDto<Meal>> {
        const meal = await this.mealService.create({
            name: dto.name,
            mealToIngredients: dto.ingredients,
        });

        return new ResponseDto<Meal>([meal]);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    public async update(@Param('id') id: number, @Body() dto: MealDto): Promise<ResponseDto<Meal>> {
        const meal = await this.mealService.update(id, {
            name: dto.name,
        }, dto.ingredients);
        const data = meal ? [meal] : [];

        return new ResponseDto<Meal>(data);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    public async delete(@Param('id') id: number): Promise<ResponseDto<Meal>> {
        await this.mealService.delete(id);

        return new ResponseDto<Meal>([]);
    }
}
