import { TutorRepository } from "../../../repos/TutorRepo";
import { ListAllTutors } from "../listAll";

describe('ListAllTutors', () => {
  it('should list all tutors correctly', async () => {
    const mockRepository: Pick<TutorRepository, "listAll"> = {
        listAll: async () => [
          {
            id: "1",
            name: "Tutor 1",
            phone: "12345",
            email: "tutor1@example.com",
            date_of_birth: new Date(),
            zipCode: "1232145",
            pets: [],
          },
          {
            id: "2",
            name: "Tutor 2",
            phone: "12345",
            email: "tutor2@example.com",
            date_of_birth: new Date(),
            zipCode: "1232145",
            pets: [],
          }
        ],
    };
      
    const listAllTutors = new ListAllTutors(mockRepository as TutorRepository);
    const result = await listAllTutors.execute();

    if(result) {
        expect(result.length).toBeGreaterThanOrEqual(1);
        expect(result[0].name).toBe('Tutor 1');
    } else {
        fail("Result is undefined");
    }
  });

  it('should handle errors correctly', async () => {
    const mockRepository: Pick<TutorRepository, "listAll"> = {
      listAll: async () => {
        throw new Error("Simulated error");
      },
    };

    const listAllTutors = new ListAllTutors(mockRepository as TutorRepository)

    await expect(listAllTutors.execute()).rejects.toThrow('Simulated error');
  });
});
