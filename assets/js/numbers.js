function compute(expression) {
    let myArray = expression.split("");
    let operator;
    let result = 0;
    let n1, n2;
    for (let i = 0; i < myArray.length; i++) {
        if (isNaN(Number(myArray[i]))) {
            operator = myArray[i];
        } else {
            n1 = Number(myArray[i]);
            if (operator == "+") {
                n2 = Number(myArray[i - 2]);
                result = add(n2, n1);
                myArray[i] = result;
            } else if (operator == "*") {
                n2 = Number(myArray[i - 2]);
                result = multiply(n1, n2);
                myArray[i] = result;
            } else if (operator == "/") {
                n2 = Number(myArray[i - 2]);
                result = division(n1, n2);
                myArray[i] = result;
            } else if (operator == "-") {
                n2 = Number(myArray[i - 2]);
                result = sub(n2, n1);
                myArray[i] = result;
            }
        }

    }
    return result;

}

function add(n2, n1) {
    let sum = n1 + n2;
    return sum;
}
function sub(n2, n1) {
    let sub = n2 - n1;
    return sub;
}

function multiply(n1, n2) {
    let multiply = n1 * n2;
    return multiply;
}

function division(n1, n2) {
    let div = n1 / n2;
    return div;
}