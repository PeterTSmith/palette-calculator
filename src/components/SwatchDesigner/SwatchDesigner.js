import React from "react";
import ColorPatch from "../ColorPatch/ColorPatch";
import SwatchFunction from "../SwatchFunction/SwatchFunction";
import { setSwatchValueFactory } from "../../utils";
import { FieldValue } from "../../classes";
import './SwatchDesigner.css';

export const SwatchDesigner = (props) => {
    const { swatch, setSwatch, setActiveSwatchId, setBase, setHue, setMod, setVal } = props;
    const { id, hue, sat, val, hueCustom, satCustom, valCustom, hueFuncPole, satFuncPole, valFuncPole } = swatch;

    const baseValueFields = [
        new FieldValue("colors", "Colors", 1),
        new FieldValue("hue", "Base Hue", 0, 0, 359),
        new FieldValue("sat", "Base Sat", 0, 0, 100),
        new FieldValue("val", "Base Val", 0, 0, 100)
    ];
    const hueFunctionFields = [
        new FieldValue(["hueFunc", 1], "Linear Coef", 0),
        new FieldValue(["hueFunc", 2], "Square Coef", 0),
        new FieldValue(["hueFunc", 3], "Cube Coef", 0)
    ];
    const satFunctionFields = [
        new FieldValue(["satFunc", 1], "Linear Coef", 0),
        new FieldValue(["satFunc", 2], "Square Coef", 0),
        new FieldValue(["satFunc", 3], "Cube Coef", 0)
    ];
    const valFunctionFields = [
        new FieldValue(["valFunc", 1], "Linear Coef", 0),
        new FieldValue(["valFunc", 2], "Square Coef", 0),
        new FieldValue(["valFunc", 3], "Cube Coef", 0)
    ];

    return (
        <div className="swatchDesignerContainer">
            {setBase && (<div className="baseColorPatchContainer" onClick={() => { setActiveSwatchId(id) }}>
                <ColorPatch hue={hue} sat={sat} val={val} />
            </div>)}
            {setBase && <SwatchFunction header="Base Values" swatch={swatch} setSwatch={setSwatch} fields={baseValueFields} />}
            {setHue && <SwatchFunction header="Hue Mod Function" swatch={swatch} setSwatch={setSwatch} isCustom={hueCustom} setIsCustom={setSwatchValueFactory("hueCustom", swatch, setSwatch)} funcPole={hueFuncPole} setFuncPole={setSwatchValueFactory("hueFuncPole", swatch, setSwatch)} fields={hueFunctionFields} />}
            {setMod && <SwatchFunction header="Sat Mod Function" swatch={swatch} setSwatch={setSwatch} isCustom={satCustom} setIsCustom={setSwatchValueFactory("satCustom", swatch, setSwatch)} funcPole={satFuncPole} setFuncPole={setSwatchValueFactory("satFuncPole", swatch, setSwatch)} fields={satFunctionFields} />}
            {setVal && <SwatchFunction header="Val Mod Function" swatch={swatch} setSwatch={setSwatch} isCustom={valCustom} setIsCustom={setSwatchValueFactory("valCustom", swatch, setSwatch)} funcPole={valFuncPole} setFuncPole={setSwatchValueFactory("valFuncPole", swatch, setSwatch)} fields={valFunctionFields} />}
        </div>
    );
}

SwatchDesigner.defaultProps = {
    setBase: true,
    setHue: true,
    setMod: true,
    setVal: true
}

export default SwatchDesigner;