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
import { DayEntity } from "./entity/day.entity";
import { MealRecommendation } from "./entity/meal-recommendation.entity";
import { MealRecommendationService } from "./service/meal-recommendation.service";
import { MealRecommendationController } from "./controller/meal-recommendation.controller";

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([
            Ingredient,
            Meal,
            MealToIngredient,
            Recommendation,
            MealRecommendation,
            DayEntity,
        ])
    ],
    providers: [
        DietService,
        IngredientService,
        MealService,
        RecommendationService,
        MealRecommendationService,
    ],
    controllers: [
        DietController,
        IngredientController,
        MealController,
        RecommendationController,
        MealRecommendationController,
    ],
})
export class DietModule {
}
