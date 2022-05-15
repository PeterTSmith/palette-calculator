import React from 'react';
import ColorPatch from '../ColorPatch/ColorPatch';
import FormRow from '../FormRow/FormRow';
import './ColorDetailTile.css';

export const ColorDetailTile = (props) => {
    const { hue, sat, val } = props;
    return (
        <div className='colorDetailTile'>
            <div className='colorPatchContainer'>
                <ColorPatch hue={hue} sat={sat} val={val} />
            </div>
            <div className='hsvDetails'>
                <FormRow type={"hue"} number={hue} />
                <FormRow type={"sat"} number={sat} />
                <FormRow type={"val"} number={val} />
            </div>
        </div>
    );
}