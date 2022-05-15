import React from "react";
import './ColorPatch.css';

export const ColorPatch = (props) => {
    const { hue, sat, val } = props;

    return (
        <div className='colorPatch' style={{backgroundColor: `hsl(${hue}, ${sat}%, ${val}%)`}} />
    );
}

export default ColorPatch;