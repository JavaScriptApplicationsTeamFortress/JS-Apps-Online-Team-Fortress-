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

    this.firstName = "";
    this.middleName = "";
    this.lastName = "";
    this.email = "";
    this.dateOfBirth = "";
    this.age = "";
    this.gender = "";
    this.phoneNumber = "";
    this.address = "";
    this.country = "";
    this.nationality = "";
    this.socialMedia = "";
}

var SocialMedia = function () {
    "use strict";

    this.facebook = "";
    this.google = "";
    this.twitter = "";
    this.yahoo = "";
    this.linkedin = "";
    this.skype = "";
    this.github = "";
}