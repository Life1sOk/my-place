import React from "react";

import './links.style.scss';
import LinksSec from "../../component/links-sec/links-sec.component";

const Links = () => {
    return (
        <section className="links-container">
            <LinksSec name={'Algo Expert'} link={'https://www.algoexpert.io/content#frontendexpert'} />
        </section>
    )
}

export default Links;