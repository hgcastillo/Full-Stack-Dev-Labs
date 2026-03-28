import { prisma } from "../utils/prisma";
import type { Employee } from "../types/Employee";

export const employeeRepo = {
  getDepartments: async () => {
    return await prisma.department.findMany({
      include: { employees: true },
    });
  },

  addEmployee: async (newEmployee: Employee, departmentName: string) => {
    const department = await prisma.department.findUnique({
      where: { name: departmentName },
    });

    if (!department)
      throw new Error(`Department "${departmentName}" not found.`);

    await prisma.employee.create({
      data: {
        firstName: newEmployee.firstName,
        lastName: newEmployee.lastName,
        departmentId: department.id,
      },
    });
  },
};
