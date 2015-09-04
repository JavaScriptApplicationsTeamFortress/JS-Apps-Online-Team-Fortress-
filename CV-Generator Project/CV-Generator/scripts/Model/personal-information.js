var info = (function() {
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

    return {
        personalInformation: PersonalInformation,
        socialMedia: SocialMedia
    }
})();

//export default info;

