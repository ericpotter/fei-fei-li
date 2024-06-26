// lang change
const translations = {
	en: {
        headerTitle: "Female Scientist",
		lSideNavLife: "Life",
		rightHome: "<a href=\"index.html\"><i class=\"fa-solid fa-house nav-options\"></i>Home</a>",
		rightLife: "<a href=\"life.html\"><i class=\"fa-solid fa-address-card nav-options\"></i>Life</a>",
		rightDedictation: "<a href=\"dedication.html\"><i class=\"fa-solid fa-award nav-options\"></i>Dedication</a>",
		rightContact: "<a href=\"contact.html\"><i class=\"fa-solid fa-envelope nav-options\"></i>Contact</a>",
		langChange: "<button type=\"button\" class=\"lang-change btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#language\">Change Language</button>",
		modalTitle: "Choose a language",
		timelineFollowTitle: "LIFE STORY OF HER",
		timelineContentOne: "Li Feifei was born in Beijing, China in 1976 and grew up in Chengdu,Sichuan. At the age of 15, she relocated with her family to New Jersey, USA.",
		timelineChildhood: "Childhood",
		timelineContentTwo: "In the first two years after arriving in the United States,Feifei's family was not wealthy, so she worked in various Chinese restaurants in Chinatown,washing dishes, serving dishes, cleaning, and also worked part-time as a house cleaner. Studying and working took up almost all of her time. During the hardest period, it was said that she could only sleep 4 hours a day. Later, my parents borrowed money from relatives and friends to open a dry cleaning shop.",
		timelineHighSchool: "High school",
		timelineContentThree: "Upon arriving in the United States, Li Feifei began learning English from scratch. However, she graduated from Parsippany High School in New Jersey with the sixth-highest GPA in her class. Her outstanding academic performance earned her a scholarship to Princeton University,where she pursued her undergraduate studies. During weekends, she frequently returned home to assist with the family's dry cleaning business. Throughout her college years, she also provided remote assistance to her parents and the customers of the dry cleaning store.",
		timelineContentFour: "She earned a Bachelor of Science degree with honors in Physics from Princeton University. Following her graduation, she utilized a scholarship to conduct research on traditional Tibetan medicine in Tibet.",
		timelineContentFive: "She pursued her graduate studies at the California Institute of Technology under the supervision of Professor Pietro Perona and Professor Christof Koch, focusing on the intersection of neuroscience and computer science.",
		timelineContentSix: "She obtained a Master of Science degree in Electrical Engineering, followedby a Ph.D. in the same field in 2005. Her doctoral dissertation was titled.Visual Recognition:Computational Models and Human.",
		timelineContentSeven: "She served as an Assistant Professor in the Department of Electrical and Computer Engineering at the University of Illinois and the Department of Computer Science at",
		timelineContentEight: "She held various teaching positions at Stanford University, including Assistant Professor,Associate Professor, and Professor in the Department of Computer Science, becoming the inaugural holder of the Redwood Chair in the Human-Centered AI Institute (HAI) in 2019.",
		timelineContentNine: "She served as the Director of the Stanford Artificial Intelligence Laboratory.",
		timelineContentTen: "She joined the China Center team of Google Cloud AI/ML.",
		timelineContentEleven: "She served as Vice President at Google, also holding the position of Chief Scientist at Google Cloud AI/ML.",
		timelineContentTwelve: "She returned to Stanford University as a faculty member and assumed the role of Director of the Stanford Human-Centered Artificial Intelligence Institute (HAI).",
		timelineContentThirteen: "She was elected as a member of the National Academy of Engineering. In May, she joined Twitter's board of directors as an independent director, and in October, she was elected as a member of the National Academy of Medicine.",
		timelineContentFourteen: "She was elected as a member of the American Academy of Arts and Sciences.",
		timelineContentFifteen: "She was named a 2022 IEEE Fellow.",
		timelineContentSixteen: "Due to Twitter's acquisition by Elon Musk, Li Feifei stepped down from her role as an independent director at Twitter."
	},
	zh: {
        headerTitle: "傑出女性科學家",
		lSideNavLife: "生平",
		rightHome: "<a href=\"index.html\"><i class=\"fa-solid fa-house nav-options\"></i>首頁</a>",
		rightLife: "<a href=\"life.html\"><i class=\"fa-solid fa-address-card nav-options\"></i>生平</a>",
		rightDedictation: "<a href=\"dedication.html\"><i class=\"fa-solid fa-award nav-options\"></i>貢獻</a>",
		rightContact: "<a href=\"contact.html\"><i class=\"fa-solid fa-envelope nav-options\"></i>聯絡資訊</a>",
		langChange: "<button type=\"button\" class=\"lang-change btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#language\">改變使用語言</button>",
		modalTitle: "請選擇語言",
		timelineFollowTitle: "李飛飛的生平",
		timelineContentOne: "李飛飛1976年出生於中國北京，在四川成都長大，15歲時，隨家人移居美國新澤西州。",
		timelineChildhood: "童年",
		timelineContentTwo: "剛到美國的頭兩年，飛飛家庭並不富裕，也因此她曾穿梭在華人街各大中國餐廳、洗碗、端盤子、打掃衛生、亦兼職家庭清潔工。學習和打工幾乎佔據了她所有的時間，最辛苦的期間，據說一天只能睡4個小時。後來父母跟親友借錢，開了一家乾洗店經營。",
		timelineHighSchool: "高中",
		timelineContentThree: "剛到美國時，李飛飛從頭開始學英語，但最終卻於新澤西的帕西帕尼高中以全班第六名的成績畢業。優異的成績使他獲得普林斯頓大學的獎學金，進入該大學學習。每到周末，她多會回家並到家中的乾洗店幫忙，在校期間，也常透過電話幫助父母與乾洗店顧客溝通。",
		timelineContentFour: "1999年取得普林斯頓大學物理學高級榮譽學士學位。畢業後用獎學金前往西藏研究西藏傳統藥物。",
		timelineContentFive: "在加州理工學院攻讀研究生學位，師從Pietro Perona教授和克里斯托夫·科赫教授，研究神經科學和計算機科學交叉學科。",
		timelineContentSix: "2003年獲電氣工程科學碩士學位，2005年獲同一專業的博士學位，論文為「視覺識別：計算模型與人類心理物理學」，並獲得美國國家科學基金會和保羅與黛西新美國人獎學金支持。",
		timelineContentSeven: "2005年8月至2009年6月在伊利諾伊大學電氣與計算機工程系和普林斯頓大學計算機科學系擔任助理教授，兼任心理學系助理教授。",
		timelineContentEight: "2009-2018年在史丹佛大學任教，曾擔任計算機科學系助理教授、副教授和正教授，並於2019年成為史丹佛大學首任終身紅杉講席教授。",
		timelineContentNine: "2013-2018年擔任史丹佛大學人工智慧實驗室主任。",
		timelineContentTen: "2016年加入Google雲端人工智慧暨機器學習的中國中心團隊。",
		timelineContentEleven: "2017-2018年在Google擔任副總裁，兼任Google Cloud AI/ML首席科學家。",
		timelineContentTwelve: "2018年9月返回史丹佛任教，並擔任史丹佛以人為本人工智慧研究院（HAI）院長。",
		timelineContentThirteen: "2020年當選美國國家工程院院士；5月擔任Twitter公司董事會新獨立董事；10月當選美國國家醫學院院士。",
		timelineContentFourteen: "2021年4月22日，當選為美國文理科學院（藝術與科學院）院士",
		timelineContentFifteen: "2021年11月當選2022 IEEE Fellow",
		timelineContentSixteen: "2022年10月27日，因Twitter被埃隆·馬斯克收購，李飛飛不再擔任Twitter公司的獨立董事。",
	}
};

function setLanguage(lang) {
	document.getElementById('header-title').innerHTML = translations[lang].headerTitle;
	document.getElementById('l-side-nav-life').innerHTML = translations[lang].lSideNavLife;
	document.getElementById('right-home').innerHTML = translations[lang].rightHome;
	document.getElementById('right-life').innerHTML = translations[lang].rightLife;
	document.getElementById('right-dedication').innerHTML = translations[lang].rightDedictation;
	document.getElementById('right-contact').innerHTML = translations[lang].rightContact;
	document.getElementById('lang-change').innerHTML = translations[lang].langChange;
	document.getElementById('modal-title').innerHTML = translations[lang].modalTitle;
	document.querySelector('.timeline-item').innerHTML = translations[lang].timelineFollowTitle;
	document.getElementById('timeline-content-one').innerHTML = translations[lang].timelineContentOne;
	document.getElementById('timeline-childhood').innerHTML = translations[lang].timelineChildhood;
	document.getElementById('timeline-content-two').innerHTML = translations[lang].timelineContentTwo;
	document.getElementById('timeline-high-school').innerHTML = translations[lang].timelineHighSchool;
	document.getElementById('timeline-content-three').innerHTML = translations[lang].timelineContentThree;
	document.getElementById('timeline-content-four').innerHTML = translations[lang].timelineContentFour;
	document.getElementById('timeline-content-five').innerHTML = translations[lang].timelineContentFive;
	document.getElementById('timeline-content-six').innerHTML = translations[lang].timelineContentSix;
	document.getElementById('timeline-content-seven').innerHTML = translations[lang].timelineContentSeven;
	document.getElementById('timeline-content-eight').innerHTML = translations[lang].timelineContentEight;
	document.getElementById('timeline-content-nine').innerHTML = translations[lang].timelineContentNine;
	document.getElementById('timeline-content-ten').innerHTML = translations[lang].timelineContentTen;
	document.getElementById('timeline-content-eleven').innerHTML = translations[lang].timelineContentEleven;
	document.getElementById('timeline-content-twelve').innerHTML = translations[lang].timelineContentTwelve;
	document.getElementById('timeline-content-thirteen').innerHTML = translations[lang].timelineContentThirteen;
	document.getElementById('timeline-content-fourteen').innerHTML = translations[lang].timelineContentFourteen;
	document.getElementById('timeline-content-fifteen').innerHTML = translations[lang].timelineContentFifteen;
	document.getElementById('timeline-content-fifteen').innerHTML = translations[lang].timelineContentFifteen; 
	document.getElementById('timeline-content-sixteen').innerHTML = translations[lang].timelineContentSixteen;
}


// 檢查localStorage中的語言設置
const savedLang = localStorage.getItem('language') || 'en'; // 默認語言為英文
setLanguage(savedLang);