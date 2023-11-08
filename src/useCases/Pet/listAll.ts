import { PetRepository } from "../../repos/PetRepo";

export class ListAllPets {
    constructor(private repository: PetRepository) {}

    async execute() {
        try {
            const pets = await this.repository.listAll();

            if(pets?.length === 0 || pets!.length < 1) {
                throw new Error("Pets NOT exists!")
            }

            return pets;
        } catch (err: unknown) {
            if(err instanceof Error) {
                throw new Error(err.message);
            }
        }
    }
}