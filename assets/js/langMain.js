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
		mediaH1: "Media Library",
		mediaVideoTitle1:"Fei-Fei Li’s advice to young readers",
		mediaVideoTitle2:"Fei-Fei Li's Story",
		mediaVideoTitle3: "Fei-Fei Li's Open Class",
		aboutDiv1H2:"Motivation for creating the website",
		aboutDiv1P1Strong:"To promote scientific achievements:",
		aboutDiv1P1:"To present Fei-Fei Li's research results and contributions to a wider audience in order to increase awareness and understanding of scientific research.",
		aboutDiv1P2Strong:"Promote gender equality:",
		aboutDiv1P2:"By showcasing the success stories of women in science, to promote social attention and action on gender equality and reduce gender bias and discrimination.",
		aboutDiv2H2:"Website Objectives",
		aboutDiv2P1Strong:"To effectively enable visitors to learn about Fei-Fei Li's life and her contributions.",
		aboutDiv2P2Strong:"To present Fei-Fei Li's career and achievements",
		aboutDiv2P2:"In order to encourage young women to pursue their scientific dreams while providing them with role models and inspiration.",
		aboutDiv3H2:"Project Team Members",
		aboutDiv3P:"LAI ZONGYUE  -  Leader <br> DU RUILIN <br> WANG YUXIN <br> HUANG YUJUN",
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
		mediaH1:'媒體庫',
		mediaVideoTitle1:'李飛飛對青年讀者的建議',
		mediaVideoTitle2:"李飛飛的故事",
		mediaVideoTitle3: "李飛飛的公開課",
		aboutDiv1H2:"創建網站的動機",
		aboutDiv1P1Strong:"為了促進科學成果：",
		aboutDiv1P1:"向更廣泛的觀眾展示費的研究成果和貢獻，以提高人們對科學研究的認識和理解。",
		aboutDiv1P2Strong:"促進兩性平等：",
		aboutDiv1P2:"通過展示婦女在科學領域的成功故事，促進社會對性別平等的關注和行動，减少性別偏見和歧視。",
		aboutDiv2H2:"網站目標",
		aboutDiv2P1Strong:"有效地讓遊客瞭解李飛飛的生平和貢獻。",
		aboutDiv2P2Strong:"介紹費的職業生涯和成就",
		aboutDiv2P2:"為了鼓勵年輕女性追求她們的科學夢想，同時為她們提供榜樣和靈感。",
		aboutDiv3H2:"項目團隊成員",
		aboutDiv3P:"赖宗岳  -  组长 <br> 杜睿霖 <br> 王雨馨 <br> 黃伃君",
	}
};

function setLanguage(lang) {
	document.getElementById('home-title').innerHTML = translations[lang].homeTitle;
	document.getElementById('intro-title').innerHTML = translations[lang].introTitle;
	document.getElementById('intro-description').innerHTML = translations[lang].introDescription;
	document.getElementById('header-title').innerHTML = translations[lang].headerTitle;
	document.getElementById('l-side-nav-home').innerHTML = translations[lang].lSideNavHome;
	document.getElementById('l-side-nav-intro').innerHTML = translations[lang].lSideNavIntro;
	document.getElementById('l-side-nav-media').innerHTML = translations[lang].lSideNavMedia;
	document.getElementById('l-side-nav-about').innerHTML = translations[lang].lSideNavAbout;
	document.getElementById('saying-1').innerHTML = translations[lang].saying1;
	document.getElementById('saying-2').innerHTML = translations[lang].saying2;
	document.getElementById('author').innerHTML = translations[lang].author;
	document.getElementById('right-home').innerHTML = translations[lang].rightHome;
	document.getElementById('right-life').innerHTML = translations[lang].rightLife;
	document.getElementById('right-dedication').innerHTML = translations[lang].rightDedictation;
	document.getElementById('right-contact').innerHTML = translations[lang].rightContact;
	document.getElementById('lang-change').innerHTML = translations[lang].langChange;
	document.getElementById('modal-title').innerHTML = translations[lang].modalTitle;
	document.getElementById('mediah1').innerHTML = translations[lang].mediaH1;
	document.getElementById('carousel__caption1').innerHTML = translations[lang].mediaVideoTitle1;
	document.getElementById('carousel__caption2').innerHTML = translations[lang].mediaVideoTitle2;
	document.getElementById('carousel__caption3').innerHTML = translations[lang].mediaVideoTitle3;
	document.getElementById('aboutDiv1H2').innerHTML = translations[lang].aboutDiv1H2;
	document.getElementById('aboutDiv1P1Strong').innerHTML = translations[lang].aboutDiv1P1Strong;
	document.getElementById('aboutDiv1P1').innerHTML = translations[lang].aboutDiv1P1;
	document.getElementById('aboutDiv1P2Strong').innerHTML = translations[lang].aboutDiv1P2Strong;
	document.getElementById('aboutDiv1P2').innerHTML = translations[lang].aboutDiv1P2;
	document.getElementById('aboutDiv2H2').innerHTML = translations[lang].aboutDiv2H2;
	document.getElementById('aboutDiv2P1Strong').innerHTML = translations[lang].aboutDiv2P1Strong;
	document.getElementById('aboutDiv2P2Strong').innerHTML = translations[lang].aboutDiv2P2Strong;
	document.getElementById('aboutDiv2P2').innerHTML = translations[lang].aboutDiv2P2;
	document.getElementById('aboutDiv3H2').innerHTML = translations[lang].aboutDiv3H2;
	document.getElementById('aboutDiv3P').innerHTML = translations[lang].aboutDiv3P;
}


// 檢查localStorage中的語言設置
const savedLang = localStorage.getItem('language') || 'en'; // 默認語言為英文
setLanguage(savedLang);
