import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MealToIngredient } from "./meal-to-ingredient.entity";

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

    @Column({
        length: 500,
    })
    category: string;

    @OneToMany(() => MealToIngredient, mealToIngredients => mealToIngredients.ingredient)
    public mealToIngredients!: MealToIngredient[];
}