import { FuncPole } from "../classes/Swatch";
import { boundAdjustNumber, loopAdjustNumber } from "./";

export const generateActiveColors = (activeSwatch, baseFormulas) => {
    const { colors, hue, sat, val, hueCustom, hueFuncPole, hueFunc, satCustom, satFuncPole, satFunc, valCustom, valFuncPole, valFunc } = activeSwatch;
    const activeColors = [];
    const hueOffset = calcOffset(hueCustom, hueFuncPole, baseFormulas.hueFuncPole, colors);
    const satOffset = calcOffset(satCustom, satFuncPole, baseFormulas.satFuncPole, colors);
    const valOffset = calcOffset(valCustom, valFuncPole, baseFormulas.valFuncPole, colors);

    for( let i = 0; i < activeSwatch?.colors; i++ ) {
        const newHue = newColorTrait(i, hue, hueCustom, hueOffset, hueFunc, baseFormulas.hueFunc);
        const newSat = newColorTrait(i, sat, satCustom, satOffset, satFunc, baseFormulas.satFunc);
        const newVal = newColorTrait(i, val, valCustom, valOffset, valFunc, baseFormulas.valFunc);
        const newColor = {
            hue: loopAdjustNumber(newHue, 0, 359),
            sat: boundAdjustNumber(newSat, 0, 100),
            val: boundAdjustNumber(newVal, 0, 100)
        };

        activeColors.push(newColor);
    }

    return activeColors;
}

const calcOffset = (isCustom, funcPole, baseFuncPole, colors) => {
    const calcFuncPole = isCustom ? funcPole : baseFuncPole;
    if(calcFuncPole === FuncPole.center) {
        return Math.round(-colors/2);
    }
    return 0;
}

const newColorTrait = (x, baseTrait, isCustom, offset, traitFunc, baseFunc) => {
    console.log(traitFunc);
    console.log(baseFunc);
    const linearCoef = isCustom ? traitFunc.getDegCoef(1) : baseFunc.getDegCoef(1);
    const squareCoef = isCustom ? traitFunc.getDegCoef(2) : baseFunc.getDegCoef(2);
    const cubeCoef = isCustom ? traitFunc.getDegCoef(3) : baseFunc.getDegCoef(3);
    const newX = x + offset;
    return baseTrait + linearCoef*newX + squareCoef*(newX ** 2) + cubeCoef*(newX ** 3);
}

export default generateActiveColors;