import { leadershipRepo } from "../api/leadershipRepo";

export const roleService = {
  createRole: async (name: string, roleTitle: string) => {
    // The Back-end now handles validation and duplicate checking,
    // so we just pass the data through to the repo.
    const newRole = {
      name,
      role: roleTitle,
    };

    return await leadershipRepo.addRole(newRole);
  },
};
