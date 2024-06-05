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

	let debounceTimeout;
	$(window).on('wheel', function(event){
		if (debounceTimeout) {
			clearTimeout(debounceTimeout);
		}
	
		debounceTimeout = setTimeout(function() {
			let delta = event.originalEvent.deltaY,
				$activeItem = $('.side-nav .active'),
				curPos = $activeItem.index(),
				lastItem = $('.side-nav').children().length - 1;
			
			let nextPos;
			if (delta > 0) { // 向下滾動
				nextPos = (curPos + 1 > lastItem) ? 0 : curPos + 1;
			} else { // 向上滾動
				nextPos = (curPos - 1 < 0) ? lastItem : curPos - 1;
			}
	
			let $nextItem = $('.side-nav').children().eq(nextPos);
			$('.side-nav').children().removeClass('active');
			$nextItem.addClass('active');
			updateContent(curPos, nextPos, lastItem);
		}, 200); // 200毫秒的debounce時間
	});
	
    function updateContent(curPos, nextPos, lastItem){ // 頁面更新
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
	
	const translations = {
		en: {
			home_title: "Unveiling<br>AI Wonders - <br>Dr. Fei-Fei Li",
		},
		zh: {
			home_title: "揭示AI奇蹟 - <br>李飛飛博士",
		}
	};
	
	function setLanguage(lang) {
		document.getElementById('home-title').innerHTML = translations[lang].home_title;
		localStorage.setItem('language', lang); // 將語言設置存儲在localStorage中
		$('#language').modal('hide'); // 隱藏Modal
	}
	
	// 檢查localStorage中的語言設置
	const savedLang = localStorage.getItem('language') || 'en'; // 默認語言為英文
	setLanguage(savedLang);
	

	
})