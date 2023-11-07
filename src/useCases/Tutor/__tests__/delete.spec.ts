import { TutorRepository } from "../../../repos/TutorRepo"
import { DeleteTutor } from "../delete";

describe("DeleteTutor", () => {
    it("should delete an existing tutor correctly", async () => {
        const mockRepository: Pick<TutorRepository, "listAll" | "delete"> = {
            listAll: async () => [
                {
                    id: "1",
                    name: "Tutor 1",
                    phone: "12345",
                    email: "tutor1@example.com",
                    date_of_birth: new Date(),
                    pets: [],
                },
            ],

            delete: async (tutorId: string) => {
                return `Tutor with ID: ${tutorId} deleted`;
            },
        };

        const deleteTutor = new DeleteTutor(mockRepository as TutorRepository);
        const tutorId = "1";
        const result = await deleteTutor.execute(tutorId);

        expect(result).toBe(`Tutor with ID: ${tutorId} deleted`)
    });

    it("should handle ERROR correctly", async () => {
        const mockRepository: Pick<TutorRepository, "listAll" | "delete"> = {
            listAll: async () => [],
            delete: async (tutorId: string) => {}
        }

        const deleteTutor = new DeleteTutor(mockRepository as TutorRepository);
        const tutorId = "1";
        await expect(deleteTutor.execute(tutorId)).rejects.toThrow(`Tutor with ID: ${tutorId}, Delete Error!`)
    })
})