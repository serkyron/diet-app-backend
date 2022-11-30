import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    name: string;

    @Column({
        type: 'double',
        name: 'calories',
    })
    calories: number;

    @Column({
        type: 'double',
        name: 'proteins',
    })
    proteins: number;

    @Column({
        type: 'double',
        name: 'carbohydrates',
    })
    carbohydrates: number;

    @Column({
        type: 'double',
        name: 'fats',
    })
    fats: number;
}