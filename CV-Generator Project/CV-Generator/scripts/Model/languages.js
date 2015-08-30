//var Languages = (function () {
//    "use strict";

//    var languages = {
//        motherTongue: null,
//        foreignLanguages : []
//    };
//})();

//var ForeignLanguage = (function () {
//    "use strict";

//    var foreignLanguage = {
//        name: null,
//        skillGroup: null, //begginer, intermediate, etc.
//        hearing: null, //from 1 to 10??
//        speaking: null, //from 1 to 10??
//        listening: null //from 1 to 10??
//    };
//})();


var Languages = function () {
    "use strict";

    this.motherTongue = null;
    this.foreignLanguages = [];
}

var ForeignLanguages = function () {
    "use strict";

    this.name = null;
    this.skillGroup = null;
    this.hearing = null;
    this.speaking = null;
    this.listening = null;
}