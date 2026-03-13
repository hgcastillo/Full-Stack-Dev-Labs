import { Router } from "express";
import {
  getAllDepartments,
  createNewEmployee,
} from "../controllers/employeeController";

const router = Router();

// GET: http://localhost:5000/api/employees
router.get("/", getAllDepartments);

// POST: http://localhost:5000/api/employees
router.post("/", createNewEmployee);

export default router;
