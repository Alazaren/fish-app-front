import React from "react";

function clasificationElement ({name, value}) {

    value = Math.round(value*100);

    return (
        <div>{`${name} : ${value}%`}</div>
    )
}


export default clasificationElement;