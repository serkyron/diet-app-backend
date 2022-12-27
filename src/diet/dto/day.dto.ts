import { IsNotEmpty, IsString, IsObject } from "class-validator";

export class DayDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsObject()
    readonly breakfast: {id: number};

    @IsNotEmpty()
    @IsObject()
    readonly snack1: {id: number};

    @IsNotEmpty()
    @IsObject()
    readonly lunch: {id: number};

    @IsNotEmpty()
    @IsObject()
    readonly snack2: {id: number};

    @IsNotEmpty()
    @IsObject()
    readonly dinner: {id: number};
}