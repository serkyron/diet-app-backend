import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, Repository } from "typeorm";
import { Meal } from "../entity/meal.entity";
import { MealToIngredient } from "../entity/meal-to-ingredient.entity";
import { Ingredient } from "../entity/ingredient.entity";

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

        const meal = await this.mealRepository.save(mealPartial);
        let reloadedMeal = await this.mealRepository.findOneBy({id: meal.id});

        return reloadedMeal!;
    }

    public async delete(id: number): Promise<void> {
        await this.mealRepository.delete({id: id});
    }

    public async update(id: number, ingredientPartial: DeepPartial<Meal>): Promise<Meal|null> {
        await this.mealRepository.update(id, ingredientPartial);

        return this.mealRepository.findOneBy({id: id});
    }
}
