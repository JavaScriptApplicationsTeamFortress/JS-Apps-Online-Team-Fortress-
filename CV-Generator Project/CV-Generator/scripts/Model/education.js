var Education = (function () {
    "use strict";

    var education = {
        type: null, //dropdown - sredno, visshe t.n.
        from: null,
        to: null,
        schoolName: null,
        status: null, //completed, dropped, in training
        qualification: null,
        attachment: null //diploma in some format
    };
})();

var Certificates = (function () {
    "use strict";

    var certificates = {
        dateAccuired: null,
        validTo: null,
        certificateName: null,
        certificateType: null,
        attachment: null //certificate in some format
    };
})();