$(document).ready(function () {

	$('.side-nav li, #btn-learnMore, #btn-return').click(function () {
		if (!($(this).hasClass('active'))) {
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
	$(window).on('wheel', function (event) {
		if (debounceTimeout) {
			clearTimeout(debounceTimeout);
		}

		debounceTimeout = setTimeout(function () {
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

	function updateContent(curPos, nextPos, lastItem) { // 頁面更新
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
	function textAnimation(className) {
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
	// 在按鈕上設置事件監聽器
	document.querySelector('.btn-light[onclick="setLanguage(\'en\')"]').addEventListener('click', function () {
		setLanguage('en');
	});
	document.querySelector('.btn-light[onclick="setLanguage(\'zh\')"]').addEventListener('click', function () {
		setLanguage('zh');
	});
	// Media
	$('#videoCarousel').carousel({
		interval: false
	});
});