import { PetProps } from "../../domain/interfaces/PetProps";
import { PetRepository } from "../../repos/PetRepo";

export class UpdatePet {
    constructor(private repository: PetRepository) {}

    async execute(petId: string, tutorId: string, props: Partial<PetProps>) {
        try {
            const updatedPet = await this.repository.update(petId, tutorId, props);
            return updatedPet;
        } catch(err: any) {
            if(err instanceof Error) {
                throw new Error("update PET error.")
            }
        }
    }
}