import { TutorRepositoryPrisma } from "../../repos/implementation/mongo/prisma-orm/TutorRepository";
import { CreateTutor } from "../../useCases/Tutor/create";
import { ListAllTutors } from "../../useCases/Tutor/listAll";
import { CreateTutorController } from "./create.controller";
import { ListAllTutorsController } from "./listAll.controller";

// listAllTutors
const listAllTutorsRepository = new TutorRepositoryPrisma();
const listAllTutosUseCase = new ListAllTutors(listAllTutorsRepository)
const listAllTutorsController = new ListAllTutorsController(listAllTutosUseCase);

// createTutors
const createTutorRepository = new TutorRepositoryPrisma();
const createTutorUseCase = new CreateTutor(createTutorRepository);
const createTutorController = new CreateTutorController(createTutorUseCase);

export {
    listAllTutorsController,
    createTutorController
}