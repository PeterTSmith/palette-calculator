import React from "react";
import FormRow from "../FormRow/FormRow";
import { setSwatchValueFactory } from "../../utils";
import { FuncPole } from "../../classes/Swatch";
import "./SwatchFunction.css";
import "../FormRow/FormRow.css";
import setPolynomialValueFactory from "../../utils/setPolynomialValueFactory";

export const SwatchFunction = (props) => {
    const { header, swatch, setSwatch, isCustom, setIsCustom, funcPole, setFuncPole, fields } = props;
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
            <div className='formRow'>
                Pole <select className="poleSelect" value={funcPole} onChange={(event) => {setFuncPole(event.target.value)}}>
                    {Object.values(FuncPole).map((value) => {
                        return (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        );
                    })}
                </select>
            </div>
            {fields.map((fieldDetails) => {
                const { field, label, defaultVal, minVal, maxVal } = fieldDetails;

                if(Array.isArray(field)) {
                    const swatchField = field[0];
                    const degree = field[1];
                    const setPolynomialValue = setPolynomialValueFactory(degree, swatch[swatchField], setSwatchValueFactory(swatchField, swatch, setSwatch));
                    
                    return (
                        <FormRow
                            key={`${swatch.id}-${field}`}
                            label={label} number={swatch[swatchField].getDegCoef(degree)}
                            setNumber={setPolynomialValue}
                            defaultVal={defaultVal}
                            minVal={minVal}
                            maxVal={maxVal}
                            write
                        />
                    );
                }

                const setSwatchValue = setSwatchValueFactory(field, swatch, setSwatch);

                return (
                    <FormRow
                        key={`${swatch.id}-${field}`}
                        label={label}
                        number={swatch[field]}
                        setNumber={setSwatchValue}
                        defaultVal={defaultVal}
                        minVal={minVal}
                        maxVal={maxVal}
                        write
                    />
                );
            })}
        </div>
    );
}

export default SwatchFunction;