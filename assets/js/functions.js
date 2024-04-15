$(document).ready(function(){



    $('.side-nav li').click(function(){
        if (!($(this).hasClass('active'))){
			let $this = $(this),
				curActive = $this.parent().find('.active'),
				curPos = $this.parent().children().index(curActive),
				nextPos = $this.parent().children().index($this),
				lastItem = $(this).parent().children().length - 1;
            $('.side-nav').children().removeClass('active');
            $('.side-nav').children().eq(nextPos).addClass('active');
		}
    });


    $("#collapse").on("click", function(){
        $("#right-menu").toggleClass("active");
        $(".fa-bars").toggleClass("fa-bars-staggered");
        $(".collapse-btn").toggleClass("active");      
    })
})