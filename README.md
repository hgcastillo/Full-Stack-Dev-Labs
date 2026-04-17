# Lab 5.2 Documentation: Role-Based Authorization

    What change you wanted to make in your application:
    1. The Change: What specific authorization logic you wanted to add.
        I wanted to transition my application from a basic authentication model to a more secure and professional role-based authorization system to restrict data entry specifically to administrators . Previously, any user who signed into the application had full access to all features, including the ability to add new employees. By implementing this logic, I have ensured that only users designated as administrators within a Clerk organization can access management forms, while standard users are restricted to a view-only experience.

    2. The Tools: What tool or tools you've made use of to make this change
        To implement this integration, I utilized the Clerk Organizations suite and associated development libraries . On the frontend, I used the @clerk/clerk-react library, implementing the <Protect> component to wrap sensitive UI elements and the <OrganizationSwitcher /> to manage active roles. For the backend, I integrated the @clerk/express library and the clerkMiddleware to verify sessionClaims on the server side, ensuring that both the frontend and API endpoints are properly secured.

    3. How this change affects the user experience (UX)
        This change significantly improves the user experience by providing a tailored interface based on a user's actual responsibilities. When an administrator logs in, they see the full dashboard with the "Add Employee" form. Conversely, when a standard member logs in, they see a restricted view with helpful fallback messages explaining their access level. This prevents confusion and accidental data entry by users who lack permissions, creating a cleaner and more secure workflow for the end user .

    4. How this change affects your understanding, or conceptualization, of the app
       Implementing this feature has fundamentally changed my conceptualization of web security by clarifying the vital distinction between authentication (knowing who a user is) and authorization (knowing what they are allowed to do). I now view the application as a multi-layered system where identity is just the first step, and specific permissions must be validated at every interaction with sensitive data to ensure the system remains reliable and secure.
