import React, { useEffect, useState } from "react";
import './FormRow.css';

export const FormRow = (props) => {
    const { label, number, setNumber, write} = props;

    return (
        <div className='formRow'>
            <div>
                {label}:
            </div>
            <FormRowValue write={write} number={number} setNumber={setNumber}/>
        </div>
    );
}

const FormRowValue = (props) => {
    const { write, number, setNumber } = props;
    const [localNumber, setLocalNumber] = useState(number);

    if(write) {
        return (
            <input className='formRowInput' value={localNumber}
            onChange={(event) => {
                setLocalNumber(event.target.value);
            }}
            onBlur={() => {
                const newNum = parseInt(localNumber);
                setNumber(isNaN(newNum) ? 0 : newNum);
                setLocalNumber(isNaN(newNum) ? 0 : newNum);
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