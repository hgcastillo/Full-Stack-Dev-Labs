import { prisma } from "../utils/prisma";
import type { Role } from "../types/Role";

export const leadershipRepo = {
  getRoles: async () => {
    const roles = await prisma.role.findMany();
    // Map to match your frontend's expected Role interface.
    // Added the inline type definition to prevent the 'any' error!
    return roles.map((r: { id: string; name: string; title: string }) => ({
      id: r.id,
      name: r.name,
      role: r.title,
    }));
  },

  addRole: async (newRole: Role) => {
    await prisma.role.create({
      data: {
        name: newRole.name,
        title: newRole.role,
      },
    });
  },
};
