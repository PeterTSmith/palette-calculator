import { useEffect, useState } from 'react';
import ColorDisplay from './components/ColorDisplay/ColorDisplay';
import SwatchDesigner from './components/SwatchDesigner/SwatchDesigner';
import setSwatchValueFactory from './utils/setSwatchValueFactory';
import './App.css';

function App() {
    const initialSwatchId = new Date().getTime();
    const [ palette, setPalette ] = useState([
        {
            id: initialSwatchId,
            name: "",
            colors: 0,
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
        activeColors.push({
            hue: activeSwatch.hue + activeSwatch.hueLinearCoef*i,
            sat: activeSwatch.sat + activeSwatch.satLinearCoef*i,
            val: activeSwatch.val + activeSwatch.valLinearCoef*i
        });
    }

    return (
        <div className="App">
            {<ColorDisplay activeColors={activeColors} />}
            {palette.map((swatch) => {
                return (
                    <SwatchDesigner swatch={swatch} setSwatchValue={setSwatchValueFactory(swatch.id, palette, setPalette)} setActiveSwatchId={setActiveSwatchId} />
                );
            })}
        </div>
    );
}

export default App;
