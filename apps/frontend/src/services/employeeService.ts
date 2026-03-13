import { employeeRepo } from "../api/employeeRepo";

export const employeeService = {
  createEmployee: async (firstName: string, departmentName: string) => {
    // The Back-end now handles validation, so we just pass the data
    const newEmployee = { firstName };
    return await employeeRepo.addEmployee(newEmployee, departmentName);
  },
};
