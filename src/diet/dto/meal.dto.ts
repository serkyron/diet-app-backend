import { IsNotEmpty, IsString, IsArray } from "class-validator";
import { MealIngredientDto } from "./meal.ingredient.dto";

export class MealDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsArray()
    readonly ingredients: MealIngredientDto[];
}