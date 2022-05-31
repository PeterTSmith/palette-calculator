import { Polynomial } from "../classes";

export const clonePolynomial = (polynomial) => {
    return new Polynomial(polynomial.getDegCoef(1), polynomial.getDegCoef(2), polynomial.getDegCoef(3));
}

export default clonePolynomial;