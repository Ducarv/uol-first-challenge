import { Request, Response, Router } from "express";
import { createTutorController, listAllTutorsController } from "../controller/Tutor";

const router = Router();

router.get("/tutors", (request: Request, response: Response) => {
    return listAllTutorsController.handle(request, response)
})

router.post("/tutor", (request: Request, response: Response) => {
    return createTutorController.handle(request, response)
})

export { router }