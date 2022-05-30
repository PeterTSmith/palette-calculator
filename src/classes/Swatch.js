export const FuncPole = {
    start: 'start',
    center: 'center'
}

export class Swatch {
    constructor(idIn, nameIn, canDefault, colorsIn, hueIn, satIn, valIn, hueCustomIn, hueFuncPoleIn, hueLinearCoefIn, hueSquareCoefIn, hueCubeCoefIn, satCustomIn, satFuncPoleIn, satLinearCoefIn, satSquareCoefIn, satCubeCoefIn, valCustomIn, valFuncPoleIn, valLinearCoefIn, valSquareCoefIn, valCubeCoefIn) {
        this.id = idIn;
        this.name = nameIn;
        this.canDefault = canDefault;
        this.colors = colorsIn;
        this.hue = hueIn;
        this.sat = satIn;
        this.val = valIn;
        this.hueCustom = hueCustomIn;
        this.hueFuncPole = hueFuncPoleIn;
        this.hueLinearCoef = hueLinearCoefIn;
        this.hueSquareCoef = hueSquareCoefIn;
        this.hueCubeCoef = hueCubeCoefIn;
        this.satCustom = satCustomIn;
        this.satFuncPole = satFuncPoleIn;
        this.satLinearCoef = satLinearCoefIn;
        this.satSquareCoef = satSquareCoefIn;
        this.satCubeCoef = satCubeCoefIn;
        this.valCustom = valCustomIn;
        this.valFuncPole = valFuncPoleIn;
        this.valLinearCoef = valLinearCoefIn;
        this.valSquareCoef = valSquareCoefIn;
        this.valCubeCoef = valCubeCoefIn;
    }
}

export class thirdDegPoly {

}