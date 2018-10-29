var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    },500);
});

promise.then(function(data){
    console.log("First random Int: ", data);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( Math.floor(Math.random() * 10));
        },3000);
    });
}).then(function(data){
    console.log("second random in: ", data);
});


var counter = 0;

function counting(){
    counter++;
    console.log("Counter status: ", counter);
}

function waiter(callback, milliseconds){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            var result = callback();
            resolve(result);
        }, milliseconds);
    });
}

waiter(counting, 1000).then(function(){
    return waiter(counting, 2000);
}).then(function(){
    return waiter(counting, 3000);
}).then(function(){

});



/*Promise with counter synchron*/

/*var promise2 = new Promise(function(resolve, reject){
    let time = Math.round(new Date().getTime()/1000);
    console.log("Start: "+ time);
    setTimeout(function(){
        resolve(1);
    }, 500);
});

promise2.then(function(data){
        let time = Math.round(new Date().getTime()/1000);
        console.log("1. Count: " + data + " time: " + time);
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve(data += 1);
            }, 500);
        });
    }).then(function(data){
        let time = Math.round(new Date().getTime()/1000);
        console.log("2. Count: " + data + " time: " + time);
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve(data += 1);
            }, 500);
        });
    }).then(function(data){
        let time = Math.round(new Date().getTime()/1000);
        console.log("3. Count: " + data + " time: " + time);
    });*/



/*Promise with timestamp*/

/*var promisee = new Promise(function(resolve, reject){
    let seconds = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
    setTimeout(function(){
        resolve(seconds);
    }, 500);
});

promisee.then(function(resolveData){
    let seconds1 = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
    console.log("promise seconds: "+ resolveData + " then seconds1: " + seconds1 + " | Difference: " + (seconds1-resolveData) );
});

promisee.then(function(resolveData){
    let seconds2 = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
    console.log("promise seconds: "+ resolveData + " then seconds2: " + seconds2 + " | Difference: " + (seconds2-resolveData));
});*/