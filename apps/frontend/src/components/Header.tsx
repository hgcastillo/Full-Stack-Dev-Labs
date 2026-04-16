import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export const Header = () => (
  <header
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <a
        href="https://itsm-ace.ca/images/logo.svg"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/logo.svg" alt="Pixell River Logo" className="logo" />
      </a>
      <div className="header-text">
        <h1>Pixell River Employee Directory</h1>
        <p>
          Welcome to the Pixell River Financial staff and organization
          directory.
        </p>
      </div>
    </div>

    {/* Auth Controls */}
    <div className="auth-controls">
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  </header>
);
