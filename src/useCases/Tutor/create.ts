import { TutorProps } from "../../domain/interfaces/TutorProps";
import { TutorRepository } from "../../repos/TutorRepo";

export class CreateTutor {
    constructor(private repository: TutorRepository) {}

    async execute(props: TutorProps) {
        try {
            const newTutor = await this.repository.create(props);
            
            return newTutor;
        } catch(err: unknown) {
            if(err instanceof Error) {
                throw new Error(err.message);
            }
        }
    }
}