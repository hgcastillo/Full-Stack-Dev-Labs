import { leadershipData } from "../data/leadershipData";

export const OrganizationPage = () => {
  return (
    <div className="organization-page">
      <h2>Leadership and Management</h2>
      <div className="leadership-list">
        {leadershipData.map((leader) => (
          <div key={leader.id} className="leader-row">
            <span className="leader-name">{leader.name}</span>
            <span className="leader-role">{leader.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
