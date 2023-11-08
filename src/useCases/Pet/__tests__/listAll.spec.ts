import { PetRepository } from '../../../repos/PetRepo';
import { ListAllPets } from '../listAll';

describe('ListAllPets', () => {
  it('should list all pets correctly', async () => {
    const mockRepository: Pick<PetRepository, 'listAll'> = {
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
        {
          id: '20',
          name: 'pet 20',
          species: 'bird',
          carry: 'p',
          weight: 2,
          date_of_birth: new Date(),
          tutorId: '90',
        },
      ],
    };

    const listAllPets = new ListAllPets(mockRepository as PetRepository);
    const result = await listAllPets.execute();

    if (result) {
      expect(result.length).toBeGreaterThanOrEqual(1);
      expect(result[0].name).toBe('pet 1');
    } else {
      fail('result is undefined');
    }
  });

  it('should handle errors correctly', async () => {
    const mockRepository: Pick<PetRepository, 'listAll'> = {
      listAll: async () => {
        throw new Error('simulated error');
      },
    };

    const listAllPets = new ListAllPets(mockRepository as PetRepository);

    await expect(listAllPets.execute()).rejects.toThrow('simulated error');
  });
});
