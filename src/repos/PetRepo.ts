import { PetProps } from "../domain/interfaces/PetProps";

export interface PetRepository {
    create: (props: PetProps) => Promise<PetProps | undefined>;
    update: (PetId: number, props: Partial<PetProps>) => Promise<PetProps | undefined>;
    delete: (PetId: number) => Promise<void>;
}