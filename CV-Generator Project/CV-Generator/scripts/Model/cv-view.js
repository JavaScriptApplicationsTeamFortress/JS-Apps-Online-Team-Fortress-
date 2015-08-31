
    $(function () {
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
            wrraper;

        len = fields.length;
        wrapper = $("#person-info");

        for (i = 0; i < len; i += 1) {
            $("<lable for=" + fields[i].id + " value='' >" + fields[i].name + " </lable>")
                .attr("id", "lable-" + fields[i].id)
                .attr("name", "lable" + i)
                .attr("value", fields[i].name)
                .appendTo(wrapper);

            $("<input type='text' value='' />")
                .attr("id", fields[i].id)
                .attr("name", fields[i].name)
                .attr("placeholder", fields[i].name)
                .appendTo(wrapper);

            $('<br/>')
                .appendTo(wrapper);
            $('<br/>')
                .appendTo(wrapper);
        }
    });

// module.exports = cvView;
