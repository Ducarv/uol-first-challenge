import { Request, Response } from 'express';
import { CreateTutor } from '../../useCases/Tutor/create';
import { TutorProps } from '../../domain/interfaces/TutorProps';

export class CreateTutorController {
  constructor(private createTutorUseCase: CreateTutor) {}

  async handle(request: Request, response: Response) {
    const tutorData: TutorProps = request.body;

    try {
      const newTutor = await this.createTutorUseCase.execute(tutorData);
      response.status(201).json(newTutor);
    } catch (err: unknown) {
      response.status(500).json({ error: 'An error occurred' });
    }
  }
}
