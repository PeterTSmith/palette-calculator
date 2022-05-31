export const FuncPole = {
    start: 'start',
    center: 'center'
}

export class Swatch {
    constructor(idIn, nameIn, canDefault, colorsIn, hueIn, satIn, valIn, hueCustomIn, hueFuncPoleIn, hueFuncIn, satCustomIn, satFuncPoleIn, satFuncIn, valCustomIn, valFuncPoleIn, valFuncIn) {
        this.id = idIn;
        this.name = nameIn;
        this.canDefault = canDefault;
        this.colors = colorsIn;
        this.hue = hueIn;
        this.sat = satIn;
        this.val = valIn;
        this.hueCustom = hueCustomIn;
        this.hueFuncPole = hueFuncPoleIn;
        this.hueFunc = hueFuncIn;
        this.satCustom = satCustomIn;
        this.satFuncPole = satFuncPoleIn;
        this.satFunc = satFuncIn;
        this.valCustom = valCustomIn;
        this.valFuncPole = valFuncPoleIn;
        this.valFunc = valFuncIn;
    }
}

export class Polynomial {
    constructor(linearCoefIn, squareCoefIn, cubeCoefIn) {
        this.coefficients = [
            linearCoefIn,
            squareCoefIn,
            cubeCoefIn
        ];
    }

    getDegCoef(degree) {
        return this.coefficients[degree-1];
    }

    setDegCoef(degree, coefficientIn) {
        this.coefficients[degree-1] = coefficientIn;
    }
}