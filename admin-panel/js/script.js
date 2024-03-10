$(document).ready(function () {
    $(".dropdown").click(function () {
        $(this).children(".dropdown-content").slideToggle("fast");
        $(this).siblings("li").children(".dropdown-content").slideUp("fast");
    })

    $(".bars").click(function (){
        $(".side-bar").toggleClass("collaps");
        $(".main-area").toggleClass("collaps");
        $("header").toggleClass("collaps");
    })
})
