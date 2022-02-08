$(function () {
    $('#hide').click(function () {
        $('#show_hide').hide(1000);
    })

    $('#show').click(function () {
        $('#show_hide').show(500);
    })

    $('#fadeIn').click(function() {
        $('#fade_in-out').fadeIn(1000);
    })

    $('#fadeOut').click(function() {
        $('#fade_in-out').fadeOut(1000);
    })

    $('#fadeTo').click(function() {
        $('#fade_in-out').fadeTo(1000,0.5)
    })

    $('#slideUp').click(function() {
        $('#slide').slideUp(1000);
    })

    $('#slideDown').click(function() {
        $('#slide').slideDown(1000);
    })

    $('#animation').click(function() {
        $('#animate').animate({
            width:'400px',
            height:'25px'
        },1000);
    })

    $('#animation2').click(function() {
        $('#animate').animate({
            width:'25px',
            height:'150px'
        },1000);
    })
})
