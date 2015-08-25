var WorkExperience = (function () {
    "use strict";

    var workExperiece = {
        employer: null, //employer object here
        period: null, //can be calculated
        from: null,
        to: null,
        occupation: null,
        responsibilities: null
    };
})();

var Employer = (function () {
    "use strict";

    var employer = {
        name: null,
        country: null,
        city: null,
        website: null,
        recommendations: [] //attachments
    };
})();