import { Swatch } from "../classes";

export const cloneSwatch = (swatch, idIn) => {
    const { id, name, canDefault, colors, hue, sat, val, hueCustom, hueFuncPole, hueFunc, satCustom, satFuncPole, satFunc, valCustom, valFuncPole, valFunc } = swatch;

    return new Swatch(idIn ?? id, name, canDefault, colors, hue, sat, val, hueCustom, hueFuncPole, hueFunc, satCustom, satFuncPole, satFunc, valCustom, valFuncPole, valFunc);
}

export default cloneSwatch;