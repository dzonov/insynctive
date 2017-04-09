$('.select').on('click', '.selected', function () {
    $(this).siblings().addBack().children().remove();
    $(this).siblings().toggle();
    $(this).removeClass('.selected');
});

$('.select').on('click', 'li:not(.selected)', function () {
    $(this).parent().prepend(this);
    $(this).addClass('.selected');
    $(this).siblings().toggle();
});