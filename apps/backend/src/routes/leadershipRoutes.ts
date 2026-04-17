import { Router, Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express";
import {
  getAllRoles,
  createNewRole,
} from "../controllers/leadershipController";

const router = Router();

/**
 * Lab 5.2: Role-Based Authorization Middleware
 * Verifies that the user has the 'org:admin' role before allowing data changes.
 */
const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { sessionClaims } = getAuth(req);

  // Check for the specific administrator role within the Clerk Organization
  if (sessionClaims?.org_role !== "org:admin") {
    return res.status(403).json({
      message:
        "Forbidden: You must be an Administrator to manage leadership roles.",
    });
  }

  next();
};

// GET: Visible to all authenticated users (Viewers/Members/Admins)
router.get("/", getAllRoles);

// POST: Restricted to Admins only for Lab 5.2
router.post("/", requireAdmin, createNewRole);

export default router;
