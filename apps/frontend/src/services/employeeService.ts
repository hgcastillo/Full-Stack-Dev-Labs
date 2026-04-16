import { employeeRepo } from "../api/employeeRepo";

export const employeeService = {
  createEmployee: async (
    firstName: string,
    departmentName: string,
    token: string | null,
  ) => {
    // Pass the token down to the repository
    const newEmployee = { firstName };
    return await employeeRepo.addEmployee(newEmployee, departmentName, token);
  },
};
