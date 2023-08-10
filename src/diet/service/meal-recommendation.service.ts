import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, Repository } from "typeorm";
import { MealRecommendation } from "../entity/meal-recommendation.entity";

@Injectable()
export class MealRecommendationService {
    constructor(
        @InjectRepository(MealRecommendation)
        private recommendationRepository: Repository<MealRecommendation>
    ) {}

    public getAll(): Promise<MealRecommendation[]> {
        return this.recommendationRepository.find();
    }

    public create(recommendationPartial: DeepPartial<MealRecommendation>): Promise<MealRecommendation> {
        return this.recommendationRepository.save(recommendationPartial);
    }

    public async delete(id: number): Promise<void> {
        await this.recommendationRepository.delete({id: id});
    }

    public async update(id: number, recommendationPartial: DeepPartial<MealRecommendation>): Promise<MealRecommendation|null> {
        await this.recommendationRepository.update(id, recommendationPartial);

        return this.recommendationRepository.findOneBy({id: id});
    }
}
