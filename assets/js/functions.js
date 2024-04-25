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
			updateContent(curPos, nextPos, lastItem);
			if (nextPos == 1) textAnimation('.simple-intro');
		}
    });


    $("#collapse").on("click", function(){
        $("#right-menu").toggleClass("active");
        $(".fa-bars").toggleClass("fa-bars-staggered");
        $(".collapse-btn").toggleClass("active");      
    })


    function updateContent(curPos, nextPos, lastItem){
		$('.main').children().removeClass('active');
		$('.main').children().eq(nextPos).addClass('active');
		$('.main .section').children().removeClass('section-next section-prev');
		if (curPos === lastItem && nextPos === 0 || curPos === 0 && nextPos === lastItem) {
			$('.main .section').children().removeClass('section-next section-prev');
		} else if (curPos < nextPos) {
			$('.main').children().eq(curPos).children().addClass('section-next');
		} else {
			$('.main').children().eq(curPos).children().addClass('section-prev');
		}
	}

	function textAnimation(className){
		$(className).textillate({
			in: {
			  effect: 'bounceInDown', 
			  delay: 5, 
			  sequence: true,
			},
			out: {
			  effect: 'rotateOut', 
			  delay: 5,
			  sequence: true,
			},
			loop: false
		});
	}
	
})