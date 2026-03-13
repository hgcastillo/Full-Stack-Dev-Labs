import { leadershipRepo } from "../repositories/leadershipRepository";
import type { Role } from "../types/Role";

export const leadershipService = {
  getRoles: () => {
    return leadershipRepo.getRoles();
  },

  createRole: (name: string, roleTitle: string) => {
    // Validation logic migrated from Front-End roleService.ts
    if (name.trim().length < 3) {
      throw new Error("Name must be at least 3 characters long.");
    }

    const currentRoles = leadershipRepo.getRoles();
    const isOccupied = currentRoles.some(
      (r) => r.role.toLowerCase() === roleTitle.toLowerCase(),
    );

    if (isOccupied) {
      throw new Error(`The role "${roleTitle}" is already occupied.`);
    }

    const newRole: Role = {
      id: Math.random().toString(), // Temporary ID generation
      name,
      role: roleTitle,
    };
    leadershipRepo.addRole(newRole);
  },
};
