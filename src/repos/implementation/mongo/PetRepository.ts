import { PetRepository } from "./PetRepo"
import { PetProps } from '../../../domain/interfaces/PetProps';
import { prisma } from '../prisma/prisma';
import { Pet } from "@prisma/client";

export class PetRepositoryPrisma implements PetRepository {
    async create(props: PetProps): Promise<PetProps | undefined> {
      const pet = await prisma.pet.create({
        data: {
          name: props.name,
          species: props.species,
          carry: props.carry,
          weight: props.weight,
          date_of_birth: props.date_of_birth,
          tutorId: props.tutorId ? String(props.tutorId) : undefined,
        },
      });
      return pet as PetProps;
    }
  
    async update(petId: string, props: Partial<PetProps>): Promise<PetProps | undefined> {
      const pet = await prisma.pet.update({
        where: { id: petId },
        data: props as Pet,
      });
      
      return pet as PetProps;
    }
  
    async delete(petId: string): Promise<void> {
      await prisma.pet.delete({
        where: { id: petId },
      });
    }
  }