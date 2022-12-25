import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ResponseDto } from "../dto/response.dto";
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";
import { MealService } from "../service/meal.service";
import { Meal } from "../entity/meal.entity";

@Controller({
    path: 'meal',
})
export class MealController {
    constructor(
        private readonly mealService: MealService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get('/')
    public async list(): Promise<ResponseDto<Meal>> {
        const meals = await this.mealService.getAll();

        return new ResponseDto<Meal>(meals);
    }

    // @UseGuards(JwtAuthGuard)
    // @Put('/')
    // public async create(@Body() dto: IngredientDto): Promise<ResponseDto<Ingredient>> {
    //     const ingredient = await this.ingredientService.create(
    //         dto.name,
    //         dto.calories,
    //         dto.proteins,
    //         dto.carbohydrates,
    //         dto.fats,
    //     );
    //
    //     return new ResponseDto<Ingredient>([ingredient]);
    // }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    public async delete(@Param('id') id: number): Promise<ResponseDto<Meal>> {
        await this.mealService.delete(id);

        return new ResponseDto<Meal>([]);
    }
}
