import { Router } from "express";
import { getUsers, postUser,getUser } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.post("/", postUser);
router.get("/:cognitoId", getUser);


export default router;
