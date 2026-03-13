import { useState, useEffect } from "react";
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
      <RoleForm onRoleAdded={loadLeaders} />
    </div>
  );
};
