export const boundAdjustNumber = (number, minVal, maxVal) => {
    let newNum = number;

    if(minVal !== undefined && newNum < minVal) {
        newNum = minVal;
    }

    if(maxVal !== undefined && newNum > maxVal) {
        newNum = maxVal;
    }

    return newNum;
}

export default boundAdjustNumber;