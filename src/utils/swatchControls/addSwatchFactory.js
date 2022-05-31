import clonePalette from "../clonePalette";
import { Swatch, Polynomial } from '../../classes';
import { FuncPole } from "../../classes/Swatch";

export const addSwatchFactory = (palette, setPalette) => {
    return () => {
        const newPalette = clonePalette(palette);

        newPalette.push(new Swatch(new Date().getTime(), "", true, 1, 0, 0, 0, false, FuncPole.start, new Polynomial(0, 0, 0), false, FuncPole.start, new Polynomial(0, 0, 0), false, FuncPole.start, new Polynomial(0, 0, 0)));

        setPalette(newPalette);
    };
}

export default addSwatchFactory;