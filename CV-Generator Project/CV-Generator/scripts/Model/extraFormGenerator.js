$(document).ready(function () {

    $('.form-group').on('click', 'button', function () {
      
            var $this = $(this).parent();
            var form = $this.find('.form-control').first().attr('id', 'parent').clone();
            var field = $this.find('label').first().clone();
            var group = $('<div>');
            $(field).appendTo(group);
            $(form).val('Fill input').appendTo(group);
            $(group).prependTo($this);
    })
});