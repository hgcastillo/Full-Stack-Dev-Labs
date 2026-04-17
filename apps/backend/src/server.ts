import express, { Application } from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import employeeRoutes from "./routes/employeeRoutes";
import leadershipRoutes from "./routes/leadershipRoutes";

const app: Application = express();

// Global Middleware
app.use(cors());
app.use(express.json());

// Clerk must be initialized before routes to process authorization claims
app.use(clerkMiddleware());

/**
 * Routes
 * Pattern: Route -> Controller -> Service -> Repository
 */
app.use("/api/employees", employeeRoutes);
app.use("/api/leadership", leadershipRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`
    🚀 Backend Server Ready for Lab 5.2!
    📡 URL: http://localhost:${PORT}
    🛠️  Mode: Role-Based Authorization (Admin-Only POST)
    `);
});

export default app;
