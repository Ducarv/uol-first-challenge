import { Request, Response } from "express";
import { DeleteTutor } from "../../useCases/Tutor/delete";

export class DeleteTutorController {
    constructor(private deleteTutorUseCase: DeleteTutor) {}

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        try {
            await this.deleteTutorUseCase.execute(id);
            response.status(200).json({ message: `Tutor with id: ${id} deleted.`})
        } catch (err: any) {
            response.status(400).json({ error: 'Failed to delete tutor', message: (err as Error).message })
        }
    }
}