import { useState, useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  Protect,
  OrganizationSwitcher,
} from "@clerk/clerk-react";
import { DepartmentSection } from "../components/DepartmentSection";
import { EmployeeForm } from "../components/EmployeeForm";
import { employeeRepo } from "../api/employeeRepo";
import type { Department } from "../types/Employee";

export const EmployeesPage = () => {
  const [orgData, setOrgData] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await employeeRepo.getDepartments();
      setOrgData(data);
    } catch (error) {
      console.error("Failed to load employees:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) return <div>Loading Employees...</div>;

  return (
    <div className="employees-page">
      {/* 2. ADDED SWITCHER: This is your 'Organization Icon' */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1rem",
        }}
      >
        <OrganizationSwitcher hidePersonal={true} />
      </div>

      {orgData.map((dept) => (
        <DepartmentSection
          key={dept.name}
          name={dept.name}
          employees={dept.employees}
        />
      ))}
      <hr />

      <SignedIn>
        <Protect
          role="org:admin"
          fallback={
            <p style={{ textAlign: "center", color: "#666" }}>
              You are logged in as a Viewer. Only Administrators can add
              employees.
            </p>
          }
        >
          <EmployeeForm departments={orgData} onEmployeeAdded={loadData} />
        </Protect>
      </SignedIn>

      <SignedOut>
        <div
          className="login-prompt"
          style={{
            textAlign: "center",
            padding: "2rem",
            background: "#f5f5f5",
            borderRadius: "8px",
          }}
        >
          <h3>Please log in to add a new employee.</h3>
          <SignInButton mode="modal" />
        </div>
      </SignedOut>
    </div>
  );
};
