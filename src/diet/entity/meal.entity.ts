import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Ingredient } from "./ingredient.entity";
import { MealToIngredient } from "./meal-to-ingredient.entity";

@Entity()
export class Meal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    name: string;

    @Column({
        name: "created_at",
        type: "datetime",
        nullable: true,
    })
    createdAt: Date;

    @Column({
        name: "updated_at",
        type: "datetime",
        nullable: true,
    })
    updatedAt: Date;

    @OneToMany(() => MealToIngredient, mealToIngredients => mealToIngredients.meal, {
        eager: true,
        cascade: true,
    })
    public mealToIngredients!: MealToIngredient[];
}