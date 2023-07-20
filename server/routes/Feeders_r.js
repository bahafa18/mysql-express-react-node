import express from "express";
import {
  createFeeder,
  getFeeders,
  getFeederById,
  updateFeeder,
  deleteFeeder,
  getFeederByGi,
} from "../controllers/Feeders_c.js";

const router = express.Router();

router.get("/feeders", getFeeders);
router.get("/feeders/:id", getFeederById);
router.get("/feeders/idgi/:gi", getFeederByGi);
router.post("/feeders", createFeeder);
router.patch("/feeders/:id", updateFeeder);
router.delete("/feeders/:id", deleteFeeder);

export default router;
