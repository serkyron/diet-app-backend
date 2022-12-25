import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Meal } from "./meal.entity";
import { Ingredient } from "./ingredient.entity";

@Entity()
export class MealToIngredient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'amount',
    })
    amount!: number;

    @ManyToOne(() => Meal, (meal) => meal.mealToIngredients)
    public meal!: Meal;

    @ManyToOne(() => Ingredient, (ingredient) => ingredient.mealToIngredients)
    public ingredient!: Ingredient;
}