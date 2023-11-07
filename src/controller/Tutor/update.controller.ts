import { Request, Response } from "express";
import { UpdateTutor } from "../../useCases/Tutor/update";
import { TutorProps } from "../../domain/interfaces/TutorProps";

export class UpdateTutorController {
    constructor(private updateTutorUseCase: UpdateTutor) {}

    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const updateTutorData: TutorProps = request.body

        try {
            const updatedTutor = await this.updateTutorUseCase.execute(id, updateTutorData)
            response.status(202).json(updatedTutor)
        } catch (err: any) {
            response.status(400).json({ error: "error to updade"})
        }
    }
}