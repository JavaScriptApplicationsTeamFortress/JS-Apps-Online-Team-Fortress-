var Languages = (function () {
    "use strict";

    var languages = {
        motherTongue: null,
        foreignLanguages : []
    };
})();

var ForeignLanguage = (function () {
    "use strict";

    var foreignLanguage = {
        name: null,
        skillGroup: null, //begginer, intermediate, etc.
        hearing: null, //from 1 to 10??
        speaking: null, //from 1 to 10??
        listening: null //from 1 to 10??
    };
})();