import { PetProps } from "../domain/interfaces/PetProps";

export interface PetRepository {
    create: (props: PetProps, tutorId: string) => Promise<PetProps | undefined>;
    update: (petId: string, tutorId: string, props: Partial<PetProps>) => Promise<PetProps | undefined>;
    delete: (petId: string, tutorId: string) => Promise<any>;
}