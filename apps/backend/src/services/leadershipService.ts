import { leadershipRepo } from "../repositories/leadershipRepository";
import type { Role } from "../types/Role";

export const leadershipService = {
  getRoles: async () => {
    return await leadershipRepo.getRoles();
  },

  createRole: async (name: string, roleTitle: string) => {
    if (name.trim().length < 3) {
      throw new Error("Name must be at least 3 characters long.");
    }

    const currentRoles = await leadershipRepo.getRoles();
    const isOccupied = currentRoles.some(
      (r) => r.role.toLowerCase() === roleTitle.toLowerCase(),
    );

    if (isOccupied) {
      throw new Error(`The role "${roleTitle}" is already occupied.`);
    }

    const newRole: Role = {
      id: Math.random().toString(), // Dummy ID just to satisfy TS; Prisma generates the real one!
      name,
      role: roleTitle,
    };
    await leadershipRepo.addRole(newRole);
  },
};
