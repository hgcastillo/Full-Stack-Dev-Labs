import { leadershipData } from "../data/leadershipData";
import type { Role } from "../types/Role";

export const leadershipRepo = {
  getRoles: (): Role[] => {
    return [...leadershipData];
  },

  addRole: (newRole: Role): void => {
    leadershipData.push(newRole);
  },
};
