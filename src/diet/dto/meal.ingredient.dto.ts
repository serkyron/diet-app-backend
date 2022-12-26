import { IsNumber, IsNotEmpty } from "class-validator";

export class MealIngredientDto {
    @IsNotEmpty()
    @IsNumber()
    readonly ingredientId: number;

    @IsNotEmpty()
    @IsNumber()
    readonly amount: number;
}