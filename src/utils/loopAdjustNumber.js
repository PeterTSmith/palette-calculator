export const loopAdjustNumber = (number, minVal, maxVal) => {
    let newNum = number;

    if(minVal !== undefined && newNum < minVal) {
        newNum = maxVal + 1 - (minVal - newNum);
    }

    if(maxVal !== undefined && newNum > maxVal) {
        newNum -= maxVal + 1;
    }

    return newNum;
}

export default loopAdjustNumber;