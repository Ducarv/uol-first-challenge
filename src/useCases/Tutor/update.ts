import { TutorProps } from "../../domain/interfaces/TutorProps";
import { TutorRepository } from "../../repos/TutorRepo";

export class UpdateTutor {
    constructor(private repository: TutorRepository) {}

    async execute(tutorId: string, props: TutorProps) {
        try {
            const updateTutor = await this.repository.update(tutorId, props);

            return updateTutor;
        } catch(err: any) {
            if(err instanceof Error) {
                throw new Error(err.message);
            }
        }
    }
}