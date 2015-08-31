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
        },  {
            name: 'Telephone',
            id: 'phone',
            src: null,
            data: null
        }, {
            name: 'Address',
            id: 'Address',
            src: null,
            data: null
        }],
        wrraper;

    len = fields.length;
    wrapper = $("#cover-letter-form");

    for (i = 0; i < len; i += 1) {
        $("<label for=" + fields[i].id + " value='' >" + fields[i].name + " </label>")
            .attr("id", "label-" + fields[i].id)
            .attr("name", "label" + i)
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
    return wrapper;
});
