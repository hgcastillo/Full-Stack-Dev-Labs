import { useState } from "react";
import { DepartmentSection } from "../components/DepartmentSection";
import { EmployeeForm } from "../components/EmployeeForm";
import { organizationData } from "../data/organizationData";
import { type Employee } from "../types/Employee";

export const EmployeesPage = () => {
  const [orgData, setOrgData] = useState(organizationData);

  const handleAddEmployee = (newEmp: Employee, deptName: string) => {
    setOrgData((prevData) => {
      return prevData.map((dept) => {
        if (dept.name === deptName) {
          return {
            ...dept,
            employees: [...dept.employees, newEmp],
          };
        }
        return dept;
      });
    });
  };

  return (
    <div className="employees-page">
      {orgData.map((dept) => (
        <DepartmentSection
          key={dept.name}
          name={dept.name}
          employees={dept.employees}
        />
      ))}
      <hr />
      <EmployeeForm departments={orgData} onAddEmployee={handleAddEmployee} />
    </div>
  );
};
