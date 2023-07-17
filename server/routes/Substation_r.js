import express from "express";
import {
  createSubstation,
  getSubstations,
  getSubstationById,
  updateSubstation,
  deleteSubstation,
} from "../controllers/Substations_c.js";

const router = express.Router();

router.get("/substations", getSubstations);
router.get("/substations/:id", getSubstationById);
router.post("/substations", createSubstation);
router.patch("/substations/:id", updateSubstation);
router.delete("/substations/:id", deleteSubstation);

export default router;
