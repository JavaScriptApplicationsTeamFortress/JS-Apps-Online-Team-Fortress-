var CurriculumVitae = (function () {
    "use strict";

    var curriculumVitae = {
        language: null,
        photo: null,
        personalInformation: null, //personal information object
        workExperience: [],
        education: [],
        certificates: [],
        languages: [], //forgot to add object :c
        drivingLicences: [],
        additionalInformation: null //additional information object
    };

    return curriculumVitae;

})(CurriculumVitae);

var AdditionalInformation = (function () {
    "use strict";

    var additionalInformation = {
        text: null //free text; what you do in your free time, hobbies, sports actively practiced, etc.
    };
})();