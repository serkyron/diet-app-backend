import { IsNumber, IsNotEmpty, IsString, IsEnum } from "class-validator";

export enum Categories {
    PROTEINS = "proteins",
    CARBOHYDRATES = "carbohydrates",
    FATS = "fats",
}

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

    @IsNotEmpty()
    @IsEnum(Categories)
    readonly category: string;
}