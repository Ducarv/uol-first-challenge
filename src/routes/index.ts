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

router.get('/tutors', (request: Request, response: Response) => {
  return listAllTutorsController.handle(request, response);
});

router.post('/tutor', (request: Request, response: Response) => {
  return createTutorController.handle(request, response);
});

router.put('/tutor/:id', (request: Request, response: Response) => {
  return updateTutorController.handle(request, response);
});

router.delete('/tutor/:id', (request: Request, response: Response) => {
  return deleteTutorController.handle(request, response);
});

// pet routes

router.post('/pet/:tutorId', (request: Request, response: Response) => {
  return createPetController.handle(request, response);
});

router.put(
  '/pet/:petId/tutor/:tutorId',
  (request: Request, response: Response) => {
    return updatePetController.handle(request, response);
  },
);

router.delete(
  '/pet/:petId/tutor/:tutorId',
  (request: Request, response: Response) => {
    return deletePetController.handle(request, response);
  },
);

export { router };
