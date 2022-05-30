import { FuncPole } from "../classes/Swatch";
import { boundAdjustNumber, loopAdjustNumber } from "./";

export const generateActiveColors = (activeSwatch, baseFormulas) => {
    const { colors, hue, sat, val, hueCustom, hueFuncPole, hueLinearCoef, hueSquareCoef, hueCubeCoef, satCustom, satFuncPole, satLinearCoef, satSquareCoef, satCubeCoef, valCustom, valFuncPole, valLinearCoef, valSquareCoef, valCubeCoef } = activeSwatch;
    const activeColors = [];
    const hueOffset = calcOffset(hueCustom, hueFuncPole, baseFormulas.hueFuncPole, colors);
    const satOffset = calcOffset(satCustom, satFuncPole, baseFormulas.satFuncPole, colors);
    const valOffset = calcOffset(valCustom, valFuncPole, baseFormulas.valFuncPole, colors);

    for( let i = 0; i < activeSwatch?.colors; i++ ) {
        const newHue = newColorTrait(i, hue, hueCustom, hueOffset, hueLinearCoef, hueSquareCoef, hueCubeCoef, baseFormulas.hueLinearCoef, baseFormulas.hueSquareCoef, baseFormulas.hueCubeCoef);
        const newSat = newColorTrait(i, sat, satCustom, satOffset, satLinearCoef, satSquareCoef, satCubeCoef, baseFormulas.satLinearCoef, baseFormulas.satSquareCoef, baseFormulas.satCubeCoef);
        const newVal = newColorTrait(i, val, valCustom, valOffset, valLinearCoef, valSquareCoef, valCubeCoef, baseFormulas.valLinearCoef, baseFormulas.valSquareCoef, baseFormulas.valCubeCoef);
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

const newColorTrait = (x, baseTrait, isCustom, offset, traitLinearCoef, traitSquareCoef, traitCubeCoef, baseLinearCoef, baseSquareCoef, baseCubeCoef) => {
    const linearCoef = isCustom ? traitLinearCoef : baseLinearCoef;
    const squareCoef = isCustom ? traitSquareCoef : baseSquareCoef;
    const cubeCoef = isCustom ? traitCubeCoef : baseCubeCoef;
    const newX = x + offset;
    return baseTrait + linearCoef*newX + squareCoef*(newX ** 2) + cubeCoef*(newX ** 3);
}

export default generateActiveColors;