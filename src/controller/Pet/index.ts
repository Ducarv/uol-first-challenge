import { PetRepositoryPrisma } from '../../repos/implementation/mongo/prisma-orm/PetRepository';
import { CreatePet } from '../../useCases/Pet/create';
import { DeletePet } from '../../useCases/Pet/delete';
import { UpdatePet } from '../../useCases/Pet/update';
import { CreatePetController } from './create.controller';
import { DeletePetController } from './delete.controller';
import { UpdatePetController } from './update.controller';

const createPetRepository = new PetRepositoryPrisma();
const createPetUseCase = new CreatePet(createPetRepository);
const createPetController = new CreatePetController(createPetUseCase);

const updatePetRepository = new PetRepositoryPrisma();
const updatePetUseCase = new UpdatePet(updatePetRepository);
const updatePetController = new UpdatePetController(updatePetUseCase);

const deletePetRepository = new PetRepositoryPrisma();
const deletePetUseCase = new DeletePet(deletePetRepository);
const deletePetController = new DeletePetController(deletePetUseCase);

export { createPetController, updatePetController, deletePetController };
