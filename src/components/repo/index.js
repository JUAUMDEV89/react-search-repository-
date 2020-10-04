import React from 'react';

import './style.css';

function Repo({
    name,
    description,
    url
}){
    return(
        <div className="repo">
            <div className="repo-infos">
                 <p><span>Name:</span> {name}</p>
                 <p><span>Description:</span> {description}</p>
            </div>
            <a href={url}><i class="large material-icons">arrow_forward</i></a>
        </div>
    )
}

export default Repo;