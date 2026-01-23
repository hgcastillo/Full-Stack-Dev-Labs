import { useState, type FormEvent } from "react";
import { type Department, type Employee } from "../types/Employee";

interface Props {
  departments: Department[];
  onAddEmployee: (employee: Employee, departmentName: string) => void;
}

export const EmployeeForm = ({ departments, onAddEmployee }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [selectedDept, setSelectedDept] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setError(null);

    if (firstName.trim().length < 3) {
      setError("First name must be at least 3 characters long.");
      return;
    }

    if (!selectedDept) {
      setError("Please select a department.");
      return;
    }

    const newEmployee: Employee = { firstName };
    onAddEmployee(newEmployee, selectedDept);

    setFirstName("");
    setSelectedDept("");
  };

  return (
    <section className="employee-form-container">
      <h2>Add New Employee</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="add-employee-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="e.g. Sarah"
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <select
            id="department"
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
          >
            <option value="">-- Select Department --</option>
            {departments.map((dept) => (
              <option key={dept.name} value={dept.name}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Add Employee</button>
      </form>
    </section>
  );
};
