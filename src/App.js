import { useState } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import ColorDisplay from './components/ColorDisplay/ColorDisplay';
import SwatchDesigner from './components/SwatchDesigner/SwatchDesigner';
import { setSwatchValueFactory, boundAdjustNumber, loopAdjustNumber } from './utils';
import './App.css';

function App() {
    const initialSwatchId = new Date().getTime();
    const [ palette, setPalette ] = useState([
        {
            id: initialSwatchId,
            name: "",
            colors: 1,
            hue: 0,
            sat: 0,
            val: 0,
            hueLinearCoef: 0,
            satLinearCoef: 0,
            valLinearCoef: 0
        }
    ]);
    const [ activeSwatchId, setActiveSwatchId ] = useState(initialSwatchId);

    const activeSwatch = palette.find((swatch) => swatch.id === activeSwatchId);
    const activeColors = [];

    for( let i = 0; i < activeSwatch?.colors; i++ ) {
        const newColor = {
            hue: loopAdjustNumber(activeSwatch.hue + activeSwatch.hueLinearCoef*i, 0, 359),
            sat: boundAdjustNumber(activeSwatch.sat + activeSwatch.satLinearCoef*i, 0, 100),
            val: boundAdjustNumber(activeSwatch.val + activeSwatch.valLinearCoef*i, 0, 100)
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
                        <SwatchDesigner key={swatch.id} swatch={swatch} setSwatchValue={setSwatchValueFactory(swatch.id, palette, setPalette)} setActiveSwatchId={setActiveSwatchId} />
                    </div>
                );
            })}
        </div>
    );
}

export default App;
