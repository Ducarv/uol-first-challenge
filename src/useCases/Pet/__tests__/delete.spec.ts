import { PetRepository } from "../../../repos/PetRepo"
import { DeletePet } from "../delete";

describe("DeletePet", () => {
    it("should delete an existing pet correctly", async () => {
        const mockRepository: Pick<PetRepository, "listAll" | "delete"> = {
            listAll: async () => [
                {
                    id: "1",
                    name: "pet 1",
                    species: "dog",
                    carry: "g",
                    weight: 10,
                    date_of_birth: new Date(),
                    tutorId: "10"
                }
            ],

            delete: async (petId: string, tutorId: string) => {
                return `Pet with id: ${petId} deleted.`
            }
        };

        const deletePet = new DeletePet(mockRepository as PetRepository);
        const petId = "1";
        const tutorId = "10";
        const result = await deletePet.execute(petId, tutorId);

        expect(result).toBe(`Pet with id: ${petId} deleted.`)
    })

    it("should handle ERROR correctly", async () => {
        const mockRespository: Pick<PetRepository, "listAll" | "delete"> = {
            listAll: async () => [],
            delete: async (petId: string, tutorId: string) => {}
        }

        const deletePet = new DeletePet(mockRespository as PetRepository);
        const petId = "1";
        const tutorId = "10";
        
        await expect(deletePet.execute(petId, tutorId))
        .rejects
        .toThrow("Delete error.")
    })
})