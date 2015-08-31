$(function () {
    var currentLocation = document.location.toString();
    var n = currentLocation.lastIndexOf("/");
    var result = currentLocation.substring(n);

    if (result === "/") {
        $('#home').attr('class', 'selected');
    }

    if (result === "/CreateCV") {
        $('#addCv').attr('class', 'selected');
    }
    if (result === "/PreviewDocument") {
        $('#prevDocument').attr('class', 'selected');
    }
});