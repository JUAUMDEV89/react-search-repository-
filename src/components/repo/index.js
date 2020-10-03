import React from 'react';

import './style.css';

function Repo({
    name,
    description,
    url
}){
    return(
        <div className="repo">
            <p>Name: {name}</p>
            <p>Description: {description}</p>
            <p>Url: <a href={url}>{url}</a></p>
        </div>
    )
}

export default Repo;