import clonePalette from "./clonePalette";

export const setSwatchFactory = (palette, setPalette) => {
    return ((newSwatch) => {
        const newPalette = clonePalette(palette);

        newPalette.forEach((swatch, index) => {
            if(newSwatch.id === swatch.id) {
                newPalette[index] = newSwatch;
            }
        });

        setPalette(newPalette);
    });
};

export default setSwatchFactory;