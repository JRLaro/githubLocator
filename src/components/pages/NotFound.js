import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../images/ghLocator.png'

function NotFound() {
  return (
      <div>
          <div><img src={Logo} alt="logo" style={{ width: '20rem',display: "block", marginLeft: "auto", marginRight: "auto"  }}/></div>
      <h1>Page Not Found...</h1>
      <p className="lead">
        Unfortunately the page that you are looking for does not exist...{" "}
          </p>

      <button className='btn'>
        <Link to="/">Return</Link>
      </button>

    </div>
  );
}

export default NotFound;
