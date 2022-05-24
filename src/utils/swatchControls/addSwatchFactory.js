import clonePalette from "../clonePalette";
import { Swatch } from '../../classes';

export const addSwatchFactory = (palette, setPalette) => {
    return () => {
        const newPalette = clonePalette(palette);

        newPalette.push(new Swatch(new Date().getTime(), "", true, 1, 0, 0, 0, false, 0, 0, false, 0, 0, false, 0, 0));

        setPalette(newPalette);
    };
}

export default addSwatchFactory;