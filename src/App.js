import React, { useState } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import ColorDisplay from './components/ColorDisplay/ColorDisplay';
import SwatchDesigner from './components/SwatchDesigner/SwatchDesigner';
import { setSwatchFactory } from './utils';
import { Swatch } from './classes';
import './App.css';
import { FuncPole } from './classes/Swatch';
import generateActiveColors from './utils/generateActiveColors';

function App() {
    const initialSwatchId = new Date().getTime();
    const [ palette, setPalette ] = useState([
        new Swatch(initialSwatchId, "", true, 1, 0, 0, 0, false, FuncPole.start, 0, 0, 0, false, FuncPole.start, 0, 0, 0, false, FuncPole.start, 0, 0, 0)
    ]);
    const [ activeSwatchId, setActiveSwatchId ] = useState(initialSwatchId);

    const [ baseFormulas, setBaseFormulas ] = useState(new Swatch(0, "", false, 1, 0, 0, 0, undefined, FuncPole.start, 0, 0, 0, undefined, FuncPole.start, 0, 0, 0, undefined, FuncPole.start, 0, 0, 0));

    const activeSwatch = palette.find((swatch) => swatch.id === activeSwatchId);
    const activeColors = generateActiveColors(activeSwatch, baseFormulas);

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
