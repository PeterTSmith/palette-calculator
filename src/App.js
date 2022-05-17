import React, { useState } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import ColorDisplay from './components/ColorDisplay/ColorDisplay';
import SwatchDesigner from './components/SwatchDesigner/SwatchDesigner';
import { setSwatchFactory, boundAdjustNumber, loopAdjustNumber } from './utils';
import { Swatch } from './classes';
import './App.css';

function App() {
    const initialSwatchId = new Date().getTime();
    const [ palette, setPalette ] = useState([
        new Swatch(initialSwatchId, "", 1, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    ]);
    const [ activeSwatchId, setActiveSwatchId ] = useState(initialSwatchId);

    const activeSwatch = palette.find((swatch) => swatch.id === activeSwatchId);
    const activeColors = [];

    for( let i = 0; i < activeSwatch?.colors; i++ ) {
        const newHue = activeSwatch.hue + activeSwatch.hueLinearCoef*i + activeSwatch.hueSquareCoef*(i ** 2);
        const newSat = activeSwatch.sat + activeSwatch.satLinearCoef*i + activeSwatch.satSquareCoef*(i ** 2);
        const newVal = activeSwatch.val + activeSwatch.valLinearCoef*i + activeSwatch.valSquareCoef*(i ** 2);
        const newColor = {
            hue: loopAdjustNumber(newHue, 0, 359),
            sat: boundAdjustNumber(newSat, 0, 100),
            val: boundAdjustNumber(newVal, 0, 100)
        };

        activeColors.push(newColor);
    }

    return (
        <div className="App">
            <div className='toolbarLayout'>
                <Toolbar palette={palette} setPalette={setPalette} activeSwatchId={activeSwatchId} setActiveSwatchId={setActiveSwatchId} />
            </div>
            <div className='colorDisplayLayout'>
                {<ColorDisplay activeColors={activeColors} />}
            </div>
            {palette.map((swatch) => {
                return (
                    <div className='swatchLayout'>
                        <SwatchDesigner key={swatch.id} swatch={swatch} setSwatch={setSwatchFactory(palette, setPalette)} setActiveSwatchId={setActiveSwatchId} />
                    </div>
                );
            })}
        </div>
    );
}

export default App;
