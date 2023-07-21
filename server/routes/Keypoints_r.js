import express from "express";
import {
  createKeypoint,
  deleteKeypoint,
  getKeypointById,
  getKeypointTypes,
  getKeypoints,
  updateKeypoint,
} from "../controllers/Keypoints.c.js";

const router = express.Router();

router.get("/keypoints", getKeypoints);
router.get("/keypoints/:id", getKeypointById);
router.post("/keypoints", createKeypoint);
router.patch("/keypoints/:id", updateKeypoint);
router.delete("/keypoints/:id", deleteKeypoint);
router.get("/keypointTypes", getKeypointTypes);

export default router;
