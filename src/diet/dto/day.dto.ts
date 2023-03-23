import { IsNotEmpty, IsString, IsObject } from "class-validator";

export class DayDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    readonly breakfast: {id: number};

    readonly snack1: {id: number};

    readonly lunch: {id: number};

    readonly snack2: {id: number};

    readonly dinner: {id: number};
}