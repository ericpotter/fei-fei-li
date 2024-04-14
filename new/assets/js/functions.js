$(document).ready(function(){


    // 为具有类名为 'side-nav' 的 <li> 元素添加点击事件监听器
    $('.side-nav li').click(function(){
        // 在这里添加您想要执行的操作
        
    });


    $("#collapse").on("click", function(){
        $("#right-menu").toggleClass("active");
        $(".fa-bars").toggleClass("fa-bars-staggered");
        $(".collapse-btn").toggleClass("active");      
    })
})