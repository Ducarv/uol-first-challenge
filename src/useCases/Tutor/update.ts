import { TutorProps } from '../../domain/interfaces/TutorProps';
import { TutorRepository } from '../../repos/TutorRepo';

export class UpdateTutor {
  constructor(private repository: TutorRepository) {}

  async execute(tutorId: string, props: Partial<TutorProps>) {
    try {
      const tutors = await this.repository.listAll();
      const currentTutor = tutors?.find((tutor) => tutor.id === tutorId);

      if (!currentTutor) {
        throw new Error('Tutor not found!');
      }

      await this.repository.update(tutorId, props);

      return props as TutorProps;
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  }
}
