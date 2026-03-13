import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const getAllDepartments = (req: Request, res: Response) => {
  try {
    const departments = employeeService.getDepartments();
    res.status(200).json(departments);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createNewEmployee = (req: Request, res: Response) => {
  try {
    const { firstName, departmentName } = req.body;
    // The Service handles the business logic/validation
    employeeService.createEmployee(firstName, departmentName);
    res.status(201).json({ message: "Employee added successfully" });
  } catch (error: any) {
    // Return 400 for validation errors (like name too short)
    res.status(400).json({ message: error.message });
  }
};
