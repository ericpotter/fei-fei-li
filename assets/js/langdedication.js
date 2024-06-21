// lang change
const translations = {
	en: {
		homeTitle: "Unveiling<br>AI Wonders - <br>Dr. Fei-Fei Li",
		learnMore: "Learn more <i class='fa-solid fa-angles-right'></i>",
		introTitle: "<strong>Trailblazing Journey as Leading Female Scientist</strong>",
		introDescription: "<em>Fei-Fei Li is a leading Chinese computer scientist specializing in machine learning and artificial intelligence. With roles at Google and Stanford University, she has made significant contributions to computer vision and deep learning research.</em>",
		headerTitle: "Female Scientist",
		lSideNavHome: "Home",
		lSideNavIntro: "Intro",
		lSideNavLife: "Life",
		lSideNavDedication: "Dedication",
		lSideNavMedia: "Media",
		lSideNavAbout: "About",
		lSideNavSocial: "Social media",
		lSideNavContact: "Contact",
		rightHome: "<a href=\"index.html\"><i class=\"fa-solid fa-house nav-options\"></i>Home</a>",
		rightLife: "<a href=\"life.html\"><i class=\"fa-solid fa-address-card nav-options\"></i>Life</a>",
		rightDedictation: "<a href=\"dedication.html\"><i class=\"fa-solid fa-award nav-options\"></i>Dedication</a>",
		rightContact: "<a href=\"contact.html\"><i class=\"fa-solid fa-envelope nav-options\"></i>Contact</a>",
		langChange: "<button type=\"button\" class=\"lang-change btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#language\">Change Language</button>",
		modalTitle: "Choose a language",
	}
};

function setLanguage(lang) {
	document.getElementById('header-title').innerHTML = translations[lang].headerTitle;
	document.getElementById('l-side-nav-dedication').innerHTML = translations[lang].lSideNavDedication;
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