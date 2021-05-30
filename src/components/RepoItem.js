import React from 'react';
import PropTypes from 'prop-types';



export default function RepoItem({repo}) {
    return (
        <div className = 'cardRepo'>
            <a href = {repo.html_url}>
            <h3>
                {repo.name}
            </h3>
            <p>{repo.description}</p>
            <p>{repo.language}</p>
            </a>
        </div>
    )
}
RepoItem.propTypes={
    repo : PropTypes.object.isRequired
}
