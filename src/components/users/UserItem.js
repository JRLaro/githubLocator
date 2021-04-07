import React from "react";
import PropTypes from "prop-types";

function UserItem({ users: { login, avatar_url, html_url } }) {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="logo"
        className="round-img"
        style={{ width: 60 }}
      />
      <h3>{login}</h3>

      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          {" "}
          More
        </a>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  users: PropTypes.object.isRequired,
};

export default UserItem;
