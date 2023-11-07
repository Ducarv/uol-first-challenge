import { TutorRepository } from "../../../TutorRepo";
import { TutorProps } from "../../../../domain/interfaces/TutorProps";
import { prisma } from "../../../../database/prisma/prisma";
import { Tutor } from "@prisma/client";

export class TutorRepositoryPrisma implements TutorRepository {
  async listAll(): Promise<TutorProps[] | undefined> {
    const tutors = await prisma.tutor.findMany();

    return tutors as TutorProps[];
  }

  async create(props: TutorProps): Promise<TutorProps | undefined> {
    const tutor = await prisma.tutor.create({
      data: props as Tutor,
    });

    return tutor as TutorProps;
  }

  async update(tutorId: string, props: Partial<TutorProps>): Promise<TutorProps | undefined> {
    const tutor = await prisma.tutor.update({
        where: {
            id: tutorId,
        },
        data: props as Tutor,
        include: {
            pets: true,
        }
    });

    return tutor as TutorProps;
  }

  async delete(tutorId: string): Promise<void> {
    await prisma.tutor.delete({
      where: { id: tutorId },
    });
  }
}
