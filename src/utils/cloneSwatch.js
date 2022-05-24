import { Swatch } from "../classes";

export const cloneSwatch = (swatch, idIn) => {
    const { id, name, canDefault, colors, hue, sat, val, hueCustom, hueLinearCoef, hueSquareCoef, satCustom, satLinearCoef, satSquareCoef, valCustom, valLinearCoef, valSquareCoef } = swatch;

    return new Swatch(idIn ?? id, name, canDefault, colors, hue, sat, val, hueCustom, hueLinearCoef, hueSquareCoef, satCustom, satLinearCoef, satSquareCoef, valCustom, valLinearCoef, valSquareCoef);
}

export default cloneSwatch;