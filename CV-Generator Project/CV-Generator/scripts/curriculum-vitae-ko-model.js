var Knockout = (function () {
    "use strict";

    var knockout = {};

    //convert object to observable and returns it
    knockout.wrapObject = function (object) {
        //if object is primitive - return ko.observable
        //if object is array - wrapArray
        //if object is not primitive - get keys and values and make them observable or observableArrays
    }

    //convert array to observableArray of observable objects
    knockout.wrapArray = function (array) {

        _.each(array, function () {
        });
    }

    //by given object creates ko model
    knockout.createModel = function (model) {
    }

    return {
    };
})();


Object.prototype.getType = function () {
    var type = typeof this;
}


var Type = (function () {
    "use strict";

    var type = {};
    
    type.getType = function (object) {
        var objectType = typeof object;

        if (objectType === "number") {
            return "number";
        }

        if (objectType === "string") {
            return "string";
        }

        if (objectType === "boolean") {
            return "boolean";
        }

        if (objectType === "undefined") {
            return "undefined";
        }

        if (objectType === "object") {
            return "object";
        }

        if (objectType === "symbol") {
            return "symbol";
        }

        if (objectType === "function") {
            return "function";
        }
       
        if (Array.isArray(object)) {
            return "array";
        }
    }

    type.isPrimitive = function (object) {
        var objectType = type.getType(object);

        if (objectType === "number" || objectType === "string" || objectType === "symbol" || objectType === "boolean" || objectType === "undefined") {
            return true;
        }

        return false;
    }

    type.isObject = function (object) {
        if (type.getType(object) === "object") {
            return true;
        }

        return false;
    }

    type.isArray = function (object) {
        if (type.getType(object) === "array") {
            return true;
        }

        return false;
    }

    type.isNumber = function (object) {
        if (type.getType(object) === "number") {
            return true;
        }

        return false;
    }

    type.isBoolean = function (object) {
        if (type.getType(object) === "boolean") {
            return true;
        }

        return false;
    }

    type.isString = function (object) {
        if (type.getType(object) === "string") {
            return true;
        }

        return false;
    }

    type.isSymbol = function (object) {
        if (type.getType(object) === "symbol") {
            return true;
        }

        return false;
    }

    type.isFunction = function (object) {
        if (type.getType(object) === "function") {
            return true;
        }

        return false;
    }

    return {
        getType: type.getType,
        isPrimitive: type.isPrimitive,
        isObject: type.isObject,
        isArray: type.isArray,
        isNumber: type.isNumber,
        isBoolean: type.isBoolean,
        isString: type.isString,
        isFunction: type.isFunction
    }
})();