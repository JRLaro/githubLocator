import React from 'react'
import PropTypes from 'prop-types'

const RepoItems = ({repo}) => {
return (
    <div id="card">
        <h3>
            <a href={repo.html_url} target="_blank">{repo.name}</a>
            </h3>
        </div>
    )
}
RepoItems.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItems;