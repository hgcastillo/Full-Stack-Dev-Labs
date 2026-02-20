import { useState, useEffect } from "react";
import { DepartmentSection } from "../components/DepartmentSection";
import { EmployeeForm } from "../components/EmployeeForm";
import { employeeRepo } from "../api/employeeRepo";
import type { Department } from "../types/Employee";

export const EmployeesPage = () => {
  const [orgData, setOrgData] = useState<Department[]>([]);

  // Load data on mount
  useEffect(() => {
    setOrgData(employeeRepo.getDepartments());
  }, []);

  const refreshData = () => {
    // Force a re-render with updated data
    setOrgData([...employeeRepo.getDepartments()]);
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
      <EmployeeForm departments={orgData} onEmployeeAdded={refreshData} />
    </div>
  );
};
