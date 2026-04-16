import { type FormEvent, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import type { Department } from "../types/Employee";
import { useFormInput } from "../hooks/useFormInput";
import { employeeService } from "../services/employeeService";

interface Props {
  departments: Department[];
  onEmployeeAdded: () => void;
}

export const EmployeeForm = ({ departments, onEmployeeAdded }: Props) => {
  const nameInput = useFormInput("");
  const deptInput = useFormInput("");
  const [globalError, setGlobalError] = useState<string | null>(null);

  // Extract the getToken function from Clerk's hook
  const { getToken } = useAuth();

  // Make the submit handler async
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setGlobalError(null);

    try {
      // Retrieve the active session token
      const token = await getToken();

      // Pass the token to your updated service
      await employeeService.createEmployee(
        nameInput.value,
        deptInput.value,
        token,
      );

      nameInput.reset();
      deptInput.reset();
      onEmployeeAdded();
    } catch (err: any) {
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
