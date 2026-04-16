import express, { Application } from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import employeeRoutes from "./routes/employeeRoutes";
import leadershipRoutes from "./routes/leadershipRoutes";

const app: Application = express();

/**
 * Middleware
 */
// Enable CORS so the Front-end (typically port 5173) can talk to the Back-end
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());
app.use(clerkMiddleware());

/**
 * Routes
 * Following the Route-Controller-Service-Repository pattern
 */
app.use("/api/employees", employeeRoutes);
app.use("/api/leadership", leadershipRoutes);

/**
 * Server Activation
 */
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`
    🚀 Server is running!
    📡 URL: http://localhost:${PORT}
    🛠️  Pattern: Route-Controller-Service-Repository enabled.
    `);
});

export default app;
