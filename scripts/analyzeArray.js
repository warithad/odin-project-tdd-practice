function isValid(array){
    for(let num of array){
        if(typeof num !== 'number'){
            return false;
        }
    }
    return true;
}

function average(array){
    if(array.length === 0){return 0}
    const total = array.reduce((prev, curr) => curr + prev, 0);

    return total / array.length;
}

function max(array){
    if(array.length === 0){return 0}
    return array.reduce((prev, curr) => Math.max(prev, curr), Number.MIN_VALUE);
}

function min(array){
    if(array.length === 0){return 0}
    return array.reduce((prev, curr) => Math.min(prev, curr), Number.MAX_VALUE);
}

function analyzeArray(array){
    if(!isValid(array)){return 'invalid array'}

    const lengthValue = array.length;
    const averageValue = average(array);
    const maxValue = max(array);
    const minValue = min(array);

    const result = {
        average : averageValue,
        min : minValue,
        max : maxValue,
        length : lengthValue,
    };

    return result;
}

export default analyzeArray;