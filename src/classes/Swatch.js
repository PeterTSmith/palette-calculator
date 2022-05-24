export class Swatch {
    constructor(idIn, nameIn, canDefault, colorsIn, hueIn, satIn, valIn, hueCustom, hueLinearCoefIn, hueSquareCoefIn, satCustom, satLinearCoefIn, satSquareCoefIn, valCustom, valLinearCoefIn, valSquareCoefIn) {
        this.id = idIn;
        this.name = nameIn;
        this.canDefault = canDefault;
        this.colors = colorsIn;
        this.hue = hueIn;
        this.sat = satIn;
        this.val = valIn;
        this.hueCustom = hueCustom;
        this.hueLinearCoef = hueLinearCoefIn;
        this.hueSquareCoef = hueSquareCoefIn;
        this.satCustom = satCustom;
        this.satLinearCoef = satLinearCoefIn;
        this.satSquareCoef = satSquareCoefIn;
        this.valCustom = valCustom;
        this.valLinearCoef = valLinearCoefIn;
        this.valSquareCoef = valSquareCoefIn;
    }
}