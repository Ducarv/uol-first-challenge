import { Tutor } from './Tutor';
import { PetProps } from './interfaces/PetProps';

export class Pet {
  id?: number | string;
  name: string;
  species: string;
  carry: string;
  weight: number;
  date_of_birth: Date;
  tutorId?: number | string;
  tutor?: Tutor;

  constructor(props: PetProps) {
    this.name = props.name;
    this.species = props.species;
    this.carry = props.carry;
    this.weight = props.weight;
    this.date_of_birth = props.date_of_birth;
    this.id = props.id;
    this.tutorId = props.tutorId;
    this.tutor = props.tutor;
  }
}
