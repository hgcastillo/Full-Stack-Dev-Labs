import type { Role } from "../types/Role";

const API_URL = "http://localhost:5000/api/leadership";

export const leadershipRepo = {
  getRoles: async (): Promise<Role[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch roles");
    return response.json();
  },

  addRole: async (
    newRole: { name: string; role: string },
    token: string | null, // Added token parameter
  ): Promise<void> => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Injected token into headers
      },
      body: JSON.stringify({ name: newRole.name, roleTitle: newRole.role }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add leader");
    }
  },
};
