import React from "react";

import config from '../config'

const spicies = config.mapping;

function clasificationElement ({element}) {

    var img = document.getElementById('image-result'); 

    const renderedWidth = img.clientWidth;
    const originalWidth = element.originalWidth;

    const aspect = renderedWidth / originalWidth; 

    const text = element.category;

    const bbox = element.bbox;
    const top = Math.round(bbox[0] * aspect);
    const left = Math.round(bbox[1] * aspect);
    const width = Math.round(bbox[2] * aspect);
    const height = Math.round(bbox[3] * aspect);

    const style = {
        top: Math.round(bbox[1] * aspect),
        left: Math.round(bbox[0] * aspect),
        width: Math.round(bbox[2] * aspect),
        height: Math.round(bbox[3] * aspect)
      };

    return (
        <div className="target-border" style={style}><p>{spicies[text]} {element.probs[text]}%</p></div>
    )
}


export default clasificationElement;