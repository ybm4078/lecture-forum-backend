// 회원과 관련된 라우터 모음

import Router from "express";
import userController from "../controllers/userController.ts";

const router = Router();

router.post("/create", userController.createUser);
router.post("/login", userController.createUser);
router.put("/update", () => {});
router.delete("/delete", () => {});


export default router;
