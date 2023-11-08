import { PetRepository } from "../../repos/PetRepo";

export class DeletePet {
    constructor(private repository: PetRepository) {}

    async execute(petId: string, tutorId: string) {
        try {
            const pets = await this.repository.listAll();

            if(pets?.length === 0) {
                throw new Error("Any Pet to delete.");
            }

            const target = pets?.find(pet => pet.id === petId && pet.tutorId === tutorId);

            if(!target) {
                throw new Error("Pet not found.");
            }

            await this.repository.delete(petId, tutorId);

            return `Pet with id: ${petId} deleted.`

        } catch(err:unknown) {
            throw new Error("Delete error.");
        }
    }
}