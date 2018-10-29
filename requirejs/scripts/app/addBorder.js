define([
    'jquery'
], function($) {
    'use strict';
    
    return function(selector){

        let elements = $(selector);

        if(elements.length === 0){
            throw new Error(`Didn't find Element: "${selector}".`);
        }else{
            elements.css("border", "1px solid black");
        }
    }
});