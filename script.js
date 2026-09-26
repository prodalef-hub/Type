const ANALYTICS_ENDPOINT =
"https://script.google.com/macros/s/AKfycbyeNNDoCh8JL966OgvmIf54iAh0TBPEgDTpZ3WNgG1kX92WkJbAdot_OW-6s2Pw_weOmQ/exec";


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


const maleCelebrities = [

{
 name:"پارسا پیروزفر",
 description:"یک match در سمت vibe کلاسیک، آرام و هنری.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Parsa%20Pirouzfar.jpg",
 source:"https://commons.wikimedia.org/wiki/File:Parsa_Pirouzfar.jpg",
 tags:["classic","calm","artistic","minimal","deep"]
},

{
 name:"نوید محمدزاده",
 description:"یک match در سمت vibe جسور، متفاوت و پرانرژی.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Navid%20Mohammadzadeh%201398111103001195198537874.jpg",
 source:"https://commons.wikimedia.org/wiki/",
 tags:["bold","street","energy","unique","artistic"]
},

{
 name:"هوتن شکیبا",
 description:"یک match در سمت vibe خلاق، اجتماعی و خودجوش.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Hootan%20Shakiba%202022.jpeg",
 source:"https://commons.wikimedia.org/wiki/Category:Hootan_Shakiba",
 tags:["funny","social","artistic","energy","unique"]
}

];


const femaleCelebrities = [

{
 name:"ترانه علیدوستی",
 description:"یک match در سمت vibe آرام، عمیق و مینیمال.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Taraneh%20Alidoosti%20-%20Istanbul.jpg",
 source:"https://commons.wikimedia.org/wiki/File:Taraneh_Alidoosti_-_Istanbul.jpg",
 tags:["classic","calm","deep","minimal","artistic"]
},

{
 name:"الناز شاکردوست",
 description:"یک match در سمت vibe جسور، متفاوت و پرانرژی.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Elnaz%20Shakerdoost%202018%20Cropped.jpg",
 source:"https://commons.wikimedia.org/wiki/",
 tags:["bold","unique","energy","classic","artistic"]
},

{
 name:"پریناز ایزدیار",
 description:"یک match در سمت vibe کلاسیک، هنری و متعادل.",
 photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Parinaz%20Izadyar%202019.jpg",
 source:"https://commons.wikimedia.org/wiki/",
 tags:["classic","minimal","calm","artistic","clean"]
}

];


const state = {
 name:"",
 gender:"",
 currentQuestion:0,
 answers:[],
 type:null,
 personality:null,
 celebrity:null
};


const $ = id => document.getElementById(id);


const screens = {
 intro:$("introScreen"),
 identity:$("identityScreen"),
 quiz:$("quizScreen"),
 analysis:$("analysisScreen"),
 result:$("resultScreen")
};


function showScreen(screen){

 Object.values(screens).forEach(
   s => s.classList.remove("active")
 );

 screen.classList.add("active");

 window.scrollTo({
   top:0,
   behavior:"smooth"
 });

}


function fa(number){

 return String(number)
   .replace(/\d/g,d=>"۰۱۲۳۴۵۶۷۸۹"[d]);

}


function updateTheme(){

 document.body.dataset.theme =
   state.gender === "female"
   ? "female"
   : "male";

}


function renderProgress(){

 const current =
   state.currentQuestion + 1;

 const total =
   questions.length;

 const percent =
   Math.round(current / total * 100);

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


function renderQuestion(){

 const question =
   questions[state.currentQuestion];

 $("questionKicker")
   .textContent =
   `QUESTION ${String(state.currentQuestion+1).padStart(2,"0")}`;

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

    button.className = "answer";

    button.type = "button";

    if(
      state.answers[state.currentQuestion]
      === index
    ){

      button.classList.add("selected");

    }

    const radio =
      document.createElement("span");

    radio.className = "radio";

    const text =
      document.createElement("span");

    text.textContent = item[0];

    button.append(
      radio,
      text
    );

    button.onclick = ()=>{

      state.answers[state.currentQuestion] =
        index;

      document
        .querySelectorAll(".answer")
        .forEach(
          x=>x.classList.remove("selected")
        );

      button.classList.add("selected");

      $("nextBtn").disabled = false;

    };

    answers.appendChild(button);

   }
 );

 $("nextBtn").disabled =
   state.answers[state.currentQuestion] == null;

 renderProgress();

}


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

   const tags =
     questions[qIndex]
       .answers[answerIndex][1];

   tags.forEach(
    tag=>{

     if(typeScores[tag] !== undefined)
       typeScores[tag]++;

     if(personalityScores[tag] !== undefined)
       personalityScores[tag]++;

    }
   );

  }
 );


 return {
  typeScores,
  personalityScores
 };

}


function topScore(scores){

 const sorted =
   Object.entries(scores)
   .sort((a,b)=>b[1]-a[1]);

 const winner =
   sorted[0];

 const total =
   Object.values(scores)
   .reduce((a,b)=>a+b,0) || 1;

 return {
  key:winner[0],
  score:winner[1],
  percentage:
    Math.round(
      winner[1]/total*100
    )
 };

}


function celebrityMatch(type){

 const scores =
   calculateScores();

 const pool =
   state.gender === "male"
   ? femaleCelebrities
   : maleCelebrities;


 const result =
   pool.map(person=>{

    let score = 0;

    person.tags.forEach(tag=>{

      score +=
        (scores.typeScores[tag] || 0) * 2;

      score +=
        scores.personalityScores[tag] || 0;

    });

    if(
      person.tags.includes(type.key)
    ){

      score += 3;

    }

    return {
      person,
      score
    };

   })
   .sort(
     (a,b)=>b.score-a.score
   )[0];


 const percentage =
   Math.max(
     58,
     Math.min(
       97,
       Math.round(
         result.score / 45 * 100
       )
     )
   );


 return {
   ...result.person,
   percentage
 };

}


function startAnalysis(){

 $("progressArea")
   .classList.add("hidden");

 $("stepCounter")
   .textContent =
   "ANALYSIS";

 showScreen(
   screens.analysis
 );

 const messages = [

  [
   "دارم الگوهای انتخابت رو پیدا می‌کنم...",
   "ظاهر فقط نصف ماجراست."
  ],

  [
   "دارم جواب‌ها رو کنار هم می‌چینم...",
   "هر انتخاب یه تکه از پازله."
  ],

  [
   "تقریباً آماده‌ست...",
   "ببینیم TYPE تو چی میگه."
  ]

 ];

 let i=0;

 $("analysisTitle")
   .textContent =
   messages[0][0];

 $("analysisText")
   .textContent =
   messages[0][1];


 const timer =
   setInterval(()=>{

    i++;

    if(i < messages.length){

     $("analysisTitle")
       .textContent =
       messages[i][0];

     $("analysisText")
       .textContent =
       messages[i][1];

    }

   },700);


 setTimeout(()=>{

  clearInterval(timer);

  generateResult();

 },2400);

}


function generateResult(){

 const scores =
   calculateScores();

 state.type =
   topScore(scores.typeScores);

 state.personality =
   topScore(scores.personalityScores);

 state.celebrity =
   celebrityMatch(state.type);


 const type =
   typeProfiles[state.type.key];

 const personality =
   personalityProfiles[state.personality.key];


 $("resultGreeting")
   .textContent =
   `${state.name}، این شد نتیجه‌ات`;

 $("typeName")
   .textContent =
   type.name;

 $("typeDescription")
   .textContent =
   type.description;

 $("typeScore")
   .textContent =
   state.type.percentage;


 $("personalityName")
   .textContent =
   personality.name;

 $("personalityDescription")
   .textContent =
   personality.description;


 $("traitList").innerHTML =
   personality.traits
   .map(
     x=>`<span class="trait">${x}</span>`
   )
   .join("");


 $("celebrityName")
   .textContent =
   state.celebrity.name;

 $("celebrityDescription")
   .textContent =
   state.celebrity.description;

 $("celebrityMatch")
   .textContent =
   `${state.celebrity.percentage}%`;

 $("photoSource")
   .href =
   state.celebrity.source;


 const image =
   $("celebrityImage");

 image.classList.remove("loaded");

 $("photoFallback")
   .style.display =
   "grid";

 image.src =
   state.celebrity.photo;

 image.alt =
   state.celebrity.name;


 $("summaryText")
   .textContent =
   `ترکیب جواب‌ها بیشتر به ${type.name}
   و ${personality.name} نزدیک شد.
   این نتیجه صرفاً یک برداشت سرگرمی‌محور
   از انتخاب‌های توست و تشخیص علمی شخصیت نیست.`;


 showScreen(
   screens.result
 );


 sendReport();

}


function sendReport(){

 if(!ANALYTICS_ENDPOINT)
   return;


 const report = {

  timestamp:
    new Date().toISOString(),

  name:
    state.name,

  gender:
    state.gender,

  answers:
    state.answers.map(
      (answer,q)=>({
       question:
         questions[q].title,

       answer:
         questions[q]
         .answers[answer][0]
      })
    ),

  type:
    typeProfiles[state.type.key].name,

  typeKey:
    state.type.key,

  typeScore:
    state.type.percentage,

  personality:
    personalityProfiles[
      state.personality.key
    ].name,

  personalityKey:
    state.personality.key,

  celebrity:
    state.celebrity.name,

  matchPercentage:
    state.celebrity.percentage

 };


 const data =
   JSON.stringify(report);


 try{

  if(
    navigator.sendBeacon
  ){

    const blob =
      new Blob(
        [data],
        {
          type:
            "text/plain;charset=utf-8"
        }
      );

    if(
      navigator.sendBeacon(
        ANALYTICS_ENDPOINT,
        blob
      )
    ){

      return;

    }

  }

 }catch(error){}


 fetch(
   ANALYTICS_ENDPOINT,
   {
    method:"POST",
    mode:"no-cors",
    headers:{
      "Content-Type":
        "text/plain;charset=utf-8"
    },
    body:data,
    keepalive:true
   }
 ).catch(()=>{});

}


function reset(){

 state.name="";
 state.gender="";
 state.currentQuestion=0;
 state.answers=[];
 state.type=null;
 state.personality=null;
 state.celebrity=null;

 $("nameInput").value="";

 $("nameCount")
   .textContent="۰/۴۰";

 document
   .querySelectorAll(".gender-choice")
   .forEach(
     x=>x.classList.remove("selected")
   );

 $("identityNextBtn")
   .disabled=true;

 $("progressArea")
   .classList.add("hidden");

 $("stepCounter")
   .textContent="START";

 updateTheme();

 showScreen(
   screens.intro
 );

}


/* EVENTS */


$("startBtn").onclick = ()=>{

 $("stepCounter")
   .textContent="IDENTITY";

 showScreen(
   screens.identity
 );

};


$("nameInput").oninput =
event=>{

 state.name =
   event.target.value;

 $("nameCount")
   .textContent =
   `${fa(state.name.length)}/۴۰`;

 $("identityNextBtn")
   .disabled =
   !state.name.trim() ||
   !state.gender;

};


document
.querySelectorAll(".gender-choice")
.forEach(button=>{

 button.onclick=()=>{

  document
   .querySelectorAll(".gender-choice")
   .forEach(
     x=>x.classList.remove("selected")
   );

  button.classList.add("selected");

  state.gender =
    button.dataset.gender;

  updateTheme();

  $("identityNextBtn")
    .disabled =
    !state.name.trim();

 };

});


$("identityNextBtn").onclick=()=>{

 if(
   !state.name.trim() ||
   !state.gender
 ) return;

 state.currentQuestion=0;

 renderQuestion();

 showScreen(
   screens.quiz
 );

};


$("identityBackBtn").onclick=()=>{

 showScreen(
   screens.intro
 );

 $("stepCounter")
   .textContent="START";

};


$("nextBtn").onclick=()=>{

 if(
   state.answers[state.currentQuestion]
   == null
 ) return;


 if(
   state.currentQuestion <
   questions.length-1
 ){

   state.currentQuestion++;

   renderQuestion();

 }else{

   startAnalysis();

 }

};


$("backBtn").onclick=()=>{

 if(
   state.currentQuestion === 0
 ){

  showScreen(
    screens.identity
  );

  $("progressArea")
    .classList.add("hidden");

  return;

 }

 state.currentQuestion--;

 renderQuestion();

};


$("restartBtn").onclick =
reset;


$("celebrityImage").onload = ()=>{

 $("celebrityImage")
   .classList.add("loaded");

 $("photoFallback")
   .style.display =
   "none";

};


$("celebrityImage").onerror = ()=>{

 $("celebrityImage")
   .classList.remove("loaded");

 $("photoFallback")
   .style.display =
   "grid";

};


updateTheme();
