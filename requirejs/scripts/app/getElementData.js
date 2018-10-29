define([
    'jquery'
], function($) {
    'use strict';
    

    return function (element) { 
        let obj = {
            width: 0,
            height: 0
        }
        if(element instanceof jQuery.fn.init){
            obj.width = element.width();
            obj.height = element.height();
        }else if(element instanceof HTMLElement){
            obj.width = element.offsetWidth;
            obj.height = element.offsetHeight;
        }
        return obj;
    }
});