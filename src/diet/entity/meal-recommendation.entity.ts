import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MealRecommendation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500,
        unique: true
    })
    name: string;

    @Column({
        type: 'double',
    })
    amount: number;
}