import clonePolynomial from "./clonePolynomial";

export const setPolynomialValueFactory = (index, polynomial, setPolynomialValue) => {
    return ((newValue) => {
        const newPolynomial = clonePolynomial(polynomial);

        newPolynomial.setDegCoef(index, newValue);

        setPolynomialValue(newPolynomial);
    });
};

export default setPolynomialValueFactory;