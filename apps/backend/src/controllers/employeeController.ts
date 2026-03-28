import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const getAllDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await employeeService.getDepartments();
    res.status(200).json(departments);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createNewEmployee = async (req: Request, res: Response) => {
  try {
    const { firstName, departmentName } = req.body;
    await employeeService.createEmployee(firstName, departmentName);
    res.status(201).json({ message: "Employee added successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
