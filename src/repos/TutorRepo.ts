import { TutorProps } from "../domain/interfaces/TutorProps";

export interface TutorRepository {
    listAll: () => Promise<TutorProps[] | undefined>;
    create: (props: TutorProps) => Promise<TutorProps | undefined>;
    update: (tutorId: number, props: Partial<TutorProps>) => Promise<TutorProps | undefined>;
    delete: (tutorId: number) => Promise<void>;
}