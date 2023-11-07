import { PetProps } from "../../../domain/interfaces/PetProps";
import { PetRepository } from "../../../repos/PetRepo"
import { CreatePet } from "../create";

describe("CreatePet", () => {
    it("should create a pet correctly", async () => {
        const mockRepository: Pick<PetRepository, "create"> = {
            create: async (props, tutorId) => ({ id: "1", ...props, tutorId }),
        };

        const createPet = new CreatePet(mockRepository as PetRepository);
        const petProps: PetProps = {
            name: "pet 1",
            species: "dog",
            carry: "carrier",
            weight: 20,
            date_of_birth: new Date()
        };

        const tutorId = "1-tutorId";
        const newPet = await createPet.execute(petProps, tutorId);

        if(newPet) {
            expect(newPet.id).toBeDefined();
            expect(newPet.name).toBe("pet 1");
            expect(newPet.species).toBe("dog");
            expect(newPet.tutorId).toBe(tutorId);
        }
    });

    it("should handle errors correctly", async () => {
        const mockRepository: Pick<PetRepository, "create"> = {
            create: async () => {
                throw new Error("simulated error");
            }
        }

        const createPet = new CreatePet(mockRepository as PetRepository);
        const petProps = {
            name: 'Pet 1',
            species: 'Dog',
            carry: 'Carrier',
            weight: 20,
            date_of_birth: new Date(),
          };
          const tutorId = '1-tutorId';

          await expect(createPet.execute(petProps, tutorId)).rejects.toThrow("simulated error")
    })
})