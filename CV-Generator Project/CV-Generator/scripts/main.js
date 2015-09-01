window.onload = (function () {
    'use strict';

    var cv = new CurriculumVitae();

    //var pi = new PersonalInformation();

    //pi.firstName = "GOSHO";
    //pi.lastName = "PESHOOOOO";
    //pi.age = 37;

    //var ed = new Education();

    //ed.type = "Prelimitary";
    //ed.from = 1;
    //ed.to = 2;
    //ed.schoolName = "Gosho";
    //ed.status = "dropped";
    //ed.qualification = "mindil";

    //cv.personalInformation = pi;
    //cv.education.push(ed);

    var model = Knockout.createModel(cv);

    Knockout.addObservableToModel(model, "index", 0);
    Knockout.addObservableToModel(model, "educationViewObject", "");
    Knockout.addObservableToModel(model, "certificateViewObject", "");
    Knockout.addObservableToModel(model, "workExperienceViewObject", "");

    Knockout.addFunctionToModel(model, "updatePersonalInformation", function () {
        $("#personalInformation").modal("hide");
    });

    Knockout.addFunctionToModel(model, "updateSkills", function () {
        $("#skills").modal("hide");
    });

    Knockout.addFunctionToModel(model, "createPersonInformation", function () {
        var observable;

        if (model.personalInformation() == "") {
            observable = Knockout.wrapObject(new PersonalInformation());
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
        model.index(0); //do i need this????

        _.each(model.education(), function (existingEducation, index, educations) {
            if (existingEducation.type === education.type && existingEducation.from === education.from
                && existingEducation.to === education.to && existingEducation.schoolName === education.schoolName
                && existingEducation.status === education.status && existingEducation.qualification === education.qualification) {
                model.index(index);
                
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
        model.index(0);

        _.each(model.certificates, function (existingCertificate, index, certificates) {
            if(existingCertificate.dateAccuired === certificate.dateAccuired && existingCertificate.expirationDate === certificate.expirationDate
                && existingCertificate.period === certificate.period && existingCertificate.name === certificate.name 
                && existingCertificate.type === certificate.type && existingCertificate.organization === certificate.organization) {
                model.index(index);

                model.certificateViewObject(certificate);
            }
        });
    });

    Knockout.addFunctionToModel(model, "addCertificate", function () { //TODO: Find a way this to be in function
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
        model.index(0);

        _.each(model.workExperience, function (existingExperience, index, workExperience) {
            if(existingExperience.employer === workExperience.employer && existingExperience.period === workExperience.period
                && existingExperience.from === workExperience.from && existingExperience.to === workExperience.to
                && existingExperience.occupation === workExperience.occupation && existingExperience.responsibilities === workExperience.responsibilities) {
                model.index(0);

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


    ko.applyBindings(model);
}());