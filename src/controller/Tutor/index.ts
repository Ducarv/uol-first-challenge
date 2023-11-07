import { TutorRepositoryPrisma } from "../../repos/implementation/mongo/prisma-orm/TutorRepository";
import { CreateTutor } from "../../useCases/Tutor/create";
import { ListAllTutors } from "../../useCases/Tutor/listAll";
import { UpdateTutor } from "../../useCases/Tutor/update";
import { CreateTutorController } from "./create.controller";
import { ListAllTutorsController } from "./listAll.controller";
import { UpdateTutorController } from "./update.controller";

// listAllTutors
const listAllTutorsRepository = new TutorRepositoryPrisma();
const listAllTutosUseCase = new ListAllTutors(listAllTutorsRepository)
const listAllTutorsController = new ListAllTutorsController(listAllTutosUseCase);

// createTutor
const createTutorRepository = new TutorRepositoryPrisma();
const createTutorUseCase = new CreateTutor(createTutorRepository);
const createTutorController = new CreateTutorController(createTutorUseCase);

// updateTutor
const updateTutorRepository = new TutorRepositoryPrisma();
const updateTutorUseCase = new UpdateTutor(updateTutorRepository);
const updateTutorController = new UpdateTutorController(updateTutorUseCase);

export {
    listAllTutorsController,
    createTutorController,
    updateTutorController
}