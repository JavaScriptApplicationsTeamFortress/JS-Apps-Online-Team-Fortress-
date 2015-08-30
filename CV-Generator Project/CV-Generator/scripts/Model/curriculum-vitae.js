//var CurriculumVitae = (function () {
//    "use strict";

//    var curriculumVitae = {
//        language: null,
//        photo: null,
//        personalInformation: null, //personal information object
//        workExperience: [],
//        education: [],
//        certificates: [],
//        languages: [], //forgot to add object :c
//        drivingLicences: [],
//        additionalInformation: null //additional information object
//    };
//})();

//var AdditionalInformation = (function () {
//    "use strict";

//    var additionalInformation = {
//        text: null //free text; what you do in your free time, hobbies, sports actively practiced, etc.
//    };
//})();


// CurriculumVitae - namespace???


var CurriculumVitae = function () {
    "use strict";

    this.personalInformation = null;
    this.photo = null;
    this.language = null;
    this.workExperience = [];
    this.education = [];
    this.skills = null;
    this.certificates = [];
    this.languages = [];
    this.drivingLicences = [];
    this.additionalInformation = null;
}

var AdditionalInformation = function () {
    "use strict";

    this.text = null;
}

AdditionalInformation.prototype.init = function (text) {
    this.text = text;
}
