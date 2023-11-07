import { PetRepositoryPrisma } from "../../repos/implementation/mongo/prisma-orm/PetRepository";
import { CreatePet } from "../../useCases/Pet/create";
import { CreatePetController } from "./create.controller";


// create pet
const createPetRepository = new PetRepositoryPrisma();
const createPetUseCase = new CreatePet(createPetRepository);
const createPetController = new CreatePetController(createPetUseCase);

export {
    createPetController
}