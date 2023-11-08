import { TutorProps } from '../../../domain/interfaces/TutorProps';
import { TutorRepository } from '../../../repos/TutorRepo';
import { UpdateTutor } from '../update';

describe('UpdateTutor', () => {
  it('should update a tutor correctly', async () => {
    const mockRepository: Pick<TutorRepository, 'update' | 'listAll'> = {
      listAll: async () => [
        {
          id: '1',
          name: 'Tutor 1',
          phone: '12345',
          email: 'tutor1@example.com',
          date_of_birth: new Date(),
          zipCode: '1232145',
          pets: [],
        },
      ],
      update: async (tutorId: string, props: Partial<TutorProps>) =>
        ({
          ...props,
          id: tutorId,
        }) as TutorProps,
    };

    const updateTutor = new UpdateTutor(mockRepository as TutorRepository);
    const tutorId = '1';
    const tutorPropsToUpdate: Partial<TutorProps> = {
      name: 'Updated Tutor Name',
      phone: 'Updated Phone',
    };

    const updatedTutor = await updateTutor.execute(tutorId, tutorPropsToUpdate);

    if (updatedTutor) {
      expect(updatedTutor).toBeDefined();
      expect(updatedTutor.name).toBe('Updated Tutor Name');
      expect(updatedTutor.phone).toBe('Updated Phone');
    }
  });

  it('should handle "Tutor not found" correctly', async () => {
    const mockRepository: Pick<TutorRepository, 'update' | 'listAll'> = {
      listAll: async () => [],
      update: async () => {
        throw new Error('Tutor not found!');
      },
    };

    const updateTutor = new UpdateTutor(mockRepository as TutorRepository);
    const tutorId = '1';
    const tutorPropsToUpdate: Partial<TutorProps> = {
      name: 'Updated Tutor Name',
      phone: 'Updated Phone',
    };

    await expect(
      updateTutor.execute(tutorId, tutorPropsToUpdate),
    ).rejects.toThrow('Tutor not found!');
  });
});
