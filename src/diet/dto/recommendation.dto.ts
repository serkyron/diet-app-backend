import { IsNumber, IsNotEmpty, IsString } from "class-validator";

export class RecommendationDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    readonly amount: number;
}