import { Controller, Get, UseGuards } from '@nestjs/common';
import { DietService } from '../service/diet.service';
import { Ingredient } from "../entity/ingredient.entity";
import { ResponseDto } from "../dto/response.dto";
import { IngredientService } from "../service/ingredient.service";
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";

@Controller()
export class IngredientController {
    constructor(
        private readonly ingredientService: IngredientService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get('ingredient')
    public async list(): Promise<ResponseDto<Ingredient>> {
        const ingredients = await this.ingredientService.getAll();

        return new ResponseDto<Ingredient>(ingredients);
    }
}
