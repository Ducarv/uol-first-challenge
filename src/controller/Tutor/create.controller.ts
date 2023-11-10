import { Request, Response } from 'express';
import { CreateTutor } from '../../useCases/Tutor/create';
import { TutorProps } from '../../domain/interfaces/TutorProps';
import { ValidatorTutorProps } from '../../validators/tutor';
import { ZodError } from 'zod';

export class CreateTutorController {
  constructor(private createTutorUseCase: CreateTutor) {}

  async handle(request: Request, response: Response) {
    const tutorData = request.body;
    let validatedTutorData;

    if (tutorData) {
      const validationResult = ValidatorTutorProps.safeParse(tutorData);

      if (validationResult.success) {
        validatedTutorData = validationResult.data;
      } else {
        return response
          .status(400)
          .send({ errors: validationResult.error.issues });
      }
    }

    try {
      const newTutor = await this.createTutorUseCase.execute(
        validatedTutorData as unknown as TutorProps,
      );
      response.status(201).json(newTutor);
    } catch (err: unknown) {
      response.status(500).json({ error: 'An error occurred' });
    }
  }
}
