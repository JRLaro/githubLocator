import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

function UserItem({ user: { login, avatar_url, html_url } }) {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="logo"
        className="round-img"
        id="text-center"
        style={{ width: 60 }}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;