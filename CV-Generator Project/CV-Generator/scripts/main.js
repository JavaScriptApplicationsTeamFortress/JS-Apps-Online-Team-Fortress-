window.onload = (function () {
    'use strict';

    //var cvSubmitButton = document.getElementById("cv-submit");

    //if (cvSubmitButton != undefined) {
    //    cvSubmitButton.addEventListener("click", function (event) {
    //        event.preventDefault();

    //        if (!$("#cv-form").valid()) {
    //            alert("form data is not valid");
    //            return;
    //        }

    //        alert("form data is valid");
    //    }, false);
    //}

    var cv = new CurriculumVitae();
    var pi = new PersonalInformation();

    pi.firstName = "Gosho";
    pi.lastName = "Petrov";
    pi.age = 21;

    var ed = new Education();

    ed.type = "Prelimitary";

    cv.personalInformation = pi;
    cv.education.push(ed);

    var model = Knockout.createModel(cv);

    model.index = ko.observable(0);

    var test = model.education()[model.index()]();

    ko.applyBindings(model);
}());