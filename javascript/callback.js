function checkData(number){
    return new Promise(function(resolve, reject){
        console.log("Processing...");
        setTimeout(function(){
            if(!isNaN(number)){
                console.log("Number given: ",number);
                resolve(number);
            }else{
                let message = "Not a number";
                reject(message);
            }
        },500);
    });
}

function adding(a, b){
    return a + b;
}

function subtraktion(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function calculator(number1, number2, cbCalcMethod){
    return checkData(number1).then(function(){
        return checkData(number2);
    }).then(function(){
        return cbCalcMethod(number1, number2);
    }).catch(function(mesg){
        console.log(mesg);
    });
}