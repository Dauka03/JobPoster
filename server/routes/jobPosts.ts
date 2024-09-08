import express from "express";
import {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
  getJobById,
} from "../controllers/jobController";
import { authenticateJWT } from "../middleware/authMiddleware";

const router = express.Router();

router.get("", getJobs);
router.get("/:id", getJobById);
router.post("", authenticateJWT, createJob);
router.put("/:id", authenticateJWT, updateJob);
router.delete("/:id", authenticateJWT, deleteJob);

export default router;
