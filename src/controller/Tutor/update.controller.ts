import { Request, Response } from 'express';
import { UpdateTutor } from '../../useCases/Tutor/update';
import { TutorProps } from '../../domain/interfaces/TutorProps';

export class UpdateTutorController {
  constructor(private updateTutorUseCase: UpdateTutor) {}

  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const updateTutorData: Partial<TutorProps> = request.body;

      const updatedTutor = await this.updateTutorUseCase.execute(
        id,
        updateTutorData,
      );
      response.status(202).json(updatedTutor);
    } catch (err: unknown) {
      response.status(400).json({
        error: 'Failed to update tutor',
        message: (err as Error).message,
      });
    }
  }
}
