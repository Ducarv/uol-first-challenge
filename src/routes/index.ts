import { Request, Response, Router } from "express";
import { createTutorController, listAllTutorsController, updateTutorController } from "../controller/Tutor";

const router = Router();

router.get("/tutors", (request: Request, response: Response) => {
    return listAllTutorsController.handle(request, response)
})

router.post("/tutor", (request: Request, response: Response) => {
    return createTutorController.handle(request, response)
})

router.put("/tutor/:id", (request: Request, response: Response) => {
    return updateTutorController.handle(request, response)
})

export { router }