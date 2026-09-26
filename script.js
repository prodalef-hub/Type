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
    description:
      "سلیقه‌ات بیشتر سمت جزئیات مرتب، ظاهر حساب‌شده و چیزهایی می‌رود که لازم نیست برای جلب توجه داد بزنند.",
    traits:[
      "مرتب",
      "با‌جزئیات",
      "با‌ثبات",
      "سلیقه‌محور"
    ]
  },

  street:{
    name:"THE FREE SPIRIT",
    description:
      "برای تو راحتی و آزادی فقط راحتی نیست؛ بخشی از هویت است. استایلی را می‌پسندی که شخصیت داشته باشد.",
    traits:[
      "آزاد",
      "خودجوش",
      "راحت",
      "جسور"
    ]
  },

  minimal:{
    name:"THE MINIMALIST",
    description:
      "زیادی شلوغت نمی‌کند. هماهنگی، سادگی و انتخاب دقیق برایت از انباشتن جزئیات مهم‌تر است.",
    traits:[
      "ساده",
      "دقیق",
      "آرام",
      "تمیز"
    ]
  },

  unique:{
    name:"THE ORIGINAL",
    description:
      "اگر چیزی بیش از حد معمولی باشد احتمالاً حوصله‌ات را سر می‌برد. تفاوت و خلاقیت برایت مهم است.",
    traits:[
      "خاص",
      "خلاق",
      "مستقل",
      "جسور"
    ]
  }

};


/* =========================================================
   PERSONALITY PROFILES
========================================================= */

const personalityProfiles = {

  calm:{
    name:"THE OBSERVER",
    description:
      "پاسخ‌هایت بیشتر به سمت مشاهده، فکر کردن قبل از واکنش و توجه به لایه‌های پشت اتفاق‌ها می‌رود.",
    traits:[
      "مشاهده‌گر",
      "متفکر",
      "خونسرد"
    ]
  },

  social:{
    name:"THE CONNECTOR",
    description:
      "از تعامل با آدم‌ها انرژی می‌گیری و ارتباط برایت بخش مهمی از تجربه زندگی است.",
    traits:[
      "اجتماعی",
      "ارتباط‌گیر",
      "گرم"
    ]
  },

  deep:{
    name:"THE DEEP THINKER",
    description:
      "جواب‌هایت نشانه‌هایی از تحلیل‌گری و علاقه به معنی پشت اتفاق‌ها دارد.",
    traits:[
      "تحلیل‌گر",
      "عمیق",
      "کنجکاو"
    ]
  },

  artistic:{
    name:"THE CREATOR",
    description:
      "ذهن تو تمایل دارد تجربه‌ها را به ایده، تصویر، نوشته یا چیز تازه‌ای تبدیل کند.",
    traits:[
      "خلاق",
      "تصویری",
      "ایده‌پرداز"
    ]
  },

  energy:{
    name:"THE SPARK",
    description:
      "در جواب‌هایت انرژی، حرکت و واکنش سریع‌تر دیده می‌شود.",
    traits:[
      "پرانرژی",
      "سریع",
      "خودجوش"
    ]
  },

  bold:{
    name:"THE BOLD MIND",
    description:
      "جواب‌هایت بیشتر به سمت استقلال، جسارت و انتخاب چیزی می‌رود که واقعاً خودت می‌خواهی.",
    traits:[
      "مستقل",
      "جسور",
      "قاطع"
    ]
  }

};


/* =========================================================
   CELEBRITIES
========================================================= */

const maleCelebrities = [

  {
    name:"پارسا پیروزفر",
    description:
      "یک match در سمت vibe کلاسیک، آرام و هنری.",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Parsa%20Pirouzfar.jpg",
    source:
      "https://commons.wikimedia.org/wiki/File:Parsa_Pirouzfar.jpg",
    tags:[
      "classic",
      "calm",
      "artistic",
      "minimal",
      "deep"
    ]
  },

  {
    name:"نوید محمدزاده",
    description:
      "یک match در سمت vibe جسور، متفاوت و پرانرژی.",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Navid%20Mohammadzadeh%201398111103001195198537874.jpg",
    source:
      "https://commons.wikimedia.org/wiki/",
    tags:[
      "bold",
      "street",
      "energy",
      "unique",
      "artistic"
    ]
  },

  {
    name:"هوتن شکیبا",
    description:
      "یک match در سمت vibe خلاق، اجتماعی و خودجوش.",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hootan%20Shakiba%202022.jpeg",
    source:
      "https://commons.wikimedia.org/wiki/Category:Hootan_Shakiba",
    tags:[
      "funny",
      "social",
      "artistic",
      "energy",
      "unique"
    ]
  }

];


const femaleCelebrities = [

  {
    name:"ترانه علیدوستی",
    description:
      "یک match در سمت vibe آرام، عمیق و مینیمال.",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Taraneh%20Alidoosti%20-%20Istanbul.jpg",
    source:
      "https://commons.wikimedia.org/wiki/File:Taraneh_Alidoosti_-_Istanbul.jpg",
    tags:[
      "classic",
      "calm",
      "deep",
      "minimal",
      "artistic"
    ]
  },

  {
    name:"الناز شاکردوست",
    description:
      "یک match در سمت vibe جسور، متفاوت و پرانرژی.",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Elnaz%20Shakerdoost%202018%20Cropped.jpg",
    source:
      "https://commons.wikimedia.org/wiki/",
    tags:[
      "bold",
      "unique",
      "energy",
      "classic",
      "artistic"
    ]
  },

  {
    name:"پریناز ایزدیار",
    description:
      "یک match در سمت vibe کلاسیک، هنری و متعادل.",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Parinaz%20Izadyar%202019.jpg",
    source:
      "https://commons.wikimedia.org/wiki/",
    tags:[
      "classic",
      "minimal",
      "calm",
      "artistic",
      "clean"
    ]
  }

];


/* =========================================================
   STATE
========================================================= */

const state = {

  name:"",
  gender:"",

  currentQuestion:0,

  answers:[],

  type:null,
  personality:null,
  celebrity:null,

  detailedProfile:null,
  privateAnalysis:null

};


/* =========================================================
   DOM HELPERS
========================================================= */

const $ =
  id => document.getElementById(id);


const screens = {

  intro:
    $("introScreen"),

  identity:
    $("identityScreen"),

  quiz:
    $("quizScreen"),

  analysis:
    $("analysisScreen"),

  result:
    $("resultScreen")

};


/* =========================================================
   SCREEN
========================================================= */

function showScreen(screen){

  Object.values(screens).forEach(
    s => {

      if(s){

        s.classList.remove("active");

      }

    }
  );


  if(screen){

    screen.classList.add("active");

  }


  window.scrollTo({

    top:0,

    behavior:"smooth"

  });

}


/* =========================================================
   PERSIAN NUMBERS
========================================================= */

function fa(number){

  return String(number)
    .replace(
      /\d/g,
      d=>"۰۱۲۳۴۵۶۷۸۹"[d]
    );

}


/* =========================================================
   THEME
========================================================= */

function updateTheme(){

  document.body.dataset.theme =
    state.gender === "female"
    ? "female"
    : "male";

}


/* =========================================================
   PROGRESS
========================================================= */

function renderProgress(){

  const current =
    state.currentQuestion + 1;

  const total =
    questions.length;

  const percent =
    Math.round(
      current / total * 100
    );


  $("progressArea")
    .classList.remove("hidden");


  $("progressText")
    .textContent =
    `${fa(current)} از ${fa(total)}`;


  $("progressPercent")
    .textContent =
    `${fa(percent)}٪`;


  $("progressBar")
    .style.width =
    `${percent}%`;


  $("stepCounter")
    .textContent =
    `0${current} / ${String(total).padStart(2,"0")}`;

}


/* =========================================================
   RENDER QUESTION
========================================================= */

function renderQuestion(){

  const question =
    questions[state.currentQuestion];


  $("questionKicker")
    .textContent =
    `QUESTION ${String(
      state.currentQuestion + 1
    ).padStart(2,"0")}`;


  $("questionTitle")
    .textContent =
    question.title;


  $("questionSubtitle")
    .textContent =
    question.subtitle;


  const answers =
    $("answers");


  answers.innerHTML = "";


  question.answers.forEach(
    (item,index)=>{

      const button =
        document.createElement("button");


      button.className =
        "answer";


      button.type =
        "button";


      if(
        state.answers[
          state.currentQuestion
        ] === index
      ){

        button.classList.add(
          "selected"
        );

      }


      const radio =
        document.createElement("span");


      radio.className =
        "radio";


      const text =
        document.createElement("span");


      text.textContent =
        item[0];


      button.append(
        radio,
        text
      );


      button.onclick = ()=>{

        state.answers[
          state.currentQuestion
        ] = index;


        document
          .querySelectorAll(".answer")
          .forEach(
            x =>
              x.classList.remove(
                "selected"
              )
          );


        button.classList.add(
          "selected"
        );


        $("nextBtn").disabled =
          false;

      };


      answers.appendChild(
        button
      );

    }
  );


  $("nextBtn").disabled =
    state.answers[
      state.currentQuestion
    ] == null;


  renderProgress();

}


/* =========================================================
   CALCULATE RAW SCORES
========================================================= */

function calculateScores(){

  const typeScores = {

    classic:0,
    street:0,
    minimal:0,
    unique:0

  };


  const personalityScores = {

    calm:0,
    social:0,
    deep:0,
    artistic:0,
    energy:0,
    bold:0

  };


  state.answers.forEach(
    (answerIndex,qIndex)=>{

      if(
        answerIndex == null ||
        !questions[qIndex]
      ){

        return;

      }


      const tags =
        questions[qIndex]
          .answers[answerIndex][1];


      tags.forEach(
        tag=>{

          if(
            typeScores[tag] !== undefined
          ){

            typeScores[tag]++;

          }


          if(
            personalityScores[tag] !== undefined
          ){

            personalityScores[tag]++;

          }

        }
      );

    }
  );


  return {

    typeScores,
    personalityScores

  };

}


/* =========================================================
   TOP SCORE
========================================================= */

function topScore(scores){

  const sorted =
    Object.entries(scores)
      .sort(
        (a,b)=>b[1]-a[1]
      );


  const winner =
    sorted[0];


  const total =
    Object.values(scores)
      .reduce(
        (a,b)=>a+b,
        0
      ) || 1;


  return {

    key:
      winner[0],

    score:
      winner[1],

    percentage:
      Math.round(
        winner[1] /
        total *
        100
      )

  };

}


/* =========================================================
   DETAILED PROFILE
========================================================= */

function buildDetailedProfile(scores){

  const p =
    scores.personalityScores;

  const t =
    scores.typeScores;


  const totalPersonality =
    Object.values(p)
      .reduce(
        (a,b)=>a+b,
        0
      ) || 1;


  const totalType =
    Object.values(t)
      .reduce(
        (a,b)=>a+b,
        0
      ) || 1;


  const pct =
    (value,total) =>
      Math.round(
        value / total * 100
      );


  const profile = {

    classic:
      pct(t.classic,totalType),

    street:
      pct(t.street,totalType),

    minimal:
      pct(t.minimal,totalType),

    unique:
      pct(t.unique,totalType),


    calm:
      pct(p.calm,totalPersonality),

    social:
      pct(p.social,totalPersonality),

    deep:
      pct(p.deep,totalPersonality),

    artistic:
      pct(p.artistic,totalPersonality),

    energy:
      pct(p.energy,totalPersonality),

    bold:
      pct(p.bold,totalPersonality)

  };


  /*
    شاخص‌های استنباطی.
    این‌ها تشخیص روان‌شناختی نیستند.
    صرفاً برداشت آماری از پاسخ‌های همین تست‌اند.
  */


  profile.independence =
    Math.round(
      (
        profile.bold * 0.60 +
        profile.unique * 0.40
      )
    );


  profile.socialSelectivity =
    Math.round(
      (
        profile.calm * 0.45 +
        profile.social * 0.35 +
        profile.deep * 0.20
      )
    );


  profile.creativity =
    Math.round(
      (
        profile.artistic * 0.55 +
        profile.unique * 0.45
      )
    );


  profile.depth =
    Math.round(
      (
        profile.deep * 0.65 +
        profile.calm * 0.35
      )
    );


  profile.spontaneity =
    Math.round(
      (
        profile.energy * 0.60 +
        profile.bold * 0.25 +
        profile.street * 0.15
      )
    );


  profile.structure =
    Math.round(
      (
        profile.classic * 0.50 +
        profile.minimal * 0.50
      )
    );


  return profile;

}


/* =========================================================
   PRIVATE PERSONALITY ANALYSIS
========================================================= */

function buildPrivateAnalysis(profile){

  const observations = [];

  const contradictions = [];


  /* ---------- STYLE ---------- */

  if(profile.unique >= 65){

    observations.push(
      "نیاز به متفاوت‌بودن در انتخاب‌ها بالاست و انتخاب کاملاً معمولی احتمالاً خیلی زود برای این فرد جذابیتش را از دست می‌دهد."
    );

  }

  else if(profile.minimal >= 65){

    observations.push(
      "بیشتر از نمایش زیاد، روی انتخاب دقیق و هماهنگ حساب می‌کند و احتمالاً شلوغی بی‌دلیل سریع خسته‌اش می‌کند."
    );

  }

  else if(profile.classic >= 65){

    observations.push(
      "ظاهر حساب‌شده و مرتب برایش فقط مسئله‌ی ظاهر نیست؛ انتخاب درست، کیفیت و هماهنگی برایش اهمیت دارد."
    );

  }

  else{

    observations.push(
      "سلیقه‌اش کاملاً در یک قالب ثابت نمی‌ماند و بسته به موقعیت می‌تواند بین چند سبک مختلف جابه‌جا شود."
    );

  }


  /* ---------- DEPTH ---------- */

  if(profile.depth >= 70){

    observations.push(
      "پاسخ‌ها نشان می‌دهند قبل از واکنش سریع تمایل دارد معنی و دلیل اتفاق را بفهمد."
    );

  }

  else if(profile.depth <= 40){

    observations.push(
      "در انتخاب‌هایش عمل‌گرایی و واکنش مستقیم بیشتر از تحلیل طولانی دیده می‌شود."
    );

  }

  else{

    observations.push(
      "بین تحلیل‌کردن و واکنش مستقیم تعادل نسبی دارد و کاملاً در یکی از این دو قطب قرار نمی‌گیرد."
    );

  }


  /* ---------- SOCIAL ---------- */

  if(profile.social >= 70){

    observations.push(
      "ارتباط با آدم‌ها برایش اهمیت بالایی دارد و محیط اجتماعی مناسب می‌تواند انرژی زیادی به او بدهد."
    );

  }

  else if(profile.calm >= 70){

    observations.push(
      "با هر کسی سریع صمیمی نمی‌شود و کیفیت ارتباط برایش احتمالاً از تعداد ارتباط‌ها مهم‌تر است."
    );

  }

  else{

    observations.push(
      "رفتار اجتماعی‌اش بیشتر وابسته به محیط و آدم مقابل است و نمی‌شود به‌سادگی او را کاملاً اجتماعی یا منزوی دانست."
    );

  }


  /* ---------- CREATIVITY ---------- */

  if(profile.creativity >= 70){

    observations.push(
      "خلاقیت در انتخاب‌هایش پررنگ است و بیشتر دنبال چیزی است که حس و هویت داشته باشد، نه صرفاً چیزی که رایج است."
    );

  }

  else if(profile.creativity <= 40){

    observations.push(
      "در انتخاب‌ها، کاربرد و هماهنگی بیشتر از متفاوت‌بودن یا بیان خلاقانه اهمیت دارد."
    );

  }


  /* ---------- INDEPENDENCE ---------- */

  if(profile.independence >= 70){

    observations.push(
      "استقلال در انتخاب‌ها بالاست و وقتی احساس کند چیزی به او تحمیل شده، احتمال مقاومتش بیشتر می‌شود."
    );

  }

  else if(profile.independence <= 40){

    observations.push(
      "به نظر می‌رسد نظر و فضای اطراف می‌تواند در انتخاب‌هایش نقش قابل‌توجهی داشته باشد."
    );

  }


  /* ---------- SPONTANEITY ---------- */

  if(profile.spontaneity >= 70){

    observations.push(
      "در موقعیت‌هایی که هیجان و تنوع وجود داشته باشد، تصمیم سریع برایش جذاب‌تر از برنامه‌ریزی طولانی است."
    );

  }

  else if(profile.spontaneity <= 40){

    observations.push(
      "قبل از واردشدن به موقعیت جدید ترجیح می‌دهد بفهمد قرار است با چه چیزی روبه‌رو شود."
    );

  }


  /* ---------- CONTRADICTIONS ---------- */

  if(
    profile.independence >= 65 &&
    profile.social >= 65
  ){

    contradictions.push(
      "استقلال بالا در کنار اجتماعی‌بودن بالا: ممکن است همزمان هم فضای شخصی خودش را بخواهد و هم از توجه و ارتباط با آدم‌های مهم لذت ببرد."
    );

  }


  if(
    profile.unique >= 65 &&
    profile.structure >= 65
  ){

    contradictions.push(
      "خاص‌پسندی در کنار نظم: متفاوت‌بودن را دوست دارد، اما احتمالاً هر تفاو
