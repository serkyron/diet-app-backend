import { IsEnum, IsNumber, IsString } from "class-validator";
import { Categories } from "./ingredient.dto";

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

    @IsEnum(Categories)
    readonly category: string;
}