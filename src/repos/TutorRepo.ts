import { TutorProps } from "../domain/interfaces/TutorProps";

export interface TutorRepository {
    listAll: () => Promise<TutorProps[] | undefined>;
    create: (props: TutorProps) => Promise<TutorProps | undefined>;
    update: (tutorId: string, props: Partial<TutorProps>) => Promise<TutorProps | undefined>;
    delete: (tutorId: string) => Promise<void>;
}