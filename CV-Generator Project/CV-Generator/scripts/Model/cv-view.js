$(function () {
    "use strict";

    var i,
        len,
        fields = [{
            name: 'First name',
            id: 'first-name',
            data: null
        }, {
            name: 'Last name',
            id: 'last-name',
            data: null
        }, {
            name: 'Gender',
            id: 'gender',
            data: null
        }, {
            name: 'Telephone',
            id: 'phone',
            src: null,
            data: null
        }, {
            name: 'Current city',
            id: 'current-city',
            src: null,
            data: null
        }, {
            name: 'Country',
            id: 'country',
            data: null
        }, {
            name: 'Email',
            id: 'email',
            src: null,
            data: null
        }, {
            name: 'Website / Blog',
            id: 'blog',
            src: null,
            data: null
        }, {
            name: 'Date of birth',
            id: 'birth',
            data: null
        }, {
            name: 'QR code',
            id: 'qr',
            data: null
        }],
        wrapper,
            form;

    len = fields.length;
    wrapper = $("#person-info");
   form = $('<form/>')
        .attr("method", "post")
        .attr("role", "form")
        .attr("id", "cv-form")
        .attr("class", "form-horizontal")
        .appendTo(wrapper);

   form.append('<fieldset><legend>Person Information</legend></fieldset>');


    for (i = 0; i < len; i += 1) {
        $("<lable for=" + fields[i].id + " value='' >" + fields[i].name + " </lable>")
            .attr("id", "lable-" + fields[i].id)
            .attr("name", "lable" + i)
            .attr("value", fields[i].name)
            .appendTo('fieldset');

        $("<input type='text' value='' />")
            .attr("id", fields[i].id)
            .attr("name", fields[i].name)
            .attr("placeholder", fields[i].name)
            .appendTo('fieldset');

        //$('<br/>')
        //    .appendTo(form);
        //$('<br/>')
        //    .appendTo(form);
    }
});
