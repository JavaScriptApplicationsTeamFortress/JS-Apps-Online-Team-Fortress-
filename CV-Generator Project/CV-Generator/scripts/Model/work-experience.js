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

    this.employer = null;
    this.period = null;
    this.from = null;
    this.to = null;
    this.occupation = null;
    this.responsibilities = null;
}

var Employer = function () {
    "use strict";

    this.name = null;
    this.country = null;
    this.city = null;
    this.website = null;
    this.recommendations = null; //can be array
}