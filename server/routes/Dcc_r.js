import express from "express";
import { getDcc } from "../controllers/Dcc_c.js";

const router = express.Router();

router.get("/dcc", getDcc);

export default router;
