import { Router } from "express";
import {
  getAllRoles,
  createNewRole,
} from "../controllers/leadershipController";

const router = Router();

// GET: http://localhost:5000/api/leadership
router.get("/", getAllRoles);

// POST: http://localhost:5000/api/leadership
router.post("/", createNewRole);

export default router;
