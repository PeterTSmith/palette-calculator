import React, { useEffect, useState } from "react";
import ColorPatch from "../ColorPatch/ColorPatch";
import FormRow from "../FormRow/FormRow";
import './SwatchDesigner.css';

export const SwatchDesigner = (props) => {
    const [colors, setColors] = useState(0);
    const [hue, setHue] = useState(0);
    const [sat, setSat] = useState(0);
    const [val, setVal] = useState(0);

    const [hueLinearCoef, setHueLinearCoef] = useState(0);
    const [satLinearCoef, setSatLinearCoef] = useState(0);
    const [valLinearCoef, setValLinearCoef] = useState(0);

    return (
        <div className="swatchDesignerContainer">
            <div className="baseColorPatchContainer">
                <ColorPatch hue={hue} sat={sat} val={val} />
            </div>
            <div className="baseSwatchDetailContainer">
                <FormRow type={"Colors"} number={colors} setNumber={setColors} write />
                <FormRow type={"Base Hue"} number={hue} setNumber={setHue} write />
                <FormRow type={"Base Sat"} number={sat} setNumber={setSat} write />
                <FormRow type={"Base Val"} number={val} setNumber={setVal} write />
            </div>
            <div className="hueFunctionContainer">
                <FormRow type={"Linear Coef"} number={hueLinearCoef} setNumber={setHueLinearCoef} write />
            </div>
            <div className="satFunctionContainer">
                <FormRow type={"Linear Coef"} number={satLinearCoef} setNumber={setSatLinearCoef} write />
            </div>
            <div className="valFunctionContainer">
                <FormRow type={"Linear Coef"} number={valLinearCoef} setNumber={setValLinearCoef} write />
            </div>
        </div>
    );
}

export default SwatchDesigner;