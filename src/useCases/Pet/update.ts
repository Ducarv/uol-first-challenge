import { PetProps } from "../../domain/interfaces/PetProps";
import { PetRepository } from "../../repos/PetRepo";

export class UpdatePet {
    constructor(private repository: PetRepository) {}

    async execute(petId: string, tutorId: string, props: Partial<PetProps>) {
        try {
            const pets = await this.repository.listAll();
            const target = pets?.find((pet) => pet.id === petId && pet.tutorId === tutorId)

            if(!target) {
                throw new Error("Pet NOT FOUND");
            }

            const updatedPet = {
                ...target,
                ...props
            }

            await this.repository.update(petId, tutorId, updatedPet);
            
            return updatedPet;
        } catch(err: any) {
            if(err instanceof Error) {
                throw new Error("Error to update")
            }
        }
    }
}