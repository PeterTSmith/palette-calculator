import React, { useEffect, useState } from "react";
import './FormRow.css';

export const FormRow = (props) => {
    const { label, number, setNumber, defaultVal, write} = props;

    return (
        <div className='formRow'>
            <div>
                {label}:
            </div>
            <FormRowValue write={write} number={number} setNumber={setNumber} defaultVal={defaultVal} />
        </div>
    );
}

FormRow.defaultProps = {
    defaultVal: 1
}

const FormRowValue = (props) => {
    const { write, number, setNumber, defaultVal } = props;
    const [localNumber, setLocalNumber] = useState(number);

    if(write) {
        return (
            <input className='formRowInput' value={localNumber}
            onChange={(event) => {
                setLocalNumber(event.target.value);
            }}
            onBlur={() => {
                const newNum = parseInt(localNumber);
                setNumber(isNaN(newNum) || newNum < 1 ? defaultVal : newNum);
                setLocalNumber(isNaN(newNum) || newNum < 1 ? defaultVal : newNum);
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