import { Swatch } from "../classes";

export const cloneSwatch = (swatch, idIn) => {
    const { id, name, canDefault, colors, hue, sat, val, hueCustom, hueFuncPole, hueLinearCoef, hueSquareCoef, hueCubeCoef, satCustom, satFuncPole, satLinearCoef, satSquareCoef, satCubeCoef, valCustom, valFuncPole, valLinearCoef, valSquareCoef, valCubeCoef } = swatch;

    return new Swatch(idIn ?? id, name, canDefault, colors, hue, sat, val, hueCustom, hueFuncPole, hueLinearCoef, hueSquareCoef, hueCubeCoef, satCustom, satFuncPole, satLinearCoef, satSquareCoef, satCubeCoef, valCustom, valFuncPole, valLinearCoef, valSquareCoef, valCubeCoef);
}

export default cloneSwatch;