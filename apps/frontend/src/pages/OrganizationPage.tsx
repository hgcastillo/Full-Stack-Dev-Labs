import { useState, useEffect } from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { leadershipRepo } from "../api/leadershipRepo";
import type { Role } from "../types/Role";
import { RoleForm } from "../components/RoleForm";

export const OrganizationPage = () => {
  const [leaders, setLeaders] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);

  const loadLeaders = async () => {
    try {
      setLoading(true);
      const data = await leadershipRepo.getRoles();
      setLeaders(data);
    } catch (error) {
      console.error("Failed to load leadership data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeaders();
  }, []);

  if (loading) return <div>Loading Leadership...</div>;

  return (
    <div className="organization-page">
      <h2>Leadership and Management</h2>
      <div className="leadership-list">
        {leaders.map((leader) => (
          <div key={leader.id} className="leader-row">
            <span className="leader-name">{leader.name}</span>
            <span className="leader-role">{leader.role}</span>
          </div>
        ))}
      </div>
      <hr />

      {/* Renders only if the user is authenticated */}
      <SignedIn>
        <RoleForm onRoleAdded={loadLeaders} />
      </SignedIn>

      {/* Renders only if the user is logged out */}
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
          <h3>Please log in to add a new leader.</h3>
          <SignInButton mode="modal" />
        </div>
      </SignedOut>
    </div>
  );
};
