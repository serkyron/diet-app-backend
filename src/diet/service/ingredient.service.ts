import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Ingredient } from "../entity/ingredient.entity";
import { Repository } from "typeorm";

@Injectable()
export class IngredientService {
    constructor(
        @InjectRepository(Ingredient)
        private ingredientRepository: Repository<Ingredient>
    ) {}

    public getAll(): Promise<Ingredient[]> {
        return this.ingredientRepository.find();
    }

    public create(name: string, calories: number, proteins: number, carbohydrates: number, fats: number): Promise<Ingredient> {
        return this.ingredientRepository.save({
            name,
            calories,
            proteins,
            carbohydrates,
            fats,
        });
    }

    public async delete(id: number): Promise<void> {
        await this.ingredientRepository.delete({id: id});
    }

    public async update(id: number, name?: string, calories?: number, proteins?: number, carbohydrates?: number, fats?: number): Promise<Ingredient|null> {
        await this.ingredientRepository.update(id,{
            name,
            calories,
            proteins,
            carbohydrates,
            fats,
        });

        return this.ingredientRepository.findOneBy({id: id});
    }
}
