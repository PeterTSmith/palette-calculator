import React from "react";
import Button from '../Button/Button'
import { addSwatchFactory, cloneSwatchFactory, deleteSwatchFactory } from '../../utils';

export const Toolbar = (props) => {
    const { palette, setPalette, activeSwatchId, setActiveSwatchId } = props;
    return (
        <div className="toolbarContainer">
            <Button onClick={addSwatchFactory(palette, setPalette)}>
                Add Swatch
            </Button>
            <Button onClick={cloneSwatchFactory(palette, setPalette, activeSwatchId)}>
                Clone Swatch
            </Button>
            <Button onClick={deleteSwatchFactory(palette, setPalette, activeSwatchId, setActiveSwatchId)}>
                Delete Swatch
            </Button>
        </div>
    );
}

export default Toolbar;