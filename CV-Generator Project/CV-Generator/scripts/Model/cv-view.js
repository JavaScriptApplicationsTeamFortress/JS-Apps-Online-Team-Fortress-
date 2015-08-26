$(function () {
    "use strict";

    var i,
        len,
        form,
        wrapper,
        minLength,
        maxLength,
        CONSTANTS = {
            MIN_LENGTH_NAME: 3,
            MAX_LENGTH_NAME: 10,
            MIN_LENGTH_PHONE: 10,
            MAX_LENGTH_PHONE: 12,
            MIN_LENGTH_ADDRESS: 10,
            MAX_LENGTH_ADDRESS: 50
        },
        fields = [
            {
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
                sex:['male', 'female'],
                data: null
            }, {
                name: 'Telephone',
                id: 'phone',
                src: null,
                data: null
            }, {
                name: 'Addresss',
                id: 'address',
                src: null,
                data: null
            },{
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
                data: null            }
        ];

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
       if (fields[i].id === 'first-name' ||
           fields[i].id === 'Last name') {
           minLength = CONSTANTS.MIN_LENGTH_NAME;
           maxLength = CONSTANTS.MAX_LENGTH_NAME;
       }

       if (fields[i].id === 'phone') {
           minLength = CONSTANTS.MIN_LENGTH_PHONE;
           maxLength = CONSTANTS.MAX_LENGTH_PHONE;
       }

       if (fields[i].id === 'address') {
           minLength = CONSTANTS.MIN_LENGTH_ADDRESS;
           maxLength = CONSTANTS.MAX_LENGTH_ADDRESS;
       }


        $("<lable for=" + fields[i].id + " value='' >" + fields[i].name + " </lable>")
            .attr("id", "lable-" + fields[i].id)
            .attr("name", "lable" + i)
            .attr("value", fields[i].name)
            .appendTo('fieldset');

        if (fields[i].id === 'gender') {

            $("<input type='radio' value='male'/>Male")
                .attr("id", fields[i].id)
                .attr("class", "radio")
                .attr("name", "sex")
                .attr("minlength", minLength)
                .attr("maxlength", maxLength)
                // .attr("value", "male")
                .attr("check", "checked")
                .html("Male")
                // .attr("required data-val-required", "Field first name is required.")
                .appendTo('fieldset');
            $("<input type='radio' value='female'/>")
               .attr("id", fields[i].id)
               .attr("class", "radio")
               .attr("name", "sex")
               .attr("minlength", minLength)
               .attr("maxlength", maxLength)
               // .attr("value", "female")
               //.html("Female")
               // .attr("required data-val-required", "Field first name is required.")
               .appendTo('fieldset');
            continue;
        }

        $("<input type='text' value='' />")
            .attr("id", fields[i].id)
            .attr("class", "form-control")
            .attr("name", fields[i].name)
            .attr("placeholder", fields[i].name)
            .attr("minlength", minLength)
            .attr("maxlength", maxLength)
            // .attr("required data-val-required", "Field first name is required.")
            .appendTo('fieldset');

        //$('<br/>')
        //    .appendTo(form);
        //$('<br/>')
        //    .appendTo(form);
    }
});
