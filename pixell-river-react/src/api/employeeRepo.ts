import { organizationData } from "../data/organizationData";
import type { Department, Employee } from "../types/Employee";

export const employeeRepo = {
  getDepartments: (): Department[] => {
    return [...organizationData];
  },
  addEmployee: (newEmployee: Employee, departmentName: string): void => {
    const dept = organizationData.find((d) => d.name === departmentName);
    if (dept) {
      dept.employees.push(newEmployee);
    }
  },
};
