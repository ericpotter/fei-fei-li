// lang change
const translations = {
	en: {
		headerTitle: "Female Scientist",
		lSideNavSocial: "Social media",
		lSideNavContact: "Contact",
		rightHome: "<a href=\"index.html\"><i class=\"fa-solid fa-house nav-options\"></i>Home</a>",
		rightLife: "<a href=\"life.html\"><i class=\"fa-solid fa-address-card nav-options\"></i>Life</a>",
		rightDedictation: "<a href=\"dedication.html\"><i class=\"fa-solid fa-award nav-options\"></i>Dedication</a>",
		rightMedia: "<a href=\"media.html\"><i class=\"fa-solid fa-photo-film nav-options\"></i>Media</a>",
		rightContact: "<a href=\"contact.html\"><i class=\"fa-solid fa-envelope nav-options\"></i>Contact</a>",
		langChange: "<button type=\"button\" class=\"lang-change btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#language\">Change Language</button>",
		modalTitle: "Choose a language",
	},
	zh: {
		headerTitle: "傑出女性科學家",
		lSideNavSocial: "社群媒體",
		lSideNavContact: "聯繫資訊",
		rightHome: "<a href=\"index.html\"><i class=\"fa-solid fa-house nav-options\"></i>首頁</a>",
		rightLife: "<a href=\"life.html\"><i class=\"fa-solid fa-address-card nav-options\"></i>生平</a>",
		rightDedictation: "<a href=\"dedication.html\"><i class=\"fa-solid fa-award nav-options\"></i>貢獻</a>",
		rightMedia: "<a href=\"media.html\"><i class=\"fa-solid fa-photo-film nav-options\"></i>媒體</a>",
		rightContact: "<a href=\"contact.html\"><i class=\"fa-solid fa-envelope nav-options\"></i>聯絡資訊</a>",
		langChange: "<button type=\"button\" class=\"lang-change btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#language\">改變使用語言</button>",
		modalTitle: "請選擇語言",
	}
};

function setLanguage(lang) {    
	document.getElementById('header-title').innerHTML = translations[lang].headerTitle;
	document.getElementById('l-side-nav-social').innerHTML = translations[lang].lSideNavSocial;
	document.getElementById('l-side-nav-contact').innerHTML = translations[lang].lSideNavContact;
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