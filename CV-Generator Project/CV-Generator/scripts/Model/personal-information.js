var PersonalInformation = (function () {
    "use strict";
    
    var personalInformation = {
        firstName: null,
        middleName: null,
        lastName: null,
        email: null,
        dateOfBirth: null,
        age: null, //can be calculated
        gender: null, //dropdown
        phoneNumber: null,
        country: null,
        nationality: null,
        socialMedia: null //social media object here
    };
})();

var SocialMedia = (function () {
    "use strict";

    var socialMedia = {
        facebook: null,
        google: null,
        twitter: null,
        yahoo: null,
        linkedin: null,
        skype: null,
        github: null
    };
})();