//var Education = (function () {
//    "use strict";

//    var education = {
//        type: null, //dropdown - sredno, visshe t.n.
//        from: null,
//        to: null,
//        schoolName: null,
//        status: null, //completed, dropped, in training
//        qualification: null,
//        attachment: null //diploma in some format
//    };
//})();

//var Certificates = (function () {
//    "use strict";

//    var certificates = {
//        dateAccuired: null,
//        validTo: null,
//        certificateName: null,
//        certificateType: null,
//        attachment: null //certificate in some format
//    };
//})();

var Education = function () {
    "use strict";

    this.type = null;
    this.from = null;
    this.to = null;
    this.schoolName = null;
    this.status = null;
    this.qualification = null;
}

var Certificates = function () {
    "use strict";

    this.dateAccuired = null;
    this.expirationDate = null;
    this.period = null;
    this.certificateName = null;
    this.certificateType = null;
    this.certificateOrganization = null;
    this.attachment = null;
}