// lang change
const translations = {
	en: {
		homeTitle: "Unveiling<br>AI Wonders - <br>Dr. Fei-Fei Li",
		introTitle: "<strong>Trailblazing Journey as Leading Female Scientist</strong>",
		introDescription: "<em>Fei-Fei Li is a leading Chinese computer scientist specializing in machine learning and artificial intelligence. With roles at Google and Stanford University, she has made significant contributions to computer vision and deep learning research.</em>",
		headerTitle: "Female Scientist",
		lSideNavHome: "Home",
		lSideNavIntro: "Intro",
		lSideNavMedia: "Media",
		lSideNavAbout: "About",
		saying1: "China is a dormant lion. When it stirs, the world will stand in awe.",
		saying2: "Empower computers with visual intelligence, and create a brighter future for children and the world.",
		author: "Dr. Fei-Fei Li in <cite title=\"Source Title\" id=\"source-title\">Google Developer Day</cite>",
		rightHome: "<a href=\"index.html\"><i class=\"fa-solid fa-house nav-options\"></i>Home</a>",
		rightLife: "<a href=\"life.html\"><i class=\"fa-solid fa-address-card nav-options\"></i>Life</a>",
		rightDedictation: "<a href=\"dedication.html\"><i class=\"fa-solid fa-award nav-options\"></i>Dedication</a>",
		rightContact: "<a href=\"contact.html\"><i class=\"fa-solid fa-envelope nav-options\"></i>Contact</a>",
		langChange: "<button type=\"button\" class=\"lang-change btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#language\">Change Language</button>",
		modalTitle: "Choose a language",
	},
	zh: {
		homeTitle: "揭示<br>AI奇蹟 - <br>李飛飛博士",
		introTitle: "<strong>作為領先的女性科學家的開創之旅</strong>",
		introDescription: "<em>李飛飛博士是一位專注於機器學習和人工智慧的領先華裔計算機科學家。她在Google和斯坦福大學擔任重要職務，對計算機視覺和深度學習研究作出了重大貢獻。</em>",
		headerTitle: "傑出女性科學家",
		lSideNavHome: "主頁",
		lSideNavIntro: "簡介",
		lSideNavMedia: "媒體",
		lSideNavAbout: "關於",
		saying1: "中國是一隻沉睡的獅子，它一旦被驚醒，世界會為之震動。",
		saying2: "為電腦賦予視覺智能，為兒童和世界創造更美好的未來。",
		author: "李飛飛博士 <cite title=\"Source Title\" id=\"source-title\">Google開發者日</cite>",
		rightHome: "<a href=\"index.html\"><i class=\"fa-solid fa-house nav-options\"></i>首頁</a>",
		rightLife: "<a href=\"life.html\"><i class=\"fa-solid fa-address-card nav-options\"></i>生平</a>",
		rightDedictation: "<a href=\"dedication.html\"><i class=\"fa-solid fa-award nav-options\"></i>貢獻</a>",
		rightContact: "<a href=\"contact.html\"><i class=\"fa-solid fa-envelope nav-options\"></i>聯絡資訊</a>",
		langChange: "<button type=\"button\" class=\"lang-change btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#language\">改變使用語言</button>",
		modalTitle: "請選擇語言",
	}
};

function setLanguage(lang) {
	document.getElementById('home-title').innerHTML = translations[lang].homeTitle;
	document.getElementById('intro-title').innerHTML = translations[lang].introTitle;
	document.getElementById('intro-description').innerHTML = translations[lang].introDescription;
	document.getElementById('header-title').innerHTML = translations[lang].headerTitle;
	document.getElementById('l-side-nav-life').innerHTML = translations[lang].lSideNavHome;
	document.getElementById('saying-1').innerHTML = translations[lang].saying1;
	document.getElementById('saying-2').innerHTML = translations[lang].saying2;
	document.getElementById('author').innerHTML = translations[lang].author;
	document.getElementById('right-home').innerHTML = translations[lang].rightHome;
	document.getElementById('right-life').innerHTML = translations[lang].rightLife;
	document.getElementById('right-dedication').innerHTML = translations[lang].rightDedictation;
	document.getElementById('right-contact').innerHTML = translations[lang].rightContact;
	document.getElementById('lang-change').innerHTML = translations[lang].langChange;
	document.getElementById('modal-title').innerHTML = translations[lang].modalTitle;
}


// 檢查localStorage中的語言設置
const savedLang = localStorage.getItem('language') || 'en'; // 默認語言為英文
setLanguage(savedLang);
