import { organizationData } from "../data/organizationData";
import type { Department, Employee } from "../types/Employee";

export const employeeRepo = {
  /**
   * Retrieves the current organizational structure and employee list.
   * Used by the GET /api/employees route.
   */
  getDepartments: (): Department[] => {
    // Return a copy of the data to maintain immutability
    return [...organizationData];
  },

  /**
   * Adds a new employee to a specific department in the temporary data file.
   * Used by the POST /api/employees route.
   */
  addEmployee: (newEmployee: Employee, departmentName: string): void => {
    const department = organizationData.find(
      (dept) => dept.name === departmentName,
    );

    if (department) {
      department.employees.push(newEmployee);
    } else {
      throw new Error(`Department "${departmentName}" not found.`);
    }
  },
};
