import React from "react";
import ColorPatch from "../ColorPatch/ColorPatch";
import SwatchFunction from "../SwatchFunction/SwatchFunction";
import { FieldValue } from "../../classes";
import './SwatchDesigner.css';

export const SwatchDesigner = (props) => {
    const { swatch, setSwatch, setActiveSwatchId } = props;
    const { id, hue, sat, val } = swatch;

    const baseValueFields = [
        new FieldValue("colors", "Colors", 1),
        new FieldValue("hue", "Base Hue", 0, 359),
        new FieldValue("sat", "Base Sat", 0, 100),
        new FieldValue("val", "Base Val", 0, 100)
    ];
    const hueFunctionFields = [new FieldValue("hueLinearCoef", "Linear Coef", 0), new FieldValue("hueSquareCoef", "Square Coef", 0)];
    const satFunctionFields = [new FieldValue("satLinearCoef", "Linear Coef", 0), new FieldValue("satSquareCoef", "Square Coef", 0)];
    const valFunctionFields = [new FieldValue("valLinearCoef", "Linear Coef", 0), new FieldValue("valSquareCoef", "Square Coef", 0)];

    return (
        <div className="swatchDesignerContainer">
            <div className="baseColorPatchContainer" onClick={() => { setActiveSwatchId(id) }}>
                <ColorPatch hue={hue} sat={sat} val={val} />
            </div>
            <SwatchFunction header="Base Values" swatch={swatch} setSwatch={setSwatch} fields={baseValueFields} />
            <SwatchFunction header="Hue Mod Function" swatch={swatch} setSwatch={setSwatch} fields={hueFunctionFields} />
            <SwatchFunction header="Sat Mod Function" swatch={swatch} setSwatch={setSwatch} fields={satFunctionFields} />
            <SwatchFunction header="Val Mod Function" swatch={swatch} setSwatch={setSwatch} fields={valFunctionFields} />
        </div>
    );
}

export default SwatchDesigner;