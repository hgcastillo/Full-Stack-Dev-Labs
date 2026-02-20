import { leadershipRepo } from "../api/leadershipRepo";
import type { Role } from "../types/Role";

export const roleService = {
  createRole: (name: string, roleTitle: string) => {
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
      id: Math.random().toString(),
      name,
      role: roleTitle,
    };
    leadershipRepo.addRole(newRole);
  },
};
