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

    this.personalInformation = ""; //done
    this.photo = "";
    this.language = ""; 
    this.workExperience = []; //done
    this.education = []; //done
    this.skills = ""; //done
    this.certificates = []; //done
    this.languages = [];
    this.drivingLicences = []; //done
    this.additionalInformation = "";
}

var AdditionalInformation = function () {
    "use strict";

    this.text = "";
}

AdditionalInformation.prototype.init = function (text) {
    this.text = text;
}
