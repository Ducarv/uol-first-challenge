import { Request, Response } from 'express';
import { CreatePet } from '../../useCases/Pet/create';
import { PetProps } from '../../domain/interfaces/PetProps';
import { ValidatorPetProps } from '../../validators/pet';

export class CreatePetController {
  constructor(private createPetUseCase: CreatePet) {}

  async handle(request: Request, response: Response) {
    const petProps: PetProps = request.body;
    const { tutorId } = request.params;

    let validatedPetData;

    if (petProps) {
      const validationResult = ValidatorPetProps.safeParse(petProps);

      if (validationResult.success) {
        validatedPetData = validationResult.data;
      } else {
        return response
          .status(400)
          .send({ errors: validationResult.error.issues });
      }
    }

    try {
      const newPet = await this.createPetUseCase.execute(
        validatedPetData as PetProps,
        tutorId,
      );
      response.status(201).json(newPet);
    } catch (err: unknown) {
      response.status(400).json({
        error: 'Failed to create pet',
        message: (err as Error).message,
      });
    }
  }
}
