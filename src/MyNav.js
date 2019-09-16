import React from "react";
import { Link } from "react-router-dom";

export default class MyNav extends React.Component {
  render() {
    return (
      <div>
        <ul className="ul">
          <li className="list-item">
            <Link to="/" className="list-anchor">
              PharmaTrack
            </Link>
          </li>

          <li className="list-item">
            <Link to="/addstock" className="list-anchor">
              Add Stock
            </Link>
          </li>
          <li className="list-item">
            <Link to="/billinglogs" className="list-anchor">
              Billing Logs
            </Link>
          </li>
          <li className="list-item">
            <Link to="/stocktable" className="list-anchor">
              Stock Table
            </Link>
          </li>
          <li className="list-item">
            <Link to="/predictions" className="list-anchor">
              Sales Predictions
            </Link>
          </li>
          <li className="list-item">
            <Link to="/vendors" className="list-anchor">
              Vendors
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
