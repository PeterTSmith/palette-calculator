import React from "react";
import FormRow from "../FormRow/FormRow";
import { setSwatchValueFactory } from "../../utils";
import "./SwatchFunction.css";

export const SwatchFunction = (props) => {
    const { header, swatch, setSwatch, fields } = props;

    return (
        <div className="swatchFunctionContainer">
            <div className="swatchFunctionHeader">
                { header }
            </div>
            {fields.map((fieldDetails) => {
                const { field, label, defaultVal, minVal, maxVal } = fieldDetails;
                const setSwatchValue = setSwatchValueFactory(field, swatch, setSwatch);

                return (
                    <FormRow label={label} number={swatch[field]} setNumber={setSwatchValue} defaultVal={defaultVal} minVal={minVal} maxVal={maxVal} write />
                );
            })}
        </div>
    );
}

export default SwatchFunction;