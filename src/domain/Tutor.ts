import { PetProps } from "./interfaces/PetProps";
import { TutorProps } from "./interfaces/TutorProps";

export class Tutor {
    id?: number | string;
    name: string;
    phone: string;
    email: string;
    date_of_birth: Date;
    pets: PetProps[]
    
    constructor(props: TutorProps) {
        this.name = props.name;
        this.phone = props.phone;
        this.email = props.email;
        this.date_of_birth = props.date_of_birth;
        this.pets = props.pets
        this.id = props.id
    }
}