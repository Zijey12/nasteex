// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function Navbar({ user }) {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">EduSomali</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/courses" className="nav-link">Courses</Link></li>
          {user ? (
            <>
              <li className="nav-item"><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
              <li className="nav-item"><button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
              <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;