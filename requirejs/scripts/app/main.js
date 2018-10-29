define(['app/addBorder','app/getElementData', 'math/taschenrechner'], function(addBorder, getData, tr) {
    'use strict';

    try {
        addBorder("#myDiv");
        let dataObject = getData(document.getElementById("myDiv"));
        let dataObject2 = getData($("#myDiv"));
        console.log(dataObject, dataObject2);

        let x = tr(5,6);

        console.log(x.sum);
        console.log(x.product);
        console.log(x.quotient);
        console.log(x.difference);

        console.log(tr(50,60).sum);

        console.log(x.history);
        console.log(tr().universalHistory);
    } catch (error) {
        console.error(error);
    }
});