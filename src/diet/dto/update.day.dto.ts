import { IsString, IsObject } from "class-validator";

export class UpdateDayDto {
    @IsString()
    readonly name: string;

    @IsObject()
    readonly breakfast: {id: number};

    @IsObject()
    readonly snack1: {id: number};

    @IsObject()
    readonly lunch: {id: number};

    @IsObject()
    readonly snack2: {id: number};

    @IsObject()
    readonly dinner: {id: number};
}