import { Router, Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express";
import {
  getAllDepartments,
  createNewEmployee,
} from "../controllers/employeeController";

const router = Router();

/**
 * Lab 5.2: Role-Based Authorization Middleware
 * This blocks anyone who isn't a designated Administrator in Clerk.
 */
const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { sessionClaims } = getAuth(req);

  // 1. Check if the user is part of an organization and has the admin role
  // Clerk stores roles in sessionClaims.org_role
  if (sessionClaims?.org_role !== "org:admin") {
    return res.status(403).json({
      message:
        "Forbidden: You must be an Administrator to perform this action.",
    });
  }

  next();
};

// GET: Accessible to everyone (Viewers and Admins)
router.get("/", getAllDepartments);

// POST: Strictly restricted to Admins for Lab 5.2
router.post("/", requireAdmin, createNewEmployee);

export default router;
