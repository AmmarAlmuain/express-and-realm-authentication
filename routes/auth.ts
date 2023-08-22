import express from "express";
import { Request, Response } from "express";
import { User } from "../models/user";
import { register, login } from "../controllers/user";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

export default router;
