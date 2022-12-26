import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Ingredient } from "../entity/ingredient.entity";
import { DataSource, DeepPartial, Repository } from "typeorm";
import { Meal } from "../entity/meal.entity";
import { MealIngredientDto } from "../dto/meal.ingredient.dto";
import { MealToIngredient } from "../entity/meal-to-ingredient.entity";

@Injectable()
export class MealService {
    constructor(
        @InjectRepository(Meal)
        private mealRepository: Repository<Meal>,
        @InjectRepository(MealToIngredient)
        private mealToIngredientRepository: Repository<MealToIngredient>,
    ) {}

    public getAll(): Promise<Meal[]> {
        return this.mealRepository.find();
    }

    public async create(mealPartial: DeepPartial<Meal>): Promise<Meal> {
        mealPartial.createdAt = new Date();
        mealPartial.updatedAt = new Date();

        return this.mealRepository.save(mealPartial);
    }

    public async delete(id: number): Promise<void> {
        await this.mealRepository.delete({id: id});
    }
}
