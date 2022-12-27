import { Module } from '@nestjs/common';
import {DietService} from "./service/diet.service";
import {DietController} from "./controller/diet.controller";
import {HttpModule} from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ingredient } from "./entity/ingredient.entity";
import { IngredientController } from "./controller/ingredient.controller";
import { IngredientService } from "./service/ingredient.service";
import { MealService } from "./service/meal.service";
import { MealController } from "./controller/meal.controller";
import { Meal } from "./entity/meal.entity";
import { MealToIngredient } from "./entity/meal-to-ingredient.entity";
import { RecommendationController } from "./controller/recommendation.controller";
import { RecommendationService } from "./service/recommendation.service";
import { Recommendation } from "./entity/recommendation.entity";

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([
            Ingredient,
            Meal,
            MealToIngredient,
            Recommendation,
        ])
    ],
    providers: [
        DietService,
        IngredientService,
        MealService,
        RecommendationService,
    ],
    controllers: [
        DietController,
        IngredientController,
        MealController,
        RecommendationController,
    ],
})
export class DietModule {
}
