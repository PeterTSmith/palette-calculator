import React from "react";
import FormRow from "../FormRow/FormRow";
import { setSwatchValueFactory } from "../../utils";
import "./SwatchFunction.css";

export const SwatchFunction = (props) => {
    const { header, swatch, setSwatch, isCustom, setIsCustom, fields } = props;
    const { canDefault } = swatch;

    return (
        <div className="swatchFunctionContainer">
            <div className="swatchFunctionHeader">
                <div>
                    { header }
                </div>
                {canDefault && (isCustom !== undefined) && <div>
                    Custom <input className="customCheckbox" type="checkbox" checked={isCustom} onChange={() => {setIsCustom(!isCustom)}} />
                </div>}
            </div>
            {fields.map((fieldDetails) => {
                const { field, label, defaultVal, minVal, maxVal } = fieldDetails;
                const setSwatchValue = setSwatchValueFactory(field, swatch, setSwatch);

                return (
                    <FormRow key={`${swatch.id}-${field}`} label={label} number={swatch[field]} setNumber={setSwatchValue} defaultVal={defaultVal} minVal={minVal} maxVal={maxVal} write />
                );
            })}
        </div>
    );
}

export default SwatchFunction;