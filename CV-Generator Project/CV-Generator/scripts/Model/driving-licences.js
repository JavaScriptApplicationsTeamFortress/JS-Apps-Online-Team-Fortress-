//var DrivingLicences = (function () {
//    "use strict";

//    var drivingLicences = {
//        categories: []
//    };
//})();

//var DrivingLicenceCategories = (function () {
//    "use strict";

//    var drivingLicenceCategories = {
//        categoryId: null,
//        categoryName: null,
//        attachment: null //licence as pdf
//    };
//})();

var DrivingLicences = function () {
    "use strict";

    this.categories = [];
}

var DrivingLicenceCategories = function () {
    "use strict";

    this.categoryId = "";
    this.categoryName = "";
    this.attachment = "";
}

DrivingLicenceCategories.prototype.init = function (values) {
    //TODO: init categories
}