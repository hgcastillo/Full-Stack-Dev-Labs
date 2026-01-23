import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { DepartmentSection } from "./components/DepartmentSection";
import { EmployeeForm } from "./components/EmployeeForm";
import { organizationData } from "./data/organizationData";
import { type Employee } from "./types/Employee";

function App() {
  const currentYear = new Date().getFullYear();

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
    <div className="App">
      <Header />

      <main id="employee-container">
        {orgData.map((dept) => (
          <DepartmentSection
            key={dept.name}
            name={dept.name}
            employees={dept.employees}
          />
        ))}

        <hr />

        <EmployeeForm departments={orgData} onAddEmployee={handleAddEmployee} />
      </main>

      <footer>
        <p>Copyright Pixell River Financial {currentYear}.</p>
      </footer>
    </div>
  );
}

export default App;
