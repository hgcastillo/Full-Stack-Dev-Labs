import { Request, Response } from "express";
import { leadershipService } from "../services/leadershipService";

export const getAllRoles = async (req: Request, res: Response) => {
  try {
    const roles = await leadershipService.getRoles();
    res.status(200).json(roles);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createNewRole = async (req: Request, res: Response) => {
  try {
    const { name, roleTitle } = req.body;
    await leadershipService.createRole(name, roleTitle);
    res.status(201).json({ message: "Leader added successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
