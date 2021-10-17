$(".anchor").css("bottom", $(".nav").outerHeight() + 5)

//script to handle hamburger menu clicked
function toggleMenu() {
    $(".header").toggleClass("open")
    $(".overlay, .toggle-menu").fadeToggle("500ms")
    $("body").toggleClass("noScroll")
}

$("#btnHamburger").click(function () {
    
    //set top position and height
    if ($(window).scrollTop() >= $(".nav").outerHeight()) {       
        $(".overlay").css("top", $(window).scrollTop() + 5)
        $(".overlay").css("height", $(window).height() - $(".nav").outerHeight() - 5)
    } else {
        $(".overlay").css("top", $(".nav").outerHeight())
        $(".overlay").css("height", $(window).height() - $(window).scrollTop() - $(".nav").outerHeight())
    }

    //toggle the display
    toggleMenu()
})

$(".overlay").click(function () {
    if ($(".header").hasClass("open")) {
        toggleMenu()
    }
})

//script to handle sticky nav bar
$(window).scroll(navh = $(".nav").outerHeight(),function () {

    if ($(window).scrollTop() >= $(".nav").outerHeight()) {
        $(".nav").addClass("sticky-nav")
        $(".content").css("margin-top", navh)
    } else {
        $(".nav").removeClass("sticky-nav")
        $(".content").css("margin-top", 0)
    }

    console.log($("#about").offset().top)
    console.log($(window).scrollTop() + ($(window).height() / 2))

    if ($(window).scrollTop() + ($(window).height() / 2) >= $("#skills").offset().top) {
        $(".menu_link > *").removeClass("active")
        $("#mSkills").addClass("active")
    } else if ($(window).scrollTop() + ($(window).height() / 2) >= $("#experience").offset().top) {
        $(".menu_link > *").removeClass("active")
        $("#mExperience").addClass("active")
    } else if ($(window).scrollTop() + ($(window).height() / 2) >= $("#about").offset().top) {
        $(".menu_link > *").removeClass("active")
        $("#mAbout").addClass("active")
    } else {
        $(".menu_link > *").removeClass("active")
        $("#mHome").addClass("active")
    }

})

//handle my age
var day = new Date().getDate()
var month = new Date().getMonth()
var year = new Date().getFullYear()
var d = new Date(month + "/" + day + "/" + year)
var dateBirth = new Date("03/01/1994")

var age = Math.floor((d.getTime() - dateBirth.getTime()) / (1000 * 3600 * 24 * 365))

$("#age").append(age + " years old")