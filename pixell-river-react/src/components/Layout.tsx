import { Outlet, Link } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="app-container">
      <Header />

      <nav className="main-nav">
        <Link to="/employees" className="nav-link">
          Employees
        </Link>
        <Link to="/organization" className="nav-link">
          Organization
        </Link>
      </nav>

      <main id="main-content">
        <Outlet />
      </main>

      <footer>
        <p>Copyright Pixell River Financial {currentYear}.</p>
      </footer>
    </div>
  );
};
