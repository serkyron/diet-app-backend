import { IsNumber, IsString } from "class-validator";

export class UpdateRecommendationDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly amount: number;
}