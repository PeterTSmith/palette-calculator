export class Swatch {
    constructor(idIn, nameIn, colorsIn, hueIn, satIn, valIn, hueLinearCoefIn, hueSquareCoefIn, satLinearCoefIn, satSquareCoefIn, valLinearCoefIn, valSquareCoefIn) {
        this.id = idIn;
        this.name = nameIn;
        this.colors = colorsIn;
        this.hue = hueIn;
        this.sat = satIn;
        this.val = valIn;
        this.hueLinearCoef = hueLinearCoefIn;
        this.hueSquareCoef = hueSquareCoefIn;
        this.satLinearCoef = satLinearCoefIn;
        this.satSquareCoef = satSquareCoefIn;
        this.valLinearCoef = valLinearCoefIn;
        this.valSquareCoef = valSquareCoefIn;
    }
}