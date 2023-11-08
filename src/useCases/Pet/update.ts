import { PetProps } from '../../domain/interfaces/PetProps';
import { PetRepository } from '../../repos/PetRepo';

export class UpdatePet {
  constructor(private repository: PetRepository) {}

  async execute(petId: string, tutorId: string, props: Partial<PetProps>) {
    try {
      const pets = await this.repository.listAll();
      const target = pets?.find(
        (pet) => pet.id === petId && pet.tutorId === tutorId,
      );

      if (!target) {
        throw new Error('Pet NOT FOUND');
      }

      await this.repository.update(petId, tutorId, props);
      return props as PetProps;
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error('Error to update');
      }
    }
  }
}
