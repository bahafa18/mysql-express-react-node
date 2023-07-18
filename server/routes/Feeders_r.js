import express from "express";
import {
  createFeeder,
  getFeeders,
  getFeederById,
  updateFeeder,
  deleteFeeder,
  getFeeders_v,
} from "../controllers/Feeders_c.js";

const router = express.Router();

// router.get("/feeders", getFeeders);
router.get("/feeders", getFeeders_v);
router.get("/feeders/:id", getFeederById);
router.post("/feeders", createFeeder);
router.patch("/feeders/:id", updateFeeder);
router.delete("/feeders/:id", deleteFeeder);

export default router;
