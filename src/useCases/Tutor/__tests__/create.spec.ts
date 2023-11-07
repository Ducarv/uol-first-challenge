import { TutorProps } from '../../../domain/interfaces/TutorProps';
import { TutorRepository } from '../../../repos/TutorRepo';
import { CreateTutor } from '../create';

describe('CreateTutor', () => {
  it('should create a tutor correctly', async () => {
    const mockRepository: Pick<TutorRepository, "create"> = {
        create: async (props: TutorProps) => ({ id: '1', ...props }),
    };

    const createTutor = new CreateTutor(mockRepository as TutorRepository);
    const tutorProps = {
      name: 'Tutor 1',
      phone: '12345',
      email: 'tutor1@example.com',
      date_of_birth: new Date(),
      zipCode: "1232145",
      pets: [],
    };
    const newTutor = await createTutor.execute(tutorProps);

    if(newTutor) {
        expect(newTutor.id).toBeDefined();
        expect(newTutor.name).toBe('Tutor 1');
        expect(newTutor.phone).toBe('12345');
        expect(newTutor.email).toBe('tutor1@example.com');
    }
  });

  it('should handle errors correctly', async () => {
    const mockRepository: Pick<TutorRepository, "create"> = {
        create: async () => {
            throw new Error('Simulated error');
        },
    };

    const createTutor = new CreateTutor(mockRepository as TutorRepository);
    const tutorProps = {
      name: 'Tutor 1',
      phone: '12345',
      email: 'tutor1@example.com',
      date_of_birth: new Date(),
      zipCode: "1232145",
      pets: [],
    };

    await expect(createTutor.execute(tutorProps)).rejects.toThrow('Simulated error');
  });
});
