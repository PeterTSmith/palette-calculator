import cloneSwatch from "../cloneSwatch";
import clonePalette from "../clonePalette";

export const cloneSwatchFactory = (palette, setPalette, activeSwatchId) => {
    return () => {
        const newPalette = clonePalette(palette);

        newPalette.push(cloneSwatch(palette.find((swatch) => swatch.id === activeSwatchId), new Date().getTime()));

        setPalette(newPalette);
    };
}

export default cloneSwatchFactory;