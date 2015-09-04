window.onload = (function () {
    'use strict';

    var cv,
        model;

    cv = new CurriculumVitae();
    model = Knockout.createModel(cv);

    //adding obesevables that are not in our base object
    Knockout.addObservableToModel(model, "index", 0);
    Knockout.addObservableToModel(model, "educationViewObject", "");
    Knockout.addObservableToModel(model, "certificateViewObject", "");
    Knockout.addObservableToModel(model, "workExperienceViewObject", "");
    Knockout.addObservableToModel(model, "languageViewObject", "");

    Knockout.addFunctionToModel(model, "updatePersonalInformation", function () {
        $("#personalInformation").modal("hide");
    });

    Knockout.addFunctionToModel(model, "updateSkills", function () {
        $("#skills").modal("hide");
    });

    Knockout.addFunctionToModel(model, "createPersonInformation", function () {
        var observable;

        if (model.personalInformation() == "") {
            observable = Knockout.wrapObject(new info.personalInformation());
            model.personalInformation(observable());
        }
    });

    Knockout.addFunctionToModel(model, "createSkills", function () {
        var observable;

        if (model.skills() == "") {
            observable = Knockout.wrapObject(new Skills());
            model.skills(observable());
        }
    });

    Knockout.addFunctionToModel(model, "createEducation", function () {
        var observableEducation = Knockout.wrapObject(new Education());
        model.educationViewObject(observableEducation());
    });

    Knockout.addFunctionToModel(model, "updateEducation", function (education) {
        //this is required because when using method indexOf on observableArray (method indexOf is implemented by knockout) 
        //returns -1 (e.g. object not found). this is probably because it expects object, whitch is not observable (observable array
        //dont track changes on object itself; it track changes on length of array)
        _.each(model.education(), function (existingEducation, index, educations) {
            if (existingEducation.type === education.type && existingEducation.from === education.from
                && existingEducation.to === education.to && existingEducation.schoolName === education.schoolName
                && existingEducation.status === education.status && existingEducation.qualification === education.qualification) {
                model.educationViewObject(education);
            }
        });
    });

    Knockout.addFunctionToModel(model, "addEducation", function () {
        var unwrapedObservable,
            observable;

        $("#educationAndTraining").modal("hide");

        unwrapedObservable = model.educationViewObject();
        observable = Knockout.createObservable(unwrapedObservable);

        model.education.push(observable);
    });

    Knockout.addFunctionToModel(model, "createCertificate", function () {
        var observableCertificate = Knockout.wrapObject(new Certificate());
        model.certificateViewObject(observableCertificate());
    });

    Knockout.addFunctionToModel(model, "updateCertificate", function (certificate) {
        _.each(model.certificates, function (existingCertificate, index, certificates) {
            if (existingCertificate.dateAccuired === certificate.dateAccuired && existingCertificate.expirationDate === certificate.expirationDate
                && existingCertificate.period === certificate.period && existingCertificate.name === certificate.name
                && existingCertificate.type === certificate.type && existingCertificate.organization === certificate.organization) {

                model.certificateViewObject(certificate);
            }
        });
    });

    Knockout.addFunctionToModel(model, "addCertificate", function () {
        var upwrapedObservable,
            observable;

        $("#certificates").modal("hide");

        upwrapedObservable = model.certificateViewObject();
        observable = Knockout.createObservable(upwrapedObservable);

        model.certificates.push(observable);
    });

    Knockout.addFunctionToModel(model, "createWorkExperience", function () {
        var observableExperience = Knockout.wrapObject(new WorkExperience());
        model.workExperienceViewObject(observableExperience());
    });

    Knockout.addFunctionToModel(model, "updateWorkExperience", function (workExperience) {
        _.each(model.workExperience, function (existingExperience, index, workExperience) {
            if (existingExperience.employer === workExperience.employer && existingExperience.period === workExperience.period
                && existingExperience.from === workExperience.from && existingExperience.to === workExperience.to
                && existingExperience.occupation === workExperience.occupation && existingExperience.responsibilities === workExperience.responsibilities) {
                model.workExperienceViewObject(workExperience);
            }
        });
    });

    Knockout.addFunctionToModel(model, "addWorkExperience", function () {
        var upwrapedObservable,
            observable;

        $("#work-experience").modal("hide");

        upwrapedObservable = model.workExperienceViewObject();
        observable = Knockout.createObservable(upwrapedObservable);

        model.workExperience.push(observable);
    });

    Knockout.addFunctionToModel(model, "createLanguage", function () {
        var observableLanguage = Knockout.wrapObject(new Language());
        model.languageViewObject(observableLanguage());
    });

    Knockout.addFunctionToModel(model, "updateLanguage", function (language) {
        _.each(model.workExperience, function (existingLanguage, index, languages) {
            if (existingLanguage.name === language.name && existingLanguage.skillGroup === language.skillGroup
                && existingLanguage.speaking === language.speaking && existingLanguage.listening === language.listening && existingLanguage.reading === language.reading) {
                model.languageViewObject(language);
            }
        });
    });

    Knockout.addFunctionToModel(model, "addLanguage", function () {
        var upwrapedObservable,
            observable;

        $("#languages").modal("hide");

        upwrapedObservable = model.languageViewObject();
        observable = Knockout.createObservable(upwrapedObservable);

        model.languages.push(observable);
    });

    Knockout.addFunctionToModel(model, "updateAdditionalInformation", function () {
        $("#additional-information").modal("hide");
    });

    Knockout.addFunctionToModel(model, "submit", function () {
        if (model.personalInformation() == "") {
            alert("Please, enter atleast personal information before submitting.");
            return;
        }

        Serializer.serializeCurriculumVitaeModel("/Home/CreateCV", $("page-wrapper"), model); //serializing and sending our model
    });

    ko.applyBindings(model);
}());


var Serializer = (function () {
    "use strict";

    var serializer = {};

    serializer.createHiddenForm = function (action) {
        return $("<form action=" + action + " role='form' id='hidden-form' style='display: none;' method='POST'></form>");
    }

    serializer.submit = function (form) {
        $.ajax({
            type: "POST",
            url: "/Home/CreateCV",
            data: form.serialize(),
            success: function (id) {
                window.location.href = "/Home/PreviewDocument/" + id;
            }
        });
    }

    serializer.createInput = function (name, value) {
        if (value == "") {
            return $("<input type='text' name=" + name + " value='' />")
        }

        return $("<input type='text' name=" + name + " value=" + value + " />");
    }

    serializer.serializeCurriculumVitaeModel = function (action, baseElement, model) {
        var form = serializer.createHiddenForm(action);

        serializer.createInput("PersonalInformation.FirstName", model.personalInformation().firstName()).appendTo(form);
        serializer.createInput("PersonalInformation.MiddleName", model.personalInformation().middleName()).appendTo(form);
        serializer.createInput("PersonalInformation.LastName", model.personalInformation().lastName()).appendTo(form);
        serializer.createInput("PersonalInformation.Email", model.personalInformation().email()).appendTo(form);
        serializer.createInput("PersonalInformation.DateOfBirth", model.personalInformation().dateOfBirth()).appendTo(form);
        serializer.createInput("PersonalInformation.Age", model.personalInformation().age()).appendTo(form);
        serializer.createInput("PersonalInformation.Gender", model.personalInformation().gender()).appendTo(form);
        serializer.createInput("PersonalInformation.PhoneNumber", model.personalInformation().phoneNumber()).appendTo(form);
        serializer.createInput("PersonalInformation.Address", model.personalInformation().address()).appendTo(form).appendTo(form);
        serializer.createInput("PersonalInformation.Country", model.personalInformation().country()).appendTo(form);
        serializer.createInput("PersonalInformation.Nationality", model.personalInformation().nationality()).appendTo(form);

        _.each(model.workExperience(), function (we, index) {
            serializer.createInput("WorkExperience[" + index + "].Employer", we().employer()).appendTo(form);
            serializer.createInput("WorkExperience[" + index + "].Period", we().period()).appendTo(form);
            serializer.createInput("WorkExperience[" + index + "].From", we().from()).appendTo(form);
            serializer.createInput("WorkExperience[" + index + "].To", we().to()).appendTo(form);
            serializer.createInput("WorkExperience[" + index + "].Occupation", we().occupation()).appendTo(form);
            serializer.createInput("WorkExperience[" + index + "].Responsibilities", we().responsibilities()).appendTo(form);
        });

        if (model.skills() != "") {
            serializer.createInput("Skills.PersonalSkills", model.skills().personalSkills()).appendTo(form);
            serializer.createInput("Skills.CommunicationSkills", model.skills().communicationSkills()).appendTo(form);
            serializer.createInput("Skills.ProffesionalSkills", model.skills().proffesionalSkills()).appendTo(form);
            serializer.createInput("Skills.OtherSkills", model.skills().otherSkills()).appendTo(form);
        }

        _.each(model.education(), function (education, index) {
            serializer.createInput("Education[" + index + "].Type", education().type()).appendTo(form);
            serializer.createInput("Education[" + index + "].From", education().from()).appendTo(form);
            serializer.createInput("Education[" + index + "].SchoolName", ed().schoolName()).appendTo(form);
            serializer.createInput("Education[" + index + "].Status", education().status()).appendTo(form);
            serializer.createInput("Education[" + index + "].Qualification", education().qualification()).appendTo(form);
        });

        _.each(model.certificates(), function (certificate, index) {
            serializer.createInput("Certificates[" + index + "].DateAccuired", certificate().dateAccuired()).appendTo(form);
            serializer.createInput("Certificates[" + index + "].ValidTo", certificate().validTo()).appendTo(form);
            serializer.createInput("Certificates[" + index + "].CertificateName", certificate().name()).appendTo(form);
            serializer.createInput("Certificates[" + index + "].CertificateType", certificate().type()).appendTo(form);
        });

        _.each(model.languages(), function (language, index) {
            serializer.createInput("Languages[" + index + "].Name", language().name()).appendTo(form);
            serializer.createInput("Languages[" + index + "].SkillGroup", language().skillGroup()).appendTo(form);
            serializer.createInput("Languages[" + index + "].Speaking", language().speaking()).appendTo(form);
            serializer.createInput("Languages[" + index + "].Listening", language().listening()).appendTo(form);
            serializer.createInput("Languages[" + index + "].Reading", language().reading()).appendTo(form);
        });

        serializer.createInput("AdditionalInformation", model.additionalInformation()).appendTo(form);

        serializer.submit(form);
    }

    return {
        serializeCurriculumVitaeModel: serializer.serializeCurriculumVitaeModel
    };
})();