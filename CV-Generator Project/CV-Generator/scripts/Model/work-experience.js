//var WorkExperience = (function () {
//    "use strict";

//    var workExperiece = {
//        employer: null, //employer object here
//        period: null, //can be calculated
//        from: null,
//        to: null,
//        occupation: null,
//        responsibilities: null
//    };
//})();

//var Employer = (function () {
//    "use strict";

//    var employer = {
//        name: null,
//        country: null,
//        city: null,
//        website: null,
//        recommendations: [] //attachments
//    };
//})();

var WorkExperience = function () {
    "use strict";

    this.employer = "";
    this.period = "";
    this.from = "";
    this.to = "";
    this.occupation = "";
    this.responsibilities = "";
}

var Employer = function () {
    "use strict";

    this.name = "";
    this.country = "";
    this.city = "";
    this.website = "";
    this.recommendations = ""; //can be array
}