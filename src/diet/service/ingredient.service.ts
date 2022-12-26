import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Ingredient } from "../entity/ingredient.entity";
import { DeepPartial, Repository } from "typeorm";

@Injectable()
export class IngredientService {
    constructor(
        @InjectRepository(Ingredient)
        private ingredientRepository: Repository<Ingredient>
    ) {}

    public getAll(): Promise<Ingredient[]> {
        return this.ingredientRepository.find();
    }

    public create(ingredientPartial: DeepPartial<Ingredient>): Promise<Ingredient> {
        return this.ingredientRepository.save(ingredientPartial);
    }

    public async delete(id: number): Promise<void> {
        await this.ingredientRepository.delete({id: id});
    }

    public async update(id: number, ingredientPartial: DeepPartial<Ingredient>): Promise<Ingredient|null> {
        await this.ingredientRepository.update(id,ingredientPartial);

        return this.ingredientRepository.findOneBy({id: id});
    }
}
