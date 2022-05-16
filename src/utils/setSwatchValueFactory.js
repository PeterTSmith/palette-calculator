import clonePalette from "./clonePalette";

export const setSwatchValueFactory = (swatchName, palette, setPalette) => {
    return ((index, newValue) => {
        const newPalette = clonePalette(palette);

        newPalette.forEach((swatch) => {
            if(swatch.id === swatchName) {
                swatch[index] = newValue;
            }
        });

        setPalette(newPalette);
    });
};

export default setSwatchValueFactory;