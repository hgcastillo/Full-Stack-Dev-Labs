import { Request, Response } from "express";
import { leadershipService } from "../services/leadershipService";

export const getAllRoles = (req: Request, res: Response) => {
  try {
    const roles = leadershipService.getRoles();
    res.status(200).json(roles);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createNewRole = (req: Request, res: Response) => {
  try {
    const { name, roleTitle } = req.body;
    leadershipService.createRole(name, roleTitle);
    res.status(201).json({ message: "Leader added successfully" });
  } catch (error: any) {
    // Return 400 for validation errors (e.g., role already occupied)
    res.status(400).json({ message: error.message });
  }
};
