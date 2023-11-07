import { Request, Response, Router } from "express";
import { listAllTutorsController } from "../controller/Tutor";

const router = Router();

router.get("/tutors", (request: Request, response: Response) => {
    return listAllTutorsController.handle(request, response)
})

export { router }