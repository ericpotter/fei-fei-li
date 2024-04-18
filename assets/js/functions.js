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


    function updateContent(curPos, nextPos, lastItem) {
		$('.main-content').children().removeClass('section--is-active');
		$('.main-content').children().eq(nextPos).addClass('section--is-active');
		$('.main-content .section').children().removeClass('section--next section--prev');
		if (curPos === lastItem && nextPos === 0 || curPos === 0 && nextPos === lastItem) {
			$('.main-content .section').children().removeClass('section--next section--prev');
		} else if (curPos < nextPos) {
			$('.main-content').children().eq(curPos).children().addClass('section--next');
		} else {
			$('.main-content').children().eq(curPos).children().addClass('section--prev');
		}
		if (nextPos !== 0 && nextPos !== lastItem) {
			$('.header--cta').addClass('is-active');
		} else {
			$('.header--cta').removeClass('is-active');
		}
	}
})