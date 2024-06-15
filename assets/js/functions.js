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
	// 在按鈕上設置事件監聽器
	document.querySelector('.btn-light[onclick="setLanguage(\'en\')"]').addEventListener('click', function() {
		setLanguage('en');
	});
	document.querySelector('.btn-light[onclick="setLanguage(\'zh\')"]').addEventListener('click', function() {
		setLanguage('zh');
	});
});

// lang change
const translations = {
	en: {
		homeTitle: "Unveiling<br>AI Wonders - <br>Dr. Fei-Fei Li",
		learnMore: "Learn more <i class='fa-solid fa-angles-right'></i>",
		introTitle: "Trailblazing Journey as Leading Female Scientist",
		introDescription: "Fei-Fei Li is a leading Chinese computer scientist specializing in machine learning and artificial intelligence. With roles at Google and Stanford University, she has made significant contributions to computer vision and deep learning research.",
		headerTitle: "Female Scientist",
		lSideNavHome: "Home",
		lSideNavIntro: "Intro",
		lSideNavLife: "Life",
		lSideNavDedication: "Dedication",
		lSideNavMedia: "Media",
		lSideNavAbout: "About",
	},
	zh: {
		homeTitle: "揭示<br>AI奇蹟 - <br>李飛飛博士",
		learnMore: "了解更多 <i class='fa-solid fa-angles-right'></i>",
		introTitle: "作為領先的女性科學家的開創之旅",
		introDescription: "李飛飛博士是一位專注於機器學習和人工智慧的領先華裔計算機科學家。她在Google和斯坦福大學擔任重要職務，對計算機視覺和深度學習研究作出了重大貢獻。",
		headerTitle: "女性科學家",
		lSideNavHome: "主頁",
		lSideNavIntro: "簡介",
		lSideNavLife: "生平",
		lSideNavDedication: "貢獻",
		lSideNavMedia: "媒體",
		lSideNavAbout: "關於",
	}
};

function setLanguage(lang) {
	document.getElementById('home-title').innerHTML = translations[lang].homeTitle;
	document.getElementById('btn-learnMore').innerHTML = translations[lang].learnMore;
	document.getElementById('intro-title').innerHTML = translations[lang].introTitle;
	document.getElementById('intro-description').innerHTML = translations[lang].introDescription;
	document.getElementById('l-side-nav-home').innerHTML = translations[lang].lSideNavHome;
	document.getElementById('l-side-nav-intro').innerHTML = translations[lang].lSideNavIntro;
	document.getElementById('l-side-nav-life').innerHTML = translations[lang].lSideNavLife;
	document.getElementById('l-side-nav-dedication').innerHTML = translations[lang].lSideNavDedication;
	document.getElementById('l-side-nav-media').innerHTML = translations[lang].lSideNavMedia;
	document.getElementById('l-side-nav-about').innerHTML = translations[lang].lSideNavAbout;
}

// 檢查localStorage中的語言設置
const savedLang = localStorage.getItem('language') || 'en'; // 默認語言為英文
setLanguage(savedLang);