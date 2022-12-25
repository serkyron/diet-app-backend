import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Ingredient } from "../entity/ingredient.entity";
import { Repository } from "typeorm";
import { Meal } from "../entity/meal.entity";

@Injectable()
export class MealService {
    constructor(
        @InjectRepository(Ingredient)
        private mealRepository: Repository<Meal>
    ) {}

    public getAll(): Promise<Meal[]> {
        return this.mealRepository.find();
    }

    // public create(name: string, ): Promise<Ingredient> {
    //     return this.ingredientRepository.save({
    //         name,
    //         calories,
    //         proteins,
    //         carbohydrates,
    //         fats,
    //     });
    // }

    public async delete(id: number): Promise<void> {
        let meal = await this.mealRepository.findOneBy({id: id});

        if (meal === null) {
            return;
        }

        await this.mealRepository.update(id, {
            ingredients: [],
        });

        await this.mealRepository.delete({id: id});
    }
}
