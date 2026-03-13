import type { Department, Employee } from "../types/Employee";

const API_URL = "http://localhost:5000/api/employees";

export const employeeRepo = {
  getDepartments: async (): Promise<Department[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch departments");
    return response.json();
  },

  addEmployee: async (
    newEmployee: Employee,
    departmentName: string,
  ): Promise<void> => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: newEmployee.firstName,
        departmentName,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add employee");
    }
  },
};
