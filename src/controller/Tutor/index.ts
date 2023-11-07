// listAllTutors
import { TutorRepositoryPrisma } from "../../repos/implementation/mongo/prisma-orm/TutorRepository";
import { ListAllTutors } from "../../useCases/Tutor/listAll";
import { ListAllTutorsController } from "./listAll.controller";

const listAllTutorsRepository = new TutorRepositoryPrisma();
const listAllTutosUseCase = new ListAllTutors(listAllTutorsRepository)
const listAllTutorsController = new ListAllTutorsController(listAllTutosUseCase);

export {
    //listAll
    listAllTutorsController
}