import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  let navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div>
          <Link to="/" className="navbar__logout" onClick={logout}>
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
