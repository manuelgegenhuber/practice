define(function() {
    'use strict';
    return function (a,b) {  
        if(typeof a === "number" && typeof b == "number"){
            return a + b;
        }else{
            throw new Error(`NaN - (${a} type: ${typeof a} , ${b} type: ${typeof b}`);
        }
    }
});