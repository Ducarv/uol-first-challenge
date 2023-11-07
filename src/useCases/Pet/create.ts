import { PetProps } from "../../domain/interfaces/PetProps";
import { PetRepository } from "../../repos/PetRepo";

export class CreatePet {
    constructor(private repository: PetRepository) {}

    async execute(props: PetProps, tutorId: string) {
        try {
            const newPet = await this.repository.create(props, tutorId);
            return newPet;
        } catch(err: any) {
            if(err instanceof Error) {
                throw new Error(err.message);
            }
        }
    }
}