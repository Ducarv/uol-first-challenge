import { TutorRepository } from "../../repos/TutorRepo";

export class ListAllTutors {
    constructor(
        private repository: TutorRepository
    ) {}

    async execute() {
        try {
            const tutors = await this.repository.listAll();

            return tutors;
        } catch(err: any) {
            if(err instanceof Error) {
                throw new Error(err.message);
            }
        }
    }
}