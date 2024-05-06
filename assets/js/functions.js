$(document).ready(function(){

    $('.side-nav li, #btn-learnMore, #btn-return').click(function(){
        if (!($(this).hasClass('active'))){
			let $this = $(this),
				curActive = $this.parent().find('.active'),
				curPos = $this.parent().children().index(curActive),
				nextPos = $this.parent().children().index($this),
				lastItem = $(this).parent().children().length - 1;
            $('.side-nav').children().removeClass('active');
            $('.side-nav').children().eq(nextPos).addClass('active');
			updateContent(curPos, nextPos, lastItem);
		}
    });

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
	textAnimation('.sayings');
	function textAnimation(className){
		$(className).textillate({
			in: {
			  effect: 'fadeInLeft', 
			  delay: 50, 
			  sequence: true,
			},
			out: {
			  effect: 'fadeOutRight', 
			  delay: 50,
			  sequence: true,
			},
			loop: true
		});
	}
	
})