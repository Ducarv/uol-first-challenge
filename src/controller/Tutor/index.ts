import { TutorRepositoryPrisma } from '../../repos/implementation/mongo/prisma-orm/TutorRepository';
import { CreateTutor } from '../../useCases/Tutor/create';
import { DeleteTutor } from '../../useCases/Tutor/delete';
import { ListAllTutors } from '../../useCases/Tutor/listAll';
import { UpdateTutor } from '../../useCases/Tutor/update';
import { CreateTutorController } from './create.controller';
import { DeleteTutorController } from './delete.controller';
import { ListAllTutorsController } from './listAll.controller';
import { UpdateTutorController } from './update.controller';

const listAllTutorsRepository = new TutorRepositoryPrisma();
const listAllTutosUseCase = new ListAllTutors(listAllTutorsRepository);
const listAllTutorsController = new ListAllTutorsController(
  listAllTutosUseCase,
);

const createTutorRepository = new TutorRepositoryPrisma();
const createTutorUseCase = new CreateTutor(createTutorRepository);
const createTutorController = new CreateTutorController(createTutorUseCase);

const updateTutorRepository = new TutorRepositoryPrisma();
const updateTutorUseCase = new UpdateTutor(updateTutorRepository);
const updateTutorController = new UpdateTutorController(updateTutorUseCase);

const deleteTutorRepository = new TutorRepositoryPrisma();
const deleteTutorUseCase = new DeleteTutor(deleteTutorRepository);
const deleteTutorController = new DeleteTutorController(deleteTutorUseCase);

export {
  listAllTutorsController,
  createTutorController,
  updateTutorController,
  deleteTutorController,
};
