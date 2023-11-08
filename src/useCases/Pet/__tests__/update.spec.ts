import { PetRepository } from '../../../repos/PetRepo';
import { PetProps } from '../../../domain/interfaces/PetProps';
import { UpdatePet } from '../update';

describe('UpdatePet', () => {
  it('should update a pet correctly', async () => {
    const mockRepository: Pick<PetRepository, 'listAll' | 'update'> = {
      listAll: async () => [
        {
          id: '1',
          name: 'pet 1',
          species: 'dog',
          carry: 'g',
          weight: 10,
          date_of_birth: new Date(),
          tutorId: '10',
        },
      ],
      update: async (
        petId: string,
        tutorId: string,
        props: Partial<PetProps>,
      ) =>
        ({
          ...props,
          id: petId,
          tutorId: tutorId,
        }) as PetProps,
    };

    const updatePet = new UpdatePet(mockRepository as PetRepository);
    const petId = '1';
    const tutorId = '10';
    const petPropsToUpdate: Partial<PetProps> = {
      name: 'Rafael',
      species: 'Turtle',
    };

    const updatedPet = await updatePet.execute(
      petId,
      tutorId,
      petPropsToUpdate,
    );

    if (updatedPet) {
      expect(updatedPet).toBeDefined();
      expect(updatedPet.id).toBe(petId);
      expect(updatedPet.tutorId).toBe(tutorId);
      expect(updatedPet.name).toBe('Rafael');
      expect(updatedPet.species).toBe('Turtle');
    }
  });

  it('should handle update pet errors', async () => {
    const mockRepository: Pick<PetRepository, 'listAll' | 'update'> = {
      listAll: async () => [],
      update: async () => {
        throw new Error('Error to update');
      },
    };

    const updatePet = new UpdatePet(mockRepository as PetRepository);
    const petId = '1';
    const tutorId = '10';
    const petPropsToUpdate: Partial<PetProps> = {
      name: 'Update name',
      species: 'Update specie',
    };

    await expect(
      updatePet.execute(petId, tutorId, petPropsToUpdate),
    ).rejects.toThrow('Error to update');
  });
});
