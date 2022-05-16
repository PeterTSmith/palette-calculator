import clonePalette from "../clonePalette";

export const addSwatchFactory = (palette, setPalette) => {
    return () => {
        const newPalette = clonePalette(palette);

        newPalette.push({
            id: new Date().getTime(),
            name: "",
            colors: 1,
            hue: 0,
            sat: 0,
            val: 0,
            hueLinearCoef: 0,
            satLinearCoef: 0,
            valLinearCoef: 0
        });

        setPalette(newPalette);
    };
}

export default addSwatchFactory;