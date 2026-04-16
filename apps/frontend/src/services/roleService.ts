import { leadershipRepo } from "../api/leadershipRepo";

export const roleService = {
  createRole: async (name: string, roleTitle: string, token: string | null) => {
    // Pass the token down to the repository
    const newRole = {
      name,
      role: roleTitle,
    };

    return await leadershipRepo.addRole(newRole, token);
  },
};
