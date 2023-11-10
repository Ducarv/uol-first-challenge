import { Request, Response } from 'express';
import { UpdatePet } from '../../useCases/Pet/update';
import { PetProps } from '../../domain/interfaces/PetProps';
import { ValidatorPetProps } from '../../validators/pet';

export class UpdatePetController {
  constructor(private updatePetUseCase: UpdatePet) {}

  async handle(request: Request, response: Response) {
    const updatePetData: Partial<PetProps> = request.body;
    const { petId, tutorId } = request.params;

    const partialValidator = ValidatorPetProps.partial();
    const validationResult = partialValidator.safeParse(updatePetData);

    if (!validationResult.success) {
      return response
        .status(400)
        .json({ errors: validationResult.error.errors });
    }

    try {
      const updatedPet = await this.updatePetUseCase.execute(
        petId,
        tutorId,
        validationResult.data as PetProps,
      );

      response.status(201).json(updatedPet);
    } catch (err: unknown) {
      response.status(400).json({
        error: 'Failed to update pet',
        message: (err as Error).message,
      });
    }
  }
}
