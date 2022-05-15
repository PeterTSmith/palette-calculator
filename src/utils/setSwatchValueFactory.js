export const setSwatchValueFactory = (swatchName, palette, setPalette) => {
    return ((index, newValue) => {
        const newPalette = palette.map((swatch) => {
            const newSwatch = {
                id: swatch.id,
                name: swatch.name,
                colors: swatch.colors,
                hue: swatch.hue,
                sat: swatch.sat,
                val: swatch.val,
                hueLinearCoef: swatch.hueLinearCoef,
                satLinearCoef: swatch.satLinearCoef,
                valLinearCoef: swatch.valLinearCoef
            };

            if(swatch.id === swatchName) {
                newSwatch[index] = newValue;
            }

            return newSwatch;
        });

        setPalette(newPalette);
    });
};

export default setSwatchValueFactory;