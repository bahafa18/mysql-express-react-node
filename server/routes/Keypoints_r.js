import express from "express";
import {
  createKeypoint,
  deleteKeypoint,
  getKeypointById,
  getKeypoints,
  updateKeypoint,
} from "../controllers/Keypoints.c.js";

const router = express.Router();

router.get("/keypoints", getKeypoints);
router.get("/keypoints/:id", getKeypointById);
router.post("/keypoints", createKeypoint);
router.patch("/keypoints/:id", updateKeypoint);
router.delete("/keypoints/:id", deleteKeypoint);

export default router;
