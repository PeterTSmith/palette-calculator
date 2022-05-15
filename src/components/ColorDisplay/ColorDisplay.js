import React from "react";
import { ColorDetailTile } from "../ColorDetailTile/ColorDetailTile";
import'./ColorDisplay.css';

export const ColorDisplay = (props) => {
    const { activeColors } = props;
    return (
        <div className="colorDisplayContainer">
            {activeColors.map((color, i) => {
                return (
                    <ColorDisplayBuffer key={`color-${i}`}>
                        <ColorDetailTile {...color} />
                    </ColorDisplayBuffer>
                );
            })}
        </div>
    );
};

const ColorDisplayBuffer = (props) => {
    return (
        <div className="colorDisplayBuffer">
            {props.children}
        </div>
    );
};

export default ColorDisplay;