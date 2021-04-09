import React, { Fragment, useEffect, useContext } from "react";
import Repos from "../repos/Repos";
import { Spinner } from "../layout/Spinner";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { user, loading, getUser, getRepo, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getRepo(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    repo_url,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable: {""}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt="user-logo"
            style={{ width: 150 }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio:</h3>
              <p>{bio}</p>
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark my-1">
                Visit Github
              </a>
              <ul>
                <li>
                  {login && (
                    <Fragment>
                      <strong>Username:</strong> {login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company:</strong> {company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website:</strong>{" "}
                      <a href={blog} target="_blank">
                        {blog}
                      </a>
                    </Fragment>
                  )}
                </li>
              </ul>
            </Fragment>
          )}
        </div>
      </div>
      <div className="text-center" id="card">
        <div className="badge badge-danger">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repo: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {followers}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
