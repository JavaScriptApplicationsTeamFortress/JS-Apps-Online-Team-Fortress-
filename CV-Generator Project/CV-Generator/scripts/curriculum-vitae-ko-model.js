var Knockout = (function () {
    "use strict";

    var knockout = {};

    //convert object to observable and returns it
    knockout.wrapObject = function (object) {
        var keys,
            observableObject,
            observable;

        if (Type.isPrimitive(object)) {
            return ko.observable(object);
        }

        if (Type.isArray(object)) {
            return knockout.wrapArray(object);
        }

        if (Type.isObject(object)) {
            keys = Object.keys(object);
            observableObject = {};

            _.each(keys, function (key, index, keys) {
                observable = knockout.wrapObject(object[key]);
                observableObject[key] = observable;
            });

            return ko.observable(observableObject);
        }

        return ko.observable();

    }

    //convert array to observableArray of observable objects
    knockout.wrapArray = function (array) {
        var keys,
            object,
            observable,
            observableArray;

        observableArray = ko.observableArray();

        _.each(array, function (item, index, array) {
            observable = !Type.isArray(item) ? knockout.wrapObject(item) : knockout.wrapArray(item);

            observableArray.push(observable);
        });

        return observableArray;

    }

    //by given object creates ko model
    knockout.createModel = function (model) {
        var keys,
            koObject,
            object,
            observable;

        keys = Object.keys(model);
        koObject = {};

        _.each(keys, function (key, index, keys) {
            object = model[key];

            if (!Type.isArray(object)) {
                observable = knockout.wrapObject(object);
            }
            else {
                observable = knockout.wrapArray(object);
            }

            koObject[key] = observable;
        });

        return koObject;
    }

    knockout.addObservableToModel = function (model, observableName, object) {
        var observable;

        if (Type.isArray(object)) {
            observable = knockout.wrapArray(object);
        }
        else {
            observable = knockout.wrapObject(object);
        }

        model[observableName] = observable;
    }

    knockout.addFunctionToModel = function (model, functionName, functionHandler) {
        model[functionName] = functionHandler;
    }

    knockout.createObservable = function (object) {
        return ko.observable(object);
    }

    knockout.createObservableArray = function (array) {
        return ko.observableArray(array);
    }

    return {
        wrapObject: knockout.wrapObject,
        wrapArray: knockout.wrapArray,
        createModel: knockout.createModel,
        addObservableToModel: knockout.addObservableToModel,
        addFunctionToModel: knockout.addFunctionToModel,
        createObservable: knockout.createObservable,
        createObservableArray: knockout.createObservableArray
    };
})();

var Type = (function () {
    "use strict";

    var type = {};

    type.getType = function (object) {
        var objectType;

        if (Array.isArray(object)) {
            return "array";
        }

        objectType = typeof object;

        switch (objectType) {
            case "number":
                return "number";
            case "string":
                return "string";
            case "boolean":
                return "boolean";
            case "undefined":
                return "undefined";
            case "object":
                return "object";
            case "symbol":
                return "symbol";
            case "function":
                return "function";
            default:
                return "unknown type";
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