import { IsNumber, IsNotEmpty, IsString } from "class-validator";

export class IngredientDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    readonly calories: number;

    @IsNotEmpty()
    @IsNumber()
    readonly proteins: number;

    @IsNotEmpty()
    @IsNumber()
    readonly carbohydrates: number;

    @IsNotEmpty()
    @IsNumber()
    readonly fats: number;
}