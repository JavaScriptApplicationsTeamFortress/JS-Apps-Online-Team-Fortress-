//var PersonalInformation = (function () {
//    "use strict";

//    var personalInformation = {
//        firstName: null,
//        middleName: null,
//        lastName: null,
//        email: null,
//        dateOfBirth: null,
//        age: null, //can be calculated
//        gender: null, //dropdown
//        phoneNumber: null,
//        country: null,
//        nationality: null,
//        socialMedia: null //social media object here
//    };
//})();

//var SocialMedia = (function () {
//    "use strict";

//    var socialMedia = {
//        facebook: null,
//        google: null,
//        twitter: null,
//        yahoo: null,
//        linkedin: null,
//        skype: null,
//        github: null
//    };
//})();

var PersonalInformation = function () {
    "use strict";

    this.firstName = null;
    this.middleName = null;
    this.lastName = null;
    this.email = null;
    this.dateOfBirth = null;
    this.age = null;
    this.gender = null;
    this.phoneNumber = null;
    this.address = null;
    this.country = null;
    this.nationality = null;
    this.socialMedia = null;
}

var SocialMedia = function () {
    "use strict";

    this.facebook = null;
    this.google = null;
    this.twitter = null;
    this.yahoo = null;
    this.linkedin = null;
    this.skype = null;
    this.github = null;
}