import React from "react";

import './links-sec.style.scss';

const LinksSec = ({ name, link }) => {
    return (
        <div className="links-sec-container">
            <a href={link} target='_blank' rel="noreferrer" className="links-sec">{name}</a>
        </div>
    )
}

export default LinksSec;