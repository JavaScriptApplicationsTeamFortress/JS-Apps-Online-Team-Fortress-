window.onload = (function () {
    'use strict';

    var cvSubmitButton = document.getElementById("cv-submit");

    if (cvSubmitButton != undefined) {
        cvSubmitButton.addEventListener("click", function (event) {
            event.preventDefault();

            if (!$("#cv-form").valid()) {
                alert("form data is not valid");
                return;
            }

            alert("form data is valid");
        }, false);
    }
}());