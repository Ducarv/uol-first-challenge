import { PetProps } from "./interfaces/PetProps";

export class Pet {
    id?: number;
    name: string;
    species: string;
    carry: string;
    weight: number;
    date_of_birth: Date

    constructor(props: PetProps) {
        this.name = props.name;
        this.species = props.species;
        this.carry = props.carry;
        this.weight = props.weight;
        this.date_of_birth = props.date_of_birth;
        this.id = props.id
    }
}