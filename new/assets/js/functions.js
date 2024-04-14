$(document).ready(function(){

    $("#collapse").on("click", function(){
        $("#right-menu").toggleClass("active");
        $(".fa-bars").toggleClass("fa-bars-staggered");
    })
})