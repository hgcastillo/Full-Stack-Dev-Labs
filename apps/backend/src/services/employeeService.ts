import { employeeRepo } from "../repositories/employeeRepository";
import type { Employee } from "../types/Employee";

export const employeeService = {
  getDepartments: async () => {
    return await employeeRepo.getDepartments();
  },

  createEmployee: async (firstName: string, departmentName: string) => {
    if (!firstName || firstName.trim().length < 3) {
      throw new Error("First name must be at least 3 characters long.");
    }

    const departments = await employeeRepo.getDepartments();
    const deptExists = departments.some(
      (d: { name: string }) => d.name === departmentName,
    );
    if (!deptExists) {
      throw new Error("Please select a valid department.");
    }

    const newEmployee: Employee = { firstName };
    await employeeRepo.addEmployee(newEmployee, departmentName);
  },
};
