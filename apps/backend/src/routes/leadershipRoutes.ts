import { Router, Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express";
import {
  getAllRoles,
  createNewRole,
} from "../controllers/leadershipController";

const router = Router();

// 1. Custom middleware to block unauthorized API requests
const requireApiAuth = (req: Request, res: Response, next: NextFunction) => {
  const auth = getAuth(req);

  if (!auth.userId) {
    // Send standard JSON instead of a redirect
    return res.status(401).json({ message: "Unauthorized access" });
  }

  next();
};

// GET: http://localhost:5000/api/leadership
router.get("/", getAllRoles);

// POST: http://localhost:5000/api/leadership
router.post("/", requireApiAuth, createNewRole);

export default router;
