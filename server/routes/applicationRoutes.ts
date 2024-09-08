import express from "express";
import { applyForJob } from "../controllers/applicationController";

const router = express.Router();

router.post("", applyForJob);

export default router;
