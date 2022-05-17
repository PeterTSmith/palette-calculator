import React, { useState } from "react";
import './FormRow.css';

export const FormRow = (props) => {
    const { label, number, setNumber, defaultVal, minVal, maxVal, write} = props;

    return (
        <div className='formRow'>
            <div>
                {label}:
            </div>
            <FormRowValue write={write} number={number} setNumber={setNumber} defaultVal={defaultVal ?? minVal} minVal={minVal} maxVal={maxVal} />
        </div>
    );
}

const FormRowValue = (props) => {
    const { write, number, setNumber, defaultVal, minVal, maxVal } = props;
    const [localNumber, setLocalNumber] = useState(number);

    if(write) {
        return (
            <input className='formRowInput' value={localNumber}
            onChange={(event) => {
                setLocalNumber(event.target.value);
            }}
            onBlur={() => {
                let newNum = parseFloat(localNumber);
                if(isNaN(newNum)) {
                    newNum = defaultVal;
                } else if(minVal !== undefined && newNum < minVal) {
                    newNum = minVal;
                } else if(maxVal !== undefined && newNum > maxVal) {
                    newNum = maxVal;
                }
                setNumber(newNum);
                setLocalNumber(newNum);
            }} />
        );
    }

    return (
        <div>
            {number}
        </div>
    );
}

export default FormRow;