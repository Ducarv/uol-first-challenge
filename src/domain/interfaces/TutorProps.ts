import { PetProps } from "./PetProps";
export interface TutorProps {
    id?: number | string;
    name: string;
    phone: string;
    email: string;
    date_of_birth: Date;
    zipCode: string;
    pets?: PetProps[]
}