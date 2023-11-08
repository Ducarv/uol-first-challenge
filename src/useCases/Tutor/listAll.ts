import { TutorRepository } from '../../repos/TutorRepo';

export class ListAllTutors {
  constructor(private repository: TutorRepository) {}

  async execute() {
    try {
      const tutors = await this.repository.listAll();

      if (tutors?.length === 0 || tutors!.length < 1) {
        throw new Error('Tutors NOT exists!');
      }

      return tutors;
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  }
}
