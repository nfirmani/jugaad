import {   Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Utente {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number
}