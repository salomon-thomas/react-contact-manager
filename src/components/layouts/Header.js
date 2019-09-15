import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
const Header = props => {
  const { title } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {title}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus"></i> Add Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-address-card"></i> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.defaultProps = {
  title: "Contact Manager"
};
Header.propTypes = {
  title: propTypes.string.isRequired
};
export default Header;
