import express from "express";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();

// POST route to register a user
router.post('/', registerUser); 

export default router;
