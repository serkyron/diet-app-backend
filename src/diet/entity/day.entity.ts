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
        nullable: true,
    })
    breakfast: Meal

    @ManyToOne(() => Meal, {
        eager: true,
        onDelete: "SET NULL",
        nullable: true,
    })
    snack1: Meal

    @ManyToOne(() => Meal, {
        eager: true,
        onDelete: "SET NULL",
        nullable: true,
    })
    lunch: Meal

    @ManyToOne(() => Meal, {
        eager: true,
        onDelete: "SET NULL",
        nullable: true,
    })
    snack2: Meal

    @ManyToOne(() => Meal, {
        eager: true,
        onDelete: "SET NULL",
        nullable: true,
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