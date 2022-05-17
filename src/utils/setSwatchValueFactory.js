import cloneSwatch from "./cloneSwatch";

export const setSwatchValueFactory = (index, swatch, setSwatch) => {
    return ((newValue) => {
        const newSwatch = cloneSwatch(swatch);

        newSwatch[index] = newValue;

        setSwatch(newSwatch);
    });
};

export default setSwatchValueFactory;