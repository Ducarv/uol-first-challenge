import { PetProps } from '../../../domain/interfaces/PetProps';
import { PetRepository } from '../../../repos/PetRepo';
import { CreatePet } from '../create';

describe('CreatePet', () => {
  it('should create a pet correctly', async () => {
    const mockRepository: Pick<PetRepository, 'create'> = {
      create: async (props, tutorId) => ({ id: '1', ...props, tutorId }),
    };

    const createPet = new CreatePet(mockRepository as PetRepository);
    const petProps: PetProps = {
      name: 'pet 1',
      species: 'dog',
      carry: 'carrier',
      weight: 20,
      date_of_birth: new Date(),
    };

    const tutorId = '1-tutorId';
    const newPet = await createPet.execute(petProps, tutorId);

    if (newPet) {
      expect(newPet.id).toBeDefined();
      expect(newPet.name).toBe('pet 1');
      expect(newPet.species).toBe('dog');
      expect(newPet.tutorId).toBe(tutorId);
    }
  });

  it('should throw an error if name is missing', async () => {
    const mockRepository: Pick<PetRepository, 'create'> = {
      create: async (props: PetProps) => {
        if (!props.name) {
          throw new Error('Validation error: name is required');
        }

        return { id: '1', ...props } as PetProps;
      },
    };

    const createPet = new CreatePet(mockRepository as PetRepository);

    const petPropsWithoutName: Partial<PetProps> = {
      species: 'dog',
      carry: 'carrier',
      weight: 20,
      date_of_birth: new Date(),
    };

    const tutorId = '1-tutor';

    await expect(
      createPet.execute(petPropsWithoutName as PetProps, tutorId),
    ).rejects.toThrow('Validation error: name is required');
  });

  it('should throw an error if name is empty', async () => {
    const mockRepository: Pick<PetRepository, 'create'> = {
      create: async (props) => {
        if (!props.name || props.name.trim().length === 0) {
          throw new Error('Validation error: name cannot be empty');
        }
        return { id: '1', ...props } as PetProps;
      },
    };

    const createPet = new CreatePet(mockRepository as PetRepository);
    const petProps: PetProps = {
      name: '',
      species: 'dog',
      carry: 'carrier',
      weight: 20,
      date_of_birth: new Date(),
    };

    const tutorId = '1-tutor';

    await expect(createPet.execute(petProps, tutorId)).rejects.toThrow(
      'Validation error: name cannot be empty',
    );
  });

  it('should throw an error if species is missing', async () => {
    const mockRepository: Pick<PetRepository, 'create'> = {
      create: async (props: PetProps) => {
        if (!props.species) {
          throw new Error('Validation error: species is required');
        }

        return { id: '1', ...props } as PetProps;
      },
    };

    const createPet = new CreatePet(mockRepository as PetRepository);

    const petPropsWithoutName: Partial<PetProps> = {
      name: 'pet name',
      carry: 'carrier',
      weight: 20,
      date_of_birth: new Date(),
    };

    const tutorId = '1-tutor';

    await expect(
      createPet.execute(petPropsWithoutName as PetProps, tutorId),
    ).rejects.toThrow('Validation error: species is required');
  });

  it('should throw an error if species is empty', async () => {
    const mockRepository: Pick<PetRepository, 'create'> = {
      create: async (props) => {
        if (!props.species || props.species.trim().length === 0) {
          throw new Error('Validation error: species cannot be empty');
        }
        return { id: '1', ...props } as PetProps;
      },
    };

    const createPet = new CreatePet(mockRepository as PetRepository);
    const petProps: PetProps = {
      name: 'pet name',
      species: '',
      carry: 'carrier',
      weight: 20,
      date_of_birth: new Date(),
    };

    const tutorId = '1-tutor';

    await expect(createPet.execute(petProps, tutorId)).rejects.toThrow(
      'Validation error: species cannot be empty',
    );
  });

  it('should throw an error if carry is missing', async () => {
    const mockRepository: Pick<PetRepository, 'create'> = {
      create: async (props: PetProps) => {
        if (!props.carry) {
          throw new Error('Validation error: carry is required');
        }

        return { id: '1', ...props } as PetProps;
      },
    };

    const createPet = new CreatePet(mockRepository as PetRepository);

    const petPropsWithoutName: Partial<PetProps> = {
      name: 'pet name',
      species: 'dog',
      weight: 20,
      date_of_birth: new Date(),
    };

    const tutorId = '1-tutor';

    await expect(
      createPet.execute(petPropsWithoutName as PetProps, tutorId),
    ).rejects.toThrow('Validation error: carry is required');
  });

  it('should throw an error if carry is empty', async () => {
    const mockRepository: Pick<PetRepository, 'create'> = {
      create: async (props) => {
        if (!props.carry || props.carry.trim().length === 0) {
          throw new Error('Validation error: carry cannot be empty');
        }
        return { id: '1', ...props } as PetProps;
      },
    };

    const createPet = new CreatePet(mockRepository as PetRepository);
    const petProps: PetProps = {
      name: 'pet name',
      species: 'dog',
      carry: '',
      weight: 20,
      date_of_birth: new Date(),
    };

    const tutorId = '1-tutor';

    await expect(createPet.execute(petProps, tutorId)).rejects.toThrow(
      'Validation error: carry cannot be empty',
    );
  });

  it('should throw an error if weight is missing', async () => {
    const mockRepository: Pick<PetRepository, 'create'> = {
      create: async (props: PetProps) => {
        if (!props.weight) {
          throw new Error('Validation error: weight is required');
        }

        return { id: '1', ...props } as PetProps;
      },
    };

    const createPet = new CreatePet(mockRepository as PetRepository);

    const petPropsWithoutName: Partial<PetProps> = {
      name: 'pet name',
      species: 'dog',
      carry: 'g',
      date_of_birth: new Date(),
    };

    const tutorId = '1-tutor';

    await expect(
      createPet.execute(petPropsWithoutName as PetProps, tutorId),
    ).rejects.toThrow('Validation error: weight is required');
  });

  it('should throw an error if weight is empty', async () => {
    const mockRepository: Pick<PetRepository, 'create'> = {
      create: async (props) => {
        if (!props.weight || props.weight < 0) {
          throw new Error(
            'Validation error: carry cannot be empty or less than 0',
          );
        }
        return { id: '1', ...props } as PetProps;
      },
    };

    const createPet = new CreatePet(mockRepository as PetRepository);
    const petProps: PetProps = {
      name: 'pet name',
      species: 'dog',
      carry: 'g',
      weight: 0,
      date_of_birth: new Date(),
    };

    const tutorId = '1-tutor';

    await expect(createPet.execute(petProps, tutorId)).rejects.toThrow(
      'Validation error: carry cannot be empty or less than 0',
    );
  });

  it('should throw an error if date_of_birth is missing', async () => {
    const mockRepository: Pick<PetRepository, 'create'> = {
      create: async (props: PetProps) => {
        if (!props.date_of_birth) {
          throw new Error('Validation error: date_of_birth is required');
        }

        return { id: '1', ...props } as PetProps;
      },
    };

    const createPet = new CreatePet(mockRepository as PetRepository);

    const petPropsWithoutName: Partial<PetProps> = {
      name: 'pet name',
      species: 'dog',
      carry: 'g',
      weight: 10,
    };

    const tutorId = '1-tutor';

    await expect(
      createPet.execute(petPropsWithoutName as PetProps, tutorId),
    ).rejects.toThrow('Validation error: date_of_birth is required');
  });

  it('should throw an error if date_of_birth is empty', async () => {
    const mockRepository: Pick<PetRepository, 'create'> = {
      create: async (props) => {
        if (
          !props.date_of_birth ||
          props.date_of_birth.toString().trim().length
        ) {
          throw new Error('Validation error: date_of_birth cannot be empty');
        }
        return { id: '1', ...props } as PetProps;
      },
    };

    const createPet = new CreatePet(mockRepository as PetRepository);
    const petProps: PetProps = {
      name: 'pet name',
      species: 'dog',
      carry: 'g',
      weight: 0,
      date_of_birth: new Date(' '),
    };

    const tutorId = '1-tutor';

    await expect(createPet.execute(petProps, tutorId)).rejects.toThrow(
      'Validation error: date_of_birth cannot be empty',
    );
  });

  it('should handle errors correctly', async () => {
    const mockRepository: Pick<PetRepository, 'create'> = {
      create: async () => {
        throw new Error('simulated error');
      },
    };

    const createPet = new CreatePet(mockRepository as PetRepository);
    const petProps = {
      name: 'Pet 1',
      species: 'Dog',
      carry: 'Carrier',
      weight: 20,
      date_of_birth: new Date(),
    };
    const tutorId = '1-tutorId';

    await expect(createPet.execute(petProps, tutorId)).rejects.toThrow(
      'simulated error',
    );
  });
});
