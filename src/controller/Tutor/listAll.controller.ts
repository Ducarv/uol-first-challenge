import { Request, Response } from "express";
import { ListAllTutors } from "../../useCases/Tutor/listAll";

export class ListAllTutorsController {
    constructor(
        private listAllUseCase: ListAllTutors,
    ) {}

    async handle(request: Request, response: Response) {
        try {
            const tutors = await this.listAllUseCase.execute();

            response.status(200).json(tutors);
        } catch(err: any) {
            response.status(400).send((err as Error).message)
        }
    }
}