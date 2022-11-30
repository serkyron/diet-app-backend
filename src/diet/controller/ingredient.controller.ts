import { Controller, Get } from '@nestjs/common';
import { DietService } from '../service/diet.service';
import { Ingredient } from "../entity/ingredient.entity";
import { ResponseDto } from "../dto/response.dto";
import { IngredientService } from "../service/ingredient.service";

@Controller()
export class IngredientController {
    constructor(
        private readonly ingredientService: IngredientService
    ) {}

    @Get('ingredient')
    public async list(): Promise<ResponseDto<Ingredient>> {
        const ingredients = await this.ingredientService.getAll();

        return new ResponseDto<Ingredient>(ingredients);
    }
}
