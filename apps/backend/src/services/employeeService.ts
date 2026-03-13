import { employeeRepo } from "../repositories/employeeRepository";
import type { Employee } from "../types/Employee";

export const employeeService = {
  getDepartments: () => {
    return employeeRepo.getDepartments();
  },

  createEmployee: (firstName: string, departmentName: string) => {
    // Validation logic migrated from Front-End
    if (!firstName || firstName.trim().length < 3) {
      throw new Error("First name must be at least 3 characters long.");
    }

    const departments = employeeRepo.getDepartments();
    const deptExists = departments.some((d) => d.name === departmentName);
    if (!deptExists) {
      throw new Error("Please select a valid department.");
    }

    const newEmployee: Employee = { firstName };
    employeeRepo.addEmployee(newEmployee, departmentName);
  },
};
