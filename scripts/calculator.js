function isValid(x, y){
    return (typeof x === 'number'  && typeof y === 'number');
}

function add(x, y){
    if(isValid(x, y)){
        return x + y;
    }
    return 'Invalid argument';
}

function subtract(x, y){
    if(isValid(x, y)){
        return x - y;
    }
    return 'Invalid argument';
}

function multiply(x, y){
    if(isValid(x, y)){
        return x * y;
    }
    return 'Invalid argument';
}

function divide(x, y){
    if(isValid(x, y)){
        return x / y;
    }
    return 'Invalid argument';
}

export {multiply, divide, add, subtract};