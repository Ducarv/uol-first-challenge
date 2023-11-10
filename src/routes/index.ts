import { Request, Response, Router } from 'express';
import {
  createTutorController,
  deleteTutorController,
  listAllTutorsController,
  updateTutorController,
} from '../controller/Tutor';
import {
  createPetController,
  deletePetController,
  updatePetController,
} from '../controller/Pet';

const router = Router();

router.get('/tutors', async (request: Request, response: Response) => {
  await listAllTutorsController.handle(request, response);
});

router.post('/tutor', async (request: Request, response: Response) => {
  await createTutorController.handle(request, response);
});

router.put('/tutor/:id', async (request: Request, response: Response) => {
  await updateTutorController.handle(request, response);
});

router.delete('/tutor/:id', async (request: Request, response: Response) => {
  await deleteTutorController.handle(request, response);
});

router.post('/pet/:tutorId', async (request: Request, response: Response) => {
  await createPetController.handle(request, response);
});

router.put(
  '/pet/:petId/tutor/:tutorId',
  async (request: Request, response: Response) => {
    await updatePetController.handle(request, response);
  },
);

router.delete(
  '/pet/:petId/tutor/:tutorId',
  async (request: Request, response: Response) => {
    await deletePetController.handle(request, response);
  },
);

export { router };
