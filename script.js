const ANALYTICS_ENDPOINT =
"https://script.google.com/macros/s/AKfycbyeNNDoCh8JL966OgvmIf54iAh0TBPEgDTpZ3WNgG1kX92WkJbAdot_OW-6s2Pw_weOmQ/exec";


/* =========================================================
   QUESTIONS
========================================================= */

const questions = [

{
 title:"اگر قرار باشد استایلت را فقط با یک کلمه تعریف کنی؟",
 subtitle:"اولین چیزی که واقعاً به ذهنت می‌رسد.",
 answers:[
  ["کلاسیک و مرتب",["classic","clean","formal"]],
  ["خیابانی و آزاد",["street","bold","casual"]],
  ["مینیمال و ساده",["minimal","clean","calm"]],
  ["خاص و متفاوت",["unique","artistic","bold"]]
 ]
},

{
 title:"کدام vibe بیشتر جذبت می‌کند؟",
 subtitle:"چیزی که واقعاً دوست داری.",
 answers:[
  ["آرام و عمیق",["calm","deep","mysterious"]],
  ["شوخ و پرانرژی",["funny","social","energy"]],
  ["مرموز و کم‌حرف",["mysterious","deep","calm"]],
  ["هنری و خلاق",["artistic","unique","deep"]]
 ]
},

{
 title:"کدام مدل مو بیشتر vibe مورد علاقه‌ات را دارد؟",
 subtitle:"روی حس کلی تمرکز کن.",
 answers:[
  ["مرتب و کلاسیک",["classic","clean"]],
  ["طبیعی و کمی شلوغ",["street","casual","bold"]],
  ["کوتاه و ساده",["minimal","clean"]],
  ["متفاوت و خاص",["unique","artistic","bold"]]
 ]
},

{
 title:"در لباس، چه چیزی مهم‌تر است؟",
 subtitle:"چیزی که بیشترین تأثیر را روی انتخابت دارد.",
 answers:[
  ["جزئیات و تمیزی",["clean","classic"]],
  ["راحتی و آزادی",["casual","street"]],
  ["هماهنگی و سادگی",["minimal","calm"]],
  ["خاص بودن",["unique","bold"]]
 ]
},

{
 title:"اگر وارد یک جمع ناآشنا شوی...",
 subtitle:"واکنش طبیعی خودت را انتخاب کن.",
 answers:[
  ["اول فضا را می‌سنجم.",["calm","deep"]],
  ["زود با چند نفر گرم می‌گیرم.",["social","energy"]],
  ["با یکی دو نفر حرف می‌زنم.",["calm","social"]],
  ["اگر جالب باشد خودم بحث را راه می‌اندازم.",["energy","bold"]]
 ]
},

{
 title:"یک عصر آزاد داری. انتخابت؟",
 subtitle:"هیچ جواب درست یا غلطی وجود ندارد.",
 answers:[
  ["کافه و موسیقی",["calm","artistic","deep"]],
  ["بیرون رفتن و برنامه ناگهانی",["energy","social"]],
  ["فیلم یا سریال",["calm","minimal"]],
  ["عکاسی، نوشتن یا ساختن چیزی",["artistic","unique"]]
 ]
},

{
 title:"وقتی چیزی واقعاً اذیتت می‌کند...",
 subtitle:"کدام واکنش به تو نزدیک‌تر است؟",
 answers:[
  ["سکوت می‌کنم و تحلیلش می‌کنم.",["deep","calm"]],
  ["همان موقع حرفم را می‌زنم.",["bold","energy"]],
  ["با یک آدم قابل اعتماد حرف می‌زنم.",["social","calm"]],
  ["ازش چیزی خلاقانه می‌سازم.",["artistic","deep"]]
 ]
},

{
 title:"کدام ویژگی در یک آدم بیشتر برایت جذاب است؟",
 subtitle:"نزدیک‌ترین گزینه را انتخاب کن.",
 answers:[
  ["اعتمادبه‌نفس",["bold","formal"]],
  ["شوخ‌طبعی",["funny","energy","social"]],
  ["فهم و عمق فکری",["deep","calm"]],
  ["مهربانی و خلاقیت",["artistic","calm","unique"]]
 ]
},

{
 title:"کدام تصویر بیشتر شبیه سلیقه توست؟",
 subtitle:"فقط vibe را بگیر.",
 answers:[
  ["پیراهن ساده و ساعت کلاسیک",["classic","formal","clean"]],
  ["تیشرت آزاد و شلوار بگ",["street","casual"]],
  ["رنگ‌های خنثی و ساده",["minimal","clean"]],
  ["ترکیبی که کمتر کسی می‌پوشد",["unique","bold"]]
 ]
},

{
 title:"در تصمیم‌های مهم بیشتر به چه چیزی تکیه می‌کنی؟",
 subtitle:"جواب اولت را بده.",
 answers:[
  ["منطق",["deep","calm","minimal"]],
  ["حس لحظه",["energy","bold"]],
  ["ترکیبی از منطق و حس",["calm","social"]],
  ["ایده‌ای کاملاً متفاوت",["unique","artistic","bold"]]
 ]
}

];


/* =========================================================
   TYPE PROFILES
========================================================= */

const typeProfiles = {

 classic:{
  name:"THE CLASSIC",
  description:"سلیقه‌ات بیشتر سمت جزئیات مرتب، ظاهر حساب‌شده و چیزهایی می‌رود که لازم نیست برای جلب توجه داد بزنند.",
  traits:["مرتب","با‌جزئیات","با‌ثبات","سلیقه‌محور"]
 },

 street:{
  name:"THE FREE SPIRIT",
  description:"برای تو راحتی و آزادی فقط راحتی نیست؛ بخشی از هویت است. استایلی را می‌پسندی که شخصیت داشته باشد.",
  traits:["آزاد","خودجوش","راحت","جسور"]
 },

 minimal:{
  name:"THE MINIMALIST",
  description:"زیادی شلوغت نمی‌کند. هماهنگی، سادگی و انتخاب دقیق برایت از انباشتن جزئیات مهم‌تر است.",
  traits:["ساده","دقیق","آرام","تمیز"]
 },

 unique:{
  name:"THE ORIGINAL",
  description:"اگر چیزی بیش از حد معمولی باشد احتمالاً حوصله‌ات را سر می‌برد. تفاوت و خلاقیت برایت مهم است.",
  traits:["خاص","خلاق","مستقل","جسور"]
 }

};


/* =========================================================
   PERSONALITY PROFILES
========================================================= */

const personalityProfiles = {

 calm:{
  name:"THE OBSERVER",
  description:"پاسخ‌هایت بیشتر به سمت مشاهده، فکر کردن قبل از واکنش و توجه به لایه‌های پشت اتفاق‌ها می‌رود.",
  traits:["مشاهده‌گر","متفکر","خونسرد"]
 },

 social:{
  name:"THE CONNECTOR",
  description:"از تعامل با آدم‌ها انرژی می‌گیری و ارتباط برایت بخش مهمی از تجربه زندگی است.",
  traits:["اجتماعی","ارتباط‌گیر","گرم"]
 },

 deep:{
  name:"THE DEEP THINKER",
  description:"جواب‌هایت نشانه‌هایی از تحلیل‌گری و علاقه به معنی پشت اتفاق‌ها دارد.",
  traits:["تحلیل‌گر","عمیق","کنجکاو"]
 },

 artistic:{
  name:"THE CREATOR",
  description:"ذهن تو تمایل دارد تجربه‌ها را به ایده، تصویر، نوشته یا چیز تازه‌ای تبدیل کند.",
  traits:["خلاق","تصویری","ایده‌پرداز"]
 },

 energy:{
  name:"THE SPARK",
  description:"در جواب‌هایت انرژی، حرکت و واکنش سریع‌تر دیده می‌شود.",
  traits:["پرانرژی","سریع","خودجوش"]
 },

 bold:{
  name:"THE BOLD MIND",
  description:"جواب‌هایت بیشتر به سمت استقلال، جسارت و انتخاب چیزی می‌رود که واقعاً خودت می‌خواهی.",
  traits:["مستقل","جسور","قاطع"]
 }

};


/* =========================================================
   50 FOREIGN CELEBRITIES
   25 MALE + 25 FEMALE
========================================================= */

const maleCelebrities = [

{
 name:"Timothée Chalamet",
 description:"یک match در سمت vibe هنری، متفاوت و آرام.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Timothee_Chalamet_Cannes_2018.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Timoth%C3%A9e_Chalamet",
 tags:["artistic","unique","calm","minimal","deep"]
},

{
 name:"Tom Holland",
 description:"یک match در سمت vibe اجتماعی، شوخ و پرانرژی.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Tom_Holland_by_Gage_Skidmore.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Tom_Holland",
 tags:["social","funny","energy","casual","bold"]
},

{
 name:"Ryan Gosling",
 description:"یک match در سمت vibe کلاسیک، آرام و مینیمال.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Ryan_Gosling_Cannes_2011.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Ryan_Gosling",
 tags:["classic","calm","minimal","deep","clean"]
},

{
 name:"Ryan Reynolds",
 description:"یک match در سمت vibe شوخ، اجتماعی و مطمئن.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Ryan_Reynolds_2018.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Ryan_Reynolds",
 tags:["funny","social","energy","bold","classic"]
},

{
 name:"Henry Cavill",
 description:"یک match در سمت vibe کلاسیک، مرتب و بااعتمادبه‌نفس.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Henry_Cavill_by_Gage_Skidmore_2.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Henry_Cavill",
 tags:["classic","formal","clean","bold","calm"]
},

{
 name:"Robert Pattinson",
 description:"یک match در سمت vibe مرموز، هنری و متفاوت.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Robert_Pattinson_Cannes_2014.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Robert_Pattinson",
 tags:["mysterious","deep","artistic","unique","calm"]
},

{
 name:"Cillian Murphy",
 description:"یک match در سمت vibe عمیق، آرام و مرموز.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Cillian_Murphy_Cannes_2017.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Cillian_Murphy",
 tags:["deep","calm","mysterious","classic","minimal"]
},

{
 name:"Tom Hardy",
 description:"یک match در سمت vibe جسور، خاص و قدرتمند.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Tom_Hardy_by_Gage_Skidmore.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Tom_Hardy",
 tags:["bold","unique","street","energy","classic"]
},

{
 name:"Keanu Reeves",
 description:"یک match در سمت vibe آرام، ساده و عمیق.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Keanu_Reeves_2019.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Keanu_Reeves",
 tags:["calm","deep","minimal","classic","artistic"]
},

{
 name:"Leonardo DiCaprio",
 description:"یک match در سمت vibe کلاسیک، عمیق و متعادل.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Leonardo_DiCaprio_Cannes_2019.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Leonardo_DiCaprio",
 tags:["classic","deep","calm","formal","clean"]
},

{
 name:"Brad Pitt",
 description:"یک match در سمت vibe کلاسیک، آزاد و مطمئن.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Brad_Pitt_2019.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Brad_Pitt",
 tags:["classic","bold","casual","clean","calm"]
},

{
 name:"Johnny Depp",
 description:"یک match در سمت vibe هنری، متفاوت و مستقل.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Johnny_Depp_2011.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Johnny_Depp",
 tags:["artistic","unique","bold","street","deep"]
},

{
 name:"Joaquin Phoenix",
 description:"یک match در سمت vibe عمیق، هنری و متفاوت.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Joaquin_Phoenix_2018.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Joaquin_Phoenix",
 tags:["deep","artistic","unique","mysterious","calm"]
},

{
 name:"Andrew Garfield",
 description:"یک match در سمت vibe هنری، اجتماعی و آرام.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Andrew_Garfield_2018.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Andrew_Garfield",
 tags:["artistic","social","calm","funny","deep"]
},

{
 name:"Oscar Isaac",
 description:"یک match در سمت vibe کلاسیک، هنری و عمیق.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Oscar_Isaac_Cannes_2018.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Oscar_Isaac",
 tags:["classic","artistic","deep","bold","clean"]
},

{
 name:"Pedro Pascal",
 description:"یک match در سمت vibe گرم، اجتماعی و خودجوش.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Pedro_Pascal_2017.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Pedro_Pascal",
 tags:["social","funny","energy","calm","casual"]
},

{
 name:"Dev Patel",
 description:"یک match در سمت vibe آرام، هنری و متفاوت.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Dev_Patel_2016.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Dev_Patel",
 tags:["artistic","calm","deep","unique","classic"]
},

{
 name:"Michael B. Jordan",
 description:"یک match در سمت vibe جسور، پرانرژی و مرتب.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Michael_B._Jordan_2018.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Michael_B._Jordan",
 tags:["bold","energy","classic","clean","social"]
},

{
 name:"Idris Elba",
 description:"یک match در سمت vibe کلاسیک، قدرتمند و مطمئن.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Idris_Elba_2014.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Idris_Elba",
 tags:["classic","bold","formal","clean","deep"]
},

{
 name:"Daniel Craig",
 description:"یک match در سمت vibe مینیمال، کلاسیک و قاطع.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Daniel_Craig_2015.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Daniel_Craig",
 tags:["classic","minimal","bold","clean","calm"]
},

{
 name:"Benedict Cumberbatch",
 description:"یک match در سمت vibe عمیق، کلاسیک و متفکر.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Benedict_Cumberbatch_2015.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Benedict_Cumberbatch",
 tags:["deep","classic","calm","formal","artistic"]
},

{
 name:"Rami Malek",
 description:"یک match در سمت vibe خاص، مرموز و متفاوت.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Rami_Malek_2015.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Rami_Malek",
 tags:["unique","mysterious","artistic","deep","minimal"]
},

{
 name:"Kit Harington",
 description:"یک match در سمت vibe کلاسیک، آرام و کمی مرموز.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Kit_Harington_2017.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Kit_Harington",
 tags:["classic","calm","mysterious","deep","clean"]
},

{
 name:"Alexander Skarsgård",
 description:"یک match در سمت vibe مینیمال، کلاسیک و جسور.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Alexander_Skarsgard_2016.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Alexander_Skarsg%C3%A5rd",
 tags:["minimal","classic","bold","calm","clean"]
},

{
 name:"Mads Mikkelsen",
 description:"یک match در سمت vibe مرموز، کلاسیک و عمیق.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Mads_Mikkelsen_Cannes_2013.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Mads_Mikkelsen",
 tags:["mysterious","classic","deep","minimal","bold"]
}

];


const femaleCelebrities = [

{
 name:"Zendaya",
 description:"یک match در سمت vibe خاص، مدرن و خلاق.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Zendaya_2019.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Zendaya",
 tags:["unique","artistic","classic","bold","clean"]
},

{
 name:"Emma Stone",
 description:"یک match در سمت vibe اجتماعی، شوخ و هنری.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Emma_Stone_2018.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Emma_Stone",
 tags:["funny","social","artistic","energy","classic"]
},

{
 name:"Anya Taylor-Joy",
 description:"یک match در سمت vibe خاص، مرموز و متفاوت.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Anya_Taylor-Joy_Cannes_2024.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Anya_Taylor-Joy",
 tags:["unique","mysterious","artistic","bold","classic"]
},

{
 name:"Florence Pugh",
 description:"یک match در سمت vibe جسور، هنری و مستقل.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Florence_Pugh_2022.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Florence_Pugh",
 tags:["bold","artistic","unique","energy","casual"]
},

{
 name:"Margot Robbie",
 description:"یک match در سمت vibe کلاسیک، اجتماعی و پرانرژی.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Margot_Robbie_2018.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Margot_Robbie",
 tags:["classic","social","energy","clean","bold"]
},

{
 name:"Ana de Armas",
 description:"یک match در سمت vibe کلاسیک، آرام و هنری.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Ana_de_Armas_Cannes_2018.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Ana_de_Armas",
 tags:["classic","calm","artistic","clean","deep"]
},

{
 name:"Emma Watson",
 description:"یک match در سمت vibe مینیمال، آرام و عمیق.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Emma_Watson_2013.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Emma_Watson",
 tags:["minimal","classic","calm","deep","clean"]
},

{
 name:"Keira Knightley",
 description:"یک match در سمت vibe کلاسیک، هنری و آرام.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Keira_Knightley_2011.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Keira_Knightley",
 tags:["classic","artistic","calm","deep","clean"]
},

{
 name:"Natalie Portman",
 description:"یک match در سمت vibe عمیق، کلاسیک و متفکر.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Natalie_Portman_Cannes_2015.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Natalie_Portman",
 tags:["deep","classic","calm","minimal","artistic"]
},

{
 name:"Anne Hathaway",
 description:"یک match در سمت vibe کلاسیک، اجتماعی و متعادل.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Anne_Hathaway_Cannes_2015.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Anne_Hathaway",
 tags:["classic","social","clean","artistic","energy"]
},

{
 name:"Dakota Johnson",
 description:"یک match در سمت vibe مینیمال، آرام و مرموز.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Dakota_Johnson_2018.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Dakota_Johnson",
 tags:["minimal","calm","mysterious","classic","deep"]
},

{
 name:"Saoirse Ronan",
 description:"یک match در سمت vibe هنری، آرام و عمیق.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Saoirse_Ronan_2018.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Saoirse_Ronan",
 tags:["artistic","deep","calm","minimal","unique"]
},

{
 name:"Jenna Ortega",
 description:"یک match در سمت vibe مرموز، متفاوت و جسور.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Jenna_Ortega_2022.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Jenna_Ortega",
 tags:["mysterious","unique","bold","artistic"]
},

{
 name:"Sydney Sweeney",
 description:"یک match در سمت vibe اجتماعی، پرانرژی و مدرن.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Sydney_Sweeney_2024.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Sydney_Sweeney",
 tags:["social","energy","classic","bold","clean"]
},

{
 name:"Margaret Qualley",
 description:"یک match در سمت vibe هنری، خاص و طبیعی.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Margaret_Qualley_2019.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Margaret_Qualley",
 tags:["artistic","unique","calm","casual","deep"]
},

{
 name:"Daisy Edgar-Jones",
 description:"یک match در سمت vibe آرام، کلاسیک و هنری.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Daisy_Edgar-Jones_2022.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Daisy_Edgar-Jones",
 tags:["calm","classic","artistic","minimal","deep"]
},

{
 name:"Gal Gadot",
 description:"یک match در سمت vibe کلاسیک، جسور و مطمئن.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Gal_Gadot_2018.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Gal_Gadot",
 tags:["classic","bold","clean","energy","formal"]
},

{
 name:"Scarlett Johansson",
 description:"یک match در سمت vibe کلاسیک، جسور و متعادل.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Scarlett_Johansson_2019.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Scarlett_Johansson",
 tags:["classic","bold","clean","calm","social"]
},

{
 name:"Jennifer Lawrence",
 description:"یک match در سمت vibe شوخ، اجتماعی و خودجوش.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Jennifer_Lawrence_2016.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Jennifer_Lawrence",
 tags:["funny","social","energy","casual","bold"]
},

{
 name:"Kristen Stewart",
 description:"یک match در سمت vibe متفاوت، مستقل و مینیمال.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Kristen_Stewart_Cannes_2016.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Kristen_Stewart",
 tags:["unique","minimal","bold","artistic","calm"]
},

{
 name:"Rachel McAdams",
 description:"یک match در سمت vibe کلاسیک، گرم و اجتماعی.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Rachel_McAdams_2016.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Rachel_McAdams",
 tags:["classic","social","calm","clean","funny"]
},

{
 name:"Emily Blunt",
 description:"یک match در سمت vibe کلاسیک، آرام و مطمئن.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Emily_Blunt_2018.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Emily_Blunt",
 tags:["classic","calm","clean","bold","deep"]
},

{
 name:"Rosamund Pike",
 description:"یک match در سمت vibe کلاسیک، مرموز و عمیق.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Rosamund_Pike_Cannes_2012.jpg",
 source:"https://commons.wikimedia.org/wiki/Category:Rosamund_Pike",
 tags:["classic","mysterious","deep","formal","clean"]
},

{
 name:"Tilda Swinton",
 des
