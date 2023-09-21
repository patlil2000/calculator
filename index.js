let firstNumber;  //variable for first number
let secondNumber; //variable for second number
let operator;     //operator variable
let result;
let displayValue = display();

function add(firstNumber,secondNumber){
    return firstNumber + secondNumber
}

function subtract(firstNumber,secondNumber){
    return firstNumber - secondNumber
}

function multiply(firstNumber,secondNumber){
    return firstNumber * secondNumber
}

function divide(firstNumber,secondNumber){
    return firstNumber / secondNumber
}

function operate(firstNumber,operator,secondNumber){

    if(operator == "+"){
       return firstNumber + secondNumber
    }

    else if(operator == "-"){
        return firstNumber - secondNumber
    }
    else if(operator == "/"){
        return firstNumber / secondNumber
    }
    else if(operator == "*"){
       return firstNumber * secondNumber
    }

    else{
        return NaN;
    }


}

function display(){
    document.getElementById("seven").innerText = 7
}




 
