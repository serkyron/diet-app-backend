import { IsNumber, IsString } from "class-validator";

export class UpdateIngredientDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly calories: number;

    @IsNumber()
    readonly proteins: number;

    @IsNumber()
    readonly carbohydrates: number;

    @IsNumber()
    readonly fats: number;
}