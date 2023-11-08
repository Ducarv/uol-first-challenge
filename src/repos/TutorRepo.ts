import { TutorProps } from '../domain/interfaces/TutorProps';

export interface TutorRepository {
  listAll: () => Promise<TutorProps[] | undefined>;
  create: (props: TutorProps) => Promise<TutorProps | undefined>;
  update: (
    tutorId: string,
    props: Partial<TutorProps>,
  ) => Promise<TutorProps | undefined>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete: (tutorId: string) => Promise<any>;
}
