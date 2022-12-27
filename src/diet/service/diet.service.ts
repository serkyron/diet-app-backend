import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, Repository } from "typeorm";
import { DayEntity } from "../entity/day.entity";

@Injectable()
export class DietService {
    constructor(
        @InjectRepository(DayEntity)
        private dayRepository: Repository<DayEntity>,
    ) {}

    public getAll(): Promise<DayEntity[]> {
        return this.dayRepository.find();
    }

    public async create(dayPartial: DeepPartial<DayEntity>): Promise<DayEntity> {
        dayPartial.createdAt = new Date();
        dayPartial.updatedAt = new Date();

        const day = await this.dayRepository.save(dayPartial);
        let reloadedDay = await this.dayRepository.findOneBy({id: day.id});

        return reloadedDay!;
    }

    public async delete(id: number): Promise<void> {
        await this.dayRepository.delete({id: id});
    }
}
