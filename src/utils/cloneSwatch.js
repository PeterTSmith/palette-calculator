export const cloneSwatch = (swatch, id) => {
    return {
        id: id ?? swatch.id,
        name: swatch.name,
        colors: swatch.colors,
        hue: swatch.hue,
        sat: swatch.sat,
        val: swatch.val,
        hueLinearCoef: swatch.hueLinearCoef,
        satLinearCoef: swatch.satLinearCoef,
        valLinearCoef: swatch.valLinearCoef
    };
}

export default cloneSwatch;