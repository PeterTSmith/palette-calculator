import React from "react";
import ColorPatch from "../ColorPatch/ColorPatch";
import FormRow from "../FormRow/FormRow";
import './SwatchDesigner.css';

export const SwatchDesigner = (props) => {
    const { swatch, setSwatchValue, setActiveSwatchId } = props;
    const { id, colors, hue, sat, val, hueLinearCoef, satLinearCoef, valLinearCoef } = swatch;

    const setColors = (value) => setSwatchValue("colors", value);
    const setHue = (value) => setSwatchValue("hue", value);
    const setSat = (value) => setSwatchValue("sat", value);
    const setVal = (value) => setSwatchValue("val", value);
    const setHueLinearCoef = (value) => setSwatchValue("hueLinearCoef", value);
    const setSatLinearCoef = (value) => setSwatchValue("satLinearCoef", value);
    const setValLinearCoef = (value) => setSwatchValue("valLinearCoef", value);

    return (
        <div className="swatchDesignerContainer">
            <div className="baseColorPatchContainer" onClick={() => {setActiveSwatchId(id)}}>
                <ColorPatch hue={hue} sat={sat} val={val} />
            </div>
            <div className="baseSwatchDetailContainer">
                <FormRow label={"Colors"} number={colors} setNumber={setColors} write />
                <FormRow label={"Base Hue"} number={hue} setNumber={setHue} minVal={0} maxVal={359} write />
                <FormRow label={"Base Sat"} number={sat} setNumber={setSat} minVal={0} maxVal={100} write />
                <FormRow label={"Base Val"} number={val} setNumber={setVal} minVal={0} maxVal={100} write />
            </div>
            <div className="hueFunctionContainer">
                <FormRow label={"Linear Coef"} number={hueLinearCoef} setNumber={setHueLinearCoef} write />
            </div>
            <div className="satFunctionContainer">
                <FormRow label={"Linear Coef"} number={satLinearCoef} setNumber={setSatLinearCoef} write />
            </div>
            <div className="valFunctionContainer">
                <FormRow label={"Linear Coef"} number={valLinearCoef} setNumber={setValLinearCoef} write />
            </div>
        </div>
    );
}

export default SwatchDesigner;