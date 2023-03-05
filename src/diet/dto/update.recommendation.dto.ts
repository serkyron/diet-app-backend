import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateRecommendationDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    readonly amount: number;
}