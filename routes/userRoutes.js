import express from "express"
import { userController } from "../controllers/userController.js"


const router = express.Router()

router.get("/users", userController.allUsers)
router.post("/users", userController.createUser)
router.get("/users/:id", userController.userId)
router.patch('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

export { router }