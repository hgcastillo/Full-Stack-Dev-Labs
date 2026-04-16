import { type FormEvent, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useFormInput } from "../hooks/useFormInput";
import { roleService } from "../services/roleService";

interface Props {
  onRoleAdded: () => void;
}

export const RoleForm = ({ onRoleAdded }: Props) => {
  const nameInput = useFormInput("");
  const roleInput = useFormInput("");
  const [error, setError] = useState<string | null>(null);

  // Extract the getToken function
  const { getToken } = useAuth();

  // Make the submit handler async
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // Retrieve the active session token
      const token = await getToken();

      // Pass the token to your updated service
      await roleService.createRole(nameInput.value, roleInput.value, token);

      nameInput.reset();
      roleInput.reset();
      onRoleAdded();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="employee-form-container">
      <h2>Add New Leader</h2>
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={nameInput.value}
            onChange={nameInput.onChange}
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <input
            type="text"
            value={roleInput.value}
            onChange={roleInput.onChange}
          />
        </div>
        <button type="submit">Add Leader</button>
      </form>
    </section>
  );
};
