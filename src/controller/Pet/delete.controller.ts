import { Request, Response } from 'express';
import { DeletePet } from '../../useCases/Pet/delete';

export class DeletePetController {
  constructor(private deletePetUseCase: DeletePet) {}

  async handle(request: Request, response: Response) {
    const { petId, tutorId } = request.params;

    try {
      await this.deletePetUseCase.execute(petId, tutorId);
      response.status(200).json({
        message: `Pet with id: ${petId} \n from Tutor with id: ${tutorId} deleted.`,
      });
    } catch (err: unknown) {
      response.status(400).json({
        error: 'Failed to delete pet',
        message: (err as Error).message,
      });
    }
  }
}
