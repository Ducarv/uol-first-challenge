import { PetRepository } from "../../../PetRepo"
import { PetProps } from '../../../../domain/interfaces/PetProps';
import { prisma } from '../../../../database/prisma/prisma';
import { Pet } from "@prisma/client";

export class PetRepositoryPrisma implements PetRepository {
    async create(props: PetProps, tutorId: string): Promise<PetProps | undefined> {
      const pet = await prisma.pet.create({
        data: {
          ...props as Pet,
          tutorId: tutorId
        },
      });
      return pet as PetProps;
    }
  
    async update(petId: string, tutorId: string, props: Partial<PetProps>): Promise<PetProps | undefined> {
      const pet = await prisma.pet.update({
        where: { 
          id: petId, 
          tutorId: tutorId 
        },
        data: props as Pet,
      });

      return pet as PetProps;
    }
  
    async delete(petId: string, tutorId:string): Promise<any> {
      await prisma.pet.delete({
        where: { 
          id: petId, 
          tutorId: tutorId
        },
      });
    }
  }