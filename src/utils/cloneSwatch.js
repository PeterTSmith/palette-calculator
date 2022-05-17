import { Swatch } from "../classes";

export const cloneSwatch = (swatch, idIn) => {
    const { id, name, colors, hue, sat, val, hueLinearCoef, hueSquareCoef, satLinearCoef, satSquareCoef, valLinearCoef, valSquareCoef } = swatch;

    return new Swatch(idIn ?? id, name, colors, hue, sat, val, hueLinearCoef, hueSquareCoef, satLinearCoef, satSquareCoef, valLinearCoef, valSquareCoef);
}

export default cloneSwatch;