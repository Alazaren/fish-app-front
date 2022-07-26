import React from "react";
import config from '../config'

const spicies = config.mapping;

function Supportedspicies () {
    const keys = Object.keys(spicies);
    keys.sort((a, b) => spicies[b] - spicies[a]);
    let renderedList = '';
    renderedList = keys.map(key => {
        return (
            <div className="spicies-element">{spicies[key]},</div>
        );
    });
    return (
        <div className="spicies-container">{renderedList}</div>
    );
}

export default Supportedspicies;