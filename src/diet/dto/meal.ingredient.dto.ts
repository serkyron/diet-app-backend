import { IsNumber, IsNotEmpty, IsObject } from "class-validator";

export class MealIngredientDto {
    @IsNotEmpty()
    @IsObject()
    readonly ingredient: {id: number};

    @IsNotEmpty()
    @IsNumber()
    readonly amount: number;
}