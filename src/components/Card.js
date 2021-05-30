

import React from 'react';
import {Link} from 'react-router-dom';

function Card({userItem:{login,avatar_url}}) {
  
    return (
        <div className="card">
            <img src={avatar_url} alt="user" />
            <h3>{login}</h3>
            <Link to={`/user/${login}`}><input type="button" value="View Profile" /></Link>
        </div>
    )
}
export default Card;