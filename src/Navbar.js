import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        PharmaTrack
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/addstock" className="nav-link">
              Add Stock
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/billinglogs" className="nav-link">
              Billing Logs
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/stocktable" className="nav-link">
              Stock Table
            </Link>
          </li>
        </ul>
      </div>
      <button onClick={props.setLoggedOut} className="btn btn-outline-light">
        Logout
      </button>
    </nav>
  );
}
