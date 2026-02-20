import { useState, useEffect } from "react";
import { leadershipRepo } from "../api/leadershipRepo";
import type { Role } from "../types/Role";
import { RoleForm } from "../components/RoleForm";

export const OrganizationPage = () => {
  const [leaders, setLeaders] = useState<Role[]>([]);

  useEffect(() => {
    setLeaders(leadershipRepo.getRoles());
  }, []);

  const refreshData = () => {
    setLeaders([...leadershipRepo.getRoles()]);
  };

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
      <RoleForm onRoleAdded={refreshData} />
    </div>
  );
};
