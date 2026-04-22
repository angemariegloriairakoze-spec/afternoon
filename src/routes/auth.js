import express from "express";
import { login, Register } from "../controllers/auth.js";

const authRoutes= express.Router();

authRoutes.post("/register",Register);
authRoutes.post("/signin",login);

export default authRoutes;