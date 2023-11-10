import { Request, Response } from 'express';
import { UpdateTutor } from '../../useCases/Tutor/update';
import { TutorProps } from '../../domain/interfaces/TutorProps';
import { ValidatorTutorProps } from '../../validators/tutor';

export class UpdateTutorController {
  constructor(private updateTutorUseCase: UpdateTutor) {}

  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const updateTutorData: Partial<TutorProps> = request.body;

      const partialValidator = ValidatorTutorProps.partial();
      const validationResult = partialValidator.safeParse(updateTutorData);

      if (!validationResult.success) {
        return response
          .status(400)
          .json({ errors: validationResult.error.errors });
      }

      const updatedTutor = await this.updateTutorUseCase.execute(
        id,
        validationResult.data as TutorProps,
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
