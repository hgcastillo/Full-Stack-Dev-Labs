import { employeeRepo } from "../api/employeeRepo";
import type { Employee } from "../types/Employee";

export const employeeService = {
  createEmployee: (firstName: string, departmentName: string) => {
    // Rule 1: Validate First Name length
    if (firstName.trim().length < 3) {
      throw new Error("First name must be at least 3 characters long.");
    }

    // Rule 2: Validate Department exists
    const departments = employeeRepo.getDepartments();
    const deptExists = departments.some((d) => d.name === departmentName);
    if (!deptExists) {
      throw new Error("Please select a valid department.");
    }

    // If valid, save to Repo
    const newEmployee: Employee = { firstName };
    employeeRepo.addEmployee(newEmployee, departmentName);
  },
};
