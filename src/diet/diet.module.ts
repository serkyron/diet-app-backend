import { Module } from '@nestjs/common';
import {DietService} from "./service/diet.service";
import {DietController} from "./controller/diet.controller";
import {HttpModule} from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ingredient } from "./entity/ingredient.entity";
import { IngredientController } from "./controller/ingredient.controller";
import { IngredientService } from "./service/ingredient.service";

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([
            Ingredient,
        ])
    ],
    providers: [
        DietService,
        IngredientService,
    ],
    controllers: [
        DietController,
        IngredientController,
    ],
})
export class DietModule {
}
