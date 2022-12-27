import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recommendation {
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