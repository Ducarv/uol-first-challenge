import { TutorRepository } from "../../repos/TutorRepo";

export class DeleteTutor {
    constructor(private repository: TutorRepository) {}

    async execute(tutorId: string) {
        try {
            const tutors = await this.repository.listAll();
            const target = tutors?.find(tutor => tutor.id === tutorId);

            if(target) {
                await this.repository.delete(tutorId);
                return `Tutor with ID: ${tutorId} deleted`;
            } else {
                throw new Error(`Tutor with ID: ${tutorId}, NOT FOUND!`);
            }
        } catch(err: unknown) {
            throw new Error(`Tutor with ID: ${tutorId}, Delete Error!`);
        }
    }
}