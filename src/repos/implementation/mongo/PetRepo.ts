import { PetProps } from "../../../domain/interfaces/PetProps";

export interface PetRepository {
    create: (props: PetProps) => Promise<PetProps | undefined>;
    update: (PetId: string, props: Partial<PetProps>) => Promise<PetProps | undefined>;
    delete: (PetId: string) => Promise<void>;
}