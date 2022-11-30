import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500,
        name: 'username',
    })
    username: string;

    @Column({
        length: 500,
        name: 'first_name',
    })
    firstName: string;

    @Column({
        length: 500,
        name: 'last_name',
    })
    lastName: string;

    @Column({
        length: 500,
        name: 'password',
    })
    password: string;
}