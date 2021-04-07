import React from "react";
import * as siIcons from "react-icons/si";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <i className="icon">
          <siIcons.SiGithub className="mb-2" />
        </i>
        {title}
          </h1>
          <ul>
              <li><Link to='/'> Home </Link></li>
              <li><Link to='/about'>About</Link></li>
          </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "GitHub Finder",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Navbar;
