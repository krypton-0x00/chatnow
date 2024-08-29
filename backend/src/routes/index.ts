import { Router, Request, Response } from "express";
import AuthController from "../controllers/auth.controller.js";

const router = Router();

router.post("/api/login", AuthController.login);

export default Router;
