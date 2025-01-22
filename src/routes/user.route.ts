import express from "express";
import * as user from "../controller/user.controller";


const router = express.Router()



router.get("/", user.GetAll)
// router.get("/:id")
// router.post("/")
// router.put("/:id")
// router.delete("/:id")

export { router as userRouter }