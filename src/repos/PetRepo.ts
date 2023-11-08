import { PetProps } from '../domain/interfaces/PetProps';

export interface PetRepository {
  listAll: () => Promise<PetProps[] | undefined>;
  create: (props: PetProps, tutorId: string) => Promise<PetProps | undefined>;
  update: (
    petId: string,
    tutorId: string,
    props: Partial<PetProps>,
  ) => Promise<PetProps | undefined>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete: (petId: string, tutorId: string) => Promise<any>;
}
