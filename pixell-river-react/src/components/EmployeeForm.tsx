import { type FormEvent, useState } from "react";
import type { Department } from "../types/Employee";
import { useFormInput } from "../hooks/useFormInput";
import { employeeService } from "../services/employeeService";

interface Props {
  departments: Department[];
  onEmployeeAdded: () => void;
}

export const EmployeeForm = ({ departments, onEmployeeAdded }: Props) => {
  // Use custom hooks
  const nameInput = useFormInput("");
  const deptInput = useFormInput("");
  const [globalError, setGlobalError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setGlobalError(null);

    try {
      // Service handles validation and saving
      employeeService.createEmployee(nameInput.value, deptInput.value);

      // Success: Clear inputs and refresh parent
      nameInput.reset();
      deptInput.reset();
      onEmployeeAdded();
    } catch (err: any) {
      // Failure: Display the error from the service
      setGlobalError(err.message);
    }
  };

  return (
    <section className="employee-form-container">
      <h2>Add New Employee</h2>
      {globalError && <div className="error-message">{globalError}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={nameInput.value}
            onChange={nameInput.onChange}
          />
        </div>

        <div className="form-group">
          <label>Department:</label>
          <select value={deptInput.value} onChange={deptInput.onChange}>
            <option value="">-- Select Department --</option>
            {departments.map((d) => (
              <option key={d.name} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Add Employee</button>
      </form>
    </section>
  );
};
