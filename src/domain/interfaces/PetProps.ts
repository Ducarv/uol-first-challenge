import { Tutor } from '../Tutor';

export interface PetProps {
  id?: number | string;
  name: string;
  species: string;
  carry: string;
  weight: number;
  date_of_birth: Date;
  tutorId?: number | string;
  tutor?: Tutor;
}
