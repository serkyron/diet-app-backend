import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Meal } from "./meal.entity";

@Entity({
    name: 'day',
})
export class DayEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    name: string;

    @ManyToOne(() => Meal, {
        eager: true,
        onDelete: "SET NULL",
    })
    breakfast: Meal

    @ManyToOne(() => Meal, {
        eager: true,
        onDelete: "SET NULL",
    })
    snack1: Meal

    @ManyToOne(() => Meal, {
        eager: true,
        onDelete: "SET NULL",
    })
    lunch: Meal

    @ManyToOne(() => Meal, {
        eager: true,
        onDelete: "SET NULL",
    })
    snack2: Meal

    @ManyToOne(() => Meal, {
        eager: true,
        onDelete: "SET NULL",
    })
    dinner: Meal

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
}