import { TutorRepository } from '../../../TutorRepo';
import { TutorProps } from '../../../../domain/interfaces/TutorProps';
import { prisma } from '../../../../database/prisma/prisma';

export class TutorRepositoryPrisma implements TutorRepository {
  async listAll(): Promise<TutorProps[] | undefined> {
    const tutors = await prisma.tutor.findMany({
      include: {
        pets: true,
      },
    });

    return tutors as TutorProps[];
  }

  async create(props: TutorProps): Promise<TutorProps | undefined> {
    const tutor = await prisma.tutor.create({
      data: props as Omit<TutorProps, 'id' | 'pets'>,
    });

    return tutor as TutorProps;
  }

  async update(
    tutorId: string,
    props: Partial<TutorProps>,
  ): Promise<TutorProps | undefined> {
    const tutor = await prisma.tutor.findUnique({
      where: {
        id: tutorId,
      },
    });

    if (!tutor) {
      throw new Error('Tutor not found.');
    }

    const updatedTutor = await prisma.tutor.update({
      where: {
        id: tutorId,
      },
      data: props as Omit<TutorProps, 'id' | 'pets'>,
    });

    return updatedTutor as TutorProps;
  }

  async delete(tutorId: string): Promise<any> {
    await prisma.tutor.delete({
      where: { id: tutorId },
    });
  }
}
