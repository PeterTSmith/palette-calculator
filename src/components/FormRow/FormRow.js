import React from "react";
import './FormRow.css';

export const FormRow = (props) => {
    const { type, number, setNumber, write} = props;

    return (
        <div className='formRow'>
            <div>
                {type}:
            </div>
            {inputOrDisplay(write, number, setNumber)}
        </div>
    );
}

const inputOrDisplay = (write, number, setNumber) => {
    if(write) {
        return (
            <input className='formRowInput' value={number} onChange={(event) => {
                setNumber(event.target.value);
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