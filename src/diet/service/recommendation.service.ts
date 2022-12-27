import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, Repository } from "typeorm";
import { Recommendation } from "../entity/recommendation.entity";

@Injectable()
export class RecommendationService {
    constructor(
        @InjectRepository(Recommendation)
        private recommendationRepository: Repository<Recommendation>
    ) {}

    public getAll(): Promise<Recommendation[]> {
        return this.recommendationRepository.find();
    }

    public create(recommendationPartial: DeepPartial<Recommendation>): Promise<Recommendation> {
        return this.recommendationRepository.save(recommendationPartial);
    }

    public async delete(id: number): Promise<void> {
        await this.recommendationRepository.delete({id: id});
    }

    public async update(id: number, recommendationPartial: DeepPartial<Recommendation>): Promise<Recommendation|null> {
        await this.recommendationRepository.update(id, recommendationPartial);

        return this.recommendationRepository.findOneBy({id: id});
    }
}
