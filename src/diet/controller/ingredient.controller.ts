import { Body, Controller, Delete, Get, Param, Patch, Put, UseGuards } from '@nestjs/common';
import { Ingredient } from "../entity/ingredient.entity";
import { ResponseDto } from "../dto/response.dto";
import { IngredientService } from "../service/ingredient.service";
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";
import { IngredientDto } from "../dto/ingredient.dto";
import { UpdateIngredientDto } from "../dto/update.ingredient.dto";

@Controller({
    path: 'ingredient',
})
export class IngredientController {
    constructor(
        private readonly ingredientService: IngredientService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get('/')
    public async list(): Promise<ResponseDto<Ingredient>> {
        const ingredients = await this.ingredientService.getAll();

        return new ResponseDto<Ingredient>(ingredients);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/')
    public async create(@Body() dto: IngredientDto): Promise<ResponseDto<Ingredient>> {
        const ingredient = await this.ingredientService.create(dto);

        return new ResponseDto<Ingredient>([ingredient]);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    public async delete(@Param('id') id: number): Promise<ResponseDto<Ingredient>> {
        await this.ingredientService.delete(id);

        return new ResponseDto<Ingredient>([]);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    public async update(@Param('id') id: number, @Body() dto: UpdateIngredientDto): Promise<ResponseDto<Ingredient>> {
        const ingredient = await this.ingredientService.update(id, dto);
        const data = ingredient ? [ingredient] : [];

        return new ResponseDto<Ingredient>(data);
    }
}
