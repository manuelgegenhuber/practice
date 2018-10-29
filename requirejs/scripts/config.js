requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts/lib',


    // the url here goes relative from the baseUrl - also we define app for the directory app
    //should be a folder
    paths: {
        app: '../app',
        math: '../app/mathFunctions',
        lodash: '../../node_modules/lodash/lodash',
    },

    //same as loading main underneath
    //deps - dependency what to load when require loads

    deps: ["app/main"]
});

//load main.js
//require(["app/main"]);