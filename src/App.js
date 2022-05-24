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
        new Swatch(initialSwatchId, "", true, 1, 0, 0, 0, false, 0, 0, false, 0, 0, false, 0, 0)
    ]);
    const [ activeSwatchId, setActiveSwatchId ] = useState(initialSwatchId);

    const [ baseFormulas, setBaseFormulas ] = useState(new Swatch(0, "", false, 1, 0, 0, 0, undefined, 0, 0, undefined, 0, 0, undefined, 0, 0));

    const activeSwatch = palette.find((swatch) => swatch.id === activeSwatchId);
    const activeColors = [];

    for( let i = 0; i < activeSwatch?.colors; i++ ) {
        const hueLinearCoef = activeSwatch.hueCustom ? activeSwatch.hueLinearCoef : baseFormulas.hueLinearCoef;
        const hueSquareCoef = activeSwatch.hueCustom ? activeSwatch.hueSquareCoef : baseFormulas.hueSquareCoef;
        const satLinearCoef = activeSwatch.satCustom ? activeSwatch.satLinearCoef : baseFormulas.satLinearCoef;
        const satSquareCoef = activeSwatch.satCustom ? activeSwatch.satSquareCoef : baseFormulas.satSquareCoef;
        const valLinearCoef = activeSwatch.valCustom ? activeSwatch.valLinearCoef : baseFormulas.valLinearCoef;
        const valSquareCoef = activeSwatch.valCustom ? activeSwatch.valSquareCoef : baseFormulas.valSquareCoef;
        const newHue = activeSwatch.hue + hueLinearCoef*i + hueSquareCoef*(i ** 2);
        const newSat = activeSwatch.sat + satLinearCoef*i + satSquareCoef*(i ** 2);
        const newVal = activeSwatch.val + valLinearCoef*i + valSquareCoef*(i ** 2);
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
            <div className='swatchLayout'>
                <SwatchDesigner swatch={baseFormulas} setSwatch={setBaseFormulas} setActiveSwatchId={0} setBase={false} />
            </div>
            {palette.map((swatch) => {
                return (
                    <div key={swatch.id} className='swatchLayout'>
                        <SwatchDesigner swatch={swatch} setSwatch={setSwatchFactory(palette, setPalette)} setActiveSwatchId={setActiveSwatchId} />
                    </div>
                );
            })}
        </div>
    );
}

export default App;
