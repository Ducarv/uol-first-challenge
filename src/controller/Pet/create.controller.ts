import { Request, Response } from "express";
import { CreatePet } from "../../useCases/Pet/create";
import { PetProps } from "../../domain/interfaces/PetProps";

export class CreatePetController {
    constructor(private createPetUseCase: CreatePet) {}

    async handle(request: Request, response: Response) {
        const petProps: PetProps = request.body;
        const { tutorId } = request.params; 

        try {
            const newPet = await this.createPetUseCase.execute(petProps, tutorId)
            response.status(201).json(newPet)
        } catch (err: unknown) {
            response.status(400).json({ error: 'Failed to create pet', message: (err as Error).message })
        }
    }
}