var currentQuestion = 0;
var answers = {};
var userGender = "";
var userName = "";
var analysisTimer = null;

var questions = [
    {
        id: "style",
        title: "کدام سبک بیشتر به سلیقه تو نزدیک است؟",
        options: [
            { text: "کلاسیک و شیک", value: "classic" },
            { text: "خیابانی و آزاد", value: "street" },
            { text: "مینیمال و ساده", value: "minimal" },
            { text: "خاص و متفاوت", value: "unique" }
        ]
    },

    {
        id: "clothing",
        title: "اگر بخواهی یک استایل انتخاب کنی، کدام را برمی‌داری؟",
        options: [
            { text: "پیراهن و شلوار کلاسیک", value: "formal" },
            { text: "تی‌شرت و شلوار بگ", value: "street" },
            { text: "لباس‌های ساده و تمیز", value: "minimal" },
            { text: "ترکیب‌های عجیب و خاص", value: "unique" }
        ]
    },

    {
        id: "hair",
        title: "کدام مدل مو بیشتر برایت جذاب است؟",
        options: [
            { text: "کوتاه و مرتب", value: "classic" },
            { text: "متوسط و طبیعی", value: "natural" },
            { text: "بلند و خاص", value: "unique" },
            { text: "مدل متفاوت و جسور", value: "street" }
        ]
    },

    {
        id: "vibe",
        title: "بیشتر جذب چه وایبی می‌شوی؟",
        options: [
            { text: "آرام و مرموز", value: "calm" },
            { text: "شوخ و پرانرژی", value: "fun" },
            { text: "هنری و خلاق", value: "artistic" },
            { text: "بااعتمادبه‌نفس و قوی", value: "confident" }
        ]
    },

    {
        id: "social",
        title: "در یک جمع جدید معمولاً چه اتفاقی برایت می‌افتد؟",
        options: [
            { text: "سریع با بقیه صمیمی می‌شوم", value: "social" },
            { text: "اول فضا را بررسی می‌کنم", value: "calm" },
            { text: "با یک نفر راحت‌تر ارتباط می‌گیرم", value: "selective" },
            { text: "خودم معمولاً جمع را راه می‌اندازم", value: "leader" }
        ]
    },

    {
        id: "appearance",
        title: "در ظاهر، کدام ویژگی بیشتر توجهت را جلب می‌کند؟",
        options: [
            { text: "چشم‌ها و نگاه", value: "eyes" },
            { text: "مو و مدل مو", value: "hair" },
            { text: "لبخند", value: "smile" },
            { text: "استایل کلی", value: "style" }
        ]
    },

    {
        id: "personality",
        title: "کدام ویژگی شخصیتی برایت جذاب‌تر است؟",
        options: [
            { text: "مهربان و قابل اعتماد", value: "kind" },
            { text: "باهوش و منطقی", value: "smart" },
            { text: "شوخ و بازیگوش", value: "fun" },
            { text: "عمیق و هنری", value: "artistic" }
        ]
    },

    {
        id: "weekend",
        title: "یک روز آزاد را چطور می‌گذرانی؟",
        options: [
            { text: "بیرون رفتن و گشت‌وگذار", value: "social" },
            { text: "فیلم، موسیقی یا بازی", value: "creative" },
            { text: "تنهایی و استراحت", value: "calm" },
            { text: "انجام یک کار جدید", value: "adventure" }
        ]
    },

    {
        id: "firstImpression",
        title: "اولین چیزی که معمولاً در یک نفر متوجه می‌شوی چیست؟",
        options: [
            { text: "رفتار و طرز صحبت", value: "personality" },
            { text: "چهره و نگاه", value: "appearance" },
            { text: "لباس و استایل", value: "style" },
            { text: "انرژی و حضورش", value: "vibe" }
        ]
    },

    {
        id: "choice",
        title: "اگر مجبور باشی فقط یکی را انتخاب کنی...",
        options: [
            { text: "ظاهر خاص", value: "appearance" },
            { text: "شخصیت جذاب", value: "personality" },
            { text: "استایل بی‌نقص", value: "style" },
            { text: "وایب فراموش‌نشدنی", value: "vibe" }
        ]
    }
];


var maleCelebrities = [
    {
        name: "نوید محمدزاده",
        traits: ["unique", "street", "confident", "artistic"]
    },

    {
        name: "پارسا پیروزفر",
        traits: ["classic", "calm", "minimal", "smart"]
    },

    {
        name: "هوتن شکیبا",
        traits: ["fun", "artistic", "natural", "social"]
    }
];


var femaleCelebrities = [
    {
        name: "ترانه علیدوستی",
        traits: ["classic", "calm", "smart", "artistic"]
    },

    {
        name: "الناز شاکردوست",
        traits: ["unique", "style", "confident", "appearance"]
    },

    {
        name: "پریناز ایزدیار",
        traits: ["classic", "minimal", "natural", "calm"]
    }
];


function getElement(id) {
    return document.getElementById(id);
}


function showScreen(screenId) {
    var screens = document.querySelectorAll(".screen");

    for (var i = 0; i < screens.length; i++) {
        screens[i].classList.remove("active");
    }

    var target = getElement(screenId);

    if (target) {
        target.classList.add("active");
    }
}


function startTest() {
    userName = "";
    userGender = "";
    answers = {};
    currentQuestion = 0;

    var nameInput = getElement("nameInput");

    if (nameInput) {
        nameInput.value = "";
    }

    showScreen("identityScreen");
}


function selectGender(gender) {
    userGender = gender;

    var maleCard = getElement("maleCard");
    var femaleCard = getElement("femaleCard");

    if (maleCard) {
        maleCard.classList.remove("selected");
    }

    if (femaleCard) {
        femaleCard.classList.remove("selected");
    }

    if (gender === "male" && maleCard) {
        maleCard.classList.add("selected");
    }

    if (gender === "female" && femaleCard) {
        femaleCard.classList.add("selected");
    }

    document.body.classList.remove("male-theme");
    document.body.classList.remove("female-theme");

    if (gender === "male") {
        document.body.classList.add("male-theme");
    }

    if (gender === "female") {
        document.body.classList.add("female-theme");
    }
}


function continueFromIdentity() {
    var nameInput = getElement("nameInput");

    if (nameInput) {
        userName = nameInput.value.trim();
    }

    if (userGender === "") {
        alert("اول جنسیتت رو انتخاب کن.");
        return;
    }

    if (userName === "") {
        alert("اسمت رو وارد کن.");
        return;
    }

    currentQuestion = 0;
    answers = {};

    showQuestion();
    showScreen("questionScreen");
}


function showQuestion() {
    var question = questions[currentQuestion];

    if (!question) {
        return;
    }

    var questionTitle = getElement("questionTitle");
    var optionsContainer = getElement("optionsContainer");
    var progressText = getElement("progressText");
    var progressFill = getElement("progressFill");
    var questionNumber = getElement("questionNumber");

    if (questionTitle) {
        questionTitle.textContent = question.title;
    }

    if (progressText) {
        progressText.textContent =
            (currentQuestion + 1) + " / " + questions.length;
    }

    if (questionNumber) {
        questionNumber.textContent =
            currentQuestion + 1;
    }

    if (progressFill) {
        var progress =
            ((currentQuestion + 1) / questions.length) * 100;

        progressFill.style.width = progress + "%";
    }

    if (!optionsContainer) {
        return;
    }

    optionsContainer.innerHTML = "";

    for (var i = 0; i < question.options.length; i++) {
        createOption(
            question.options[i],
            optionsContainer
        );
    }
}


function createOption(option, container) {
    var button = document.createElement("button");

    button.type = "button";
    button.className = "option";
    button.textContent = option.text;

    button.addEventListener("click", function () {
        selectAnswer(option.value);
    });

    container.appendChild(button);
}


function selectAnswer(value) {
    var question = questions[currentQuestion];

    if (!question) {
        return;
    }

    answers[question.id] = value;

    currentQuestion++;

    if (currentQuestion >= questions.length) {
        startAnalysis();
        return;
    }

    showQuestion();
}


function startAnalysis() {
    showScreen("analyzingScreen");

    var analysisText = getElement("analysisText");
    var analysisProgress = getElement("analysisProgress");

    if (analysisText) {
        analysisText.textContent =
            "دارم جواب‌هات رو بررسی می‌کنم...";
    }

    if (analysisProgress) {
        analysisProgress.style.width = "0%";
    }

    var progress = 0;

    if (analysisTimer) {
        clearInterval(analysisTimer);
    }

    analysisTimer = setInterval(function () {

        progress += 10;

        if (analysisProgress) {
            analysisProgress.style.width =
                progress + "%";
        }

        if (progress >= 100) {

            clearInterval(analysisTimer);

            analysisTimer = null;

            setTimeout(function () {
                generateResult();
            }, 400);
        }

    }, 120);
}


function calculatePersonality() {

    var scores = {
        social: 0,
        calm: 0,
        creative: 0,
        logical: 0,
        artistic: 0,
        energetic: 0
    };


    if (answers.social === "social") {
        scores.social += 3;
    }

    if (answers.social === "leader") {
        scores.social += 2;
        scores.energetic += 2;
    }

    if (answers.social === "calm") {
        scores.calm += 3;
    }

    if (answers.social === "selective") {
        scores.calm += 2;
    }


    if (answers.personality === "smart") {
        scores.logical += 3;
    }

    if (answers.personality === "fun") {
        scores.energetic += 3;
    }

    if (answers.personality === "artistic") {
        scores.artistic += 3;
    }

    if (answers.personality === "kind") {
        scores.calm += 2;
    }


    if (answers.weekend === "social") {
        scores.social += 2;
    }

    if (answers.weekend === "creative") {
        scores.creative += 3;
    }

    if (answers.weekend === "calm") {
        scores.calm += 3;
    }

    if (answers.weekend === "adventure") {
        scores.energetic += 3;
    }


    if (answers.firstImpression === "personality") {
        scores.logical += 1;
    }

    if (answers.firstImpression === "appearance") {
        scores.creative += 1;
    }

    if (answers.firstImpression === "style") {
        scores.artistic += 1;
    }

    if (answers.firstImpression === "vibe") {
        scores.social += 1;
    }


    var personalityNames = {
        social: "اجتماعی و ارتباط‌محور",
        calm: "آرام و عمیق",
        creative: "خلاق و تجربه‌گرا",
        logical: "منطقی و تحلیل‌گر",
        artistic: "هنری و زیبایی‌شناس",
        energetic: "پرانرژی و ماجراجو"
    };


    var highestKey = "calm";
    var highestScore = scores.calm;

    for (var key in scores) {

        if (scores[key] > highestScore) {
            highestScore = scores[key];
            highestKey = key;
        }

    }


    return {
        name: personalityNames[highestKey],
        key: highestKey,
        scores: scores
    };
}


function calculateType() {

    var scores = {
        classic: 0,
        street: 0,
        minimal: 0,
        unique: 0,
        artistic: 0,
        calm: 0,
        confident: 0
    };


    var keys = [
        "style",
        "clothing",
        "hair",
        "vibe",
        "appearance",
        "personality",
        "weekend",
        "firstImpression",
        "choice"
    ];


    for (var i = 0; i < keys.length; i++) {

        var answer = answers[keys[i]];


        if (answer === "classic") {
            scores.classic += 2;
        }

        if (answer === "street") {
            scores.street += 2;
        }

        if (answer === "minimal") {
            scores.minimal += 2;
        }

        if (answer === "unique") {
            scores.unique += 2;
        }

        if (answer === "artistic") {
            scores.artistic += 2;
        }

        if (answer === "calm") {
            scores.calm += 2;
        }

        if (answer === "confident") {
            scores.confident += 2;
        }


        if (answer === "style") {
            scores.unique += 1;
        }

        if (answer === "appearance") {
            scores.classic += 1;
        }

        if (answer === "vibe") {
            scores.artistic += 1;
        }

        if (answer === "personality") {
            scores.calm += 1;
        }

    }


    var typeNames = {
        classic: "Classic Type",
        street: "Street Type",
        minimal: "Minimal Type",
        unique: "Unique Type",
        artistic: "Artistic Type",
        calm: "Calm Type",
        confident: "Confident Type"
    };


    var highestKey = "classic";
    var highestScore = scores.classic;


    for (var key in scores) {

        if (scores[key] > highestScore) {
            highestScore = scores[key];
            highestKey = key;
        }

    }


    return {
        name: typeNames[highestKey],
        key: highestKey,
        scores: scores
    };
}


function calculateCelebrityMatch(typeResult) {

    var celebrities;


    if (userGender === "male") {
        celebrities = maleCelebrities;
    } else {
        celebrities = femaleCelebrities;
    }


    var bestCelebrity = celebrities[0];
    var bestScore = -1;


    for (var i = 0; i < celebrities.length; i++) {

        var celebrity = celebrities[i];

        var score = 0;


        for (var j = 0; j < celebrity.traits.length; j++) {

            var trait = celebrity.traits[j];


            if (answers.style === trait) {
                score += 2;
            }

            if (answers.clothing === trait) {
                score += 2;
            }

            if (answers.hair === trait) {
                score += 1;
            }

            if (answers.vibe === trait) {
                score += 2;
            }

            if (answers.personality === trait) {
                score += 2;
            }

            if (answers.firstImpression === trait) {
                score += 1;
            }

            if (typeResult.key === trait) {
                score += 2;
            }

        }


        if (score > bestScore) {
            bestScore = score;
            bestCelebrity = celebrity;
        }

    }


    var percentage = 70 + (bestScore * 3);


    if (percentage > 97) {
        percentage = 97;
    }

    if (percentage < 70) {
        percentage = 70;
    }


    return {
        name: bestCelebrity.name,
        percentage: percentage
    };
}


function getTypeDescription(typeKey) {

    var descriptions = {

        classic:
            "سلیقه‌ات بیشتر سمت چیزهای مرتب، باوقار و ماندگار می‌رود. معمولاً ظاهر تمیز و جزئیات حساب‌شده بیشتر از شلوغی توجهت را جلب می‌کند.",

        street:
            "به استایل آزادتر و راحت‌تر علاقه داری و احتمالاً لباس‌هایی که شخصیت و انرژی بیشتری نشان می‌دهند برایت جذاب‌ترند.",

        minimal:
            "سادگی برایت خسته‌کننده نیست. برعکس، احتمالاً وقتی چیزی بدون شلوغی و اضافه‌کاری خوب به نظر برسد، بیشتر قدرش را می‌دانی.",

        unique:
            "چیزهای معمولی همیشه توجهت را نگه نمی‌دارند. احتمالاً ویژگی متفاوت یا جزئیاتی که باعث شود یک نفر از بقیه جدا شود برایت مهم است.",

        artistic:
            "در انتخاب‌هایت ردپای زیبایی‌شناسی و خلاقیت دیده می‌شود. برایت فقط خود ظاهر مهم نیست، بلکه حس و داستان پشت آن هم اهمیت دارد.",

        calm:
            "به نظر می‌رسد آرامش و حس قابل اعتماد بودن برایت جذاب است و معمولاً قبل از قضاوت، کمی بیشتر مشاهده می‌کنی.",

        confident:
            "اعتمادبه‌نفس و حضور پررنگ می‌تواند توجهت را جلب کند. آدم‌هایی که خودشان را راحت‌تر نشان می‌دهند احتمالاً برایت جذاب‌ترند."
    };


    return descriptions[typeKey] ||
        descriptions.classic;
}


function generateResult() {

    var personality =
        calculatePersonality();

    var typeResult =
        calculateType();

    var celebrity =
        calculateCelebrityMatch(typeResult);


    var nameElement =
        getElement("resultName");

    var typeElement =
        getElement("typeResult");

    var personalityElement =
        getElement("personalityResult");

    var celebrityElement =
        getElement("celebrityResult");

    var matchFill =
        getElement("matchFill");

    var matchPercentage =
        getElement("matchPercentage");

    var matchDescription =
        getElement("matchDescription");

    var typeDescription =
        getElement("typeDescription");


    if (nameElement) {
        nameElement.textContent =
            userName;
    }


    if (typeElement) {
        typeElement.textContent =
            typeResult.name;
    }


    if (personalityElement) {
        personalityElement.textContent =
            personality.name;
    }


    if (celebrityElement) {
        celebrityElement.textContent =
            celebrity.name;
    }


    if (matchFill) {
        matchFill.style.width =
            celebrity.percentage + "%";
    }


    if (matchPercentage) {
        matchPercentage.textContent =
            celebrity.percentage + "%";
    }


    if (matchDescription) {

        matchDescription.textContent =
            "بر اساس جواب‌هایی که دادی، از نظر سبک، ظاهر و وایب کلی بیشترین شباهت سلیقه‌ای تو با " +
            celebrity.name +
            " دیده شد.";
    }


    if (typeDescription) {

        typeDescription.textContent =
            getTypeDescription(typeResult.key);
    }


    showScreen("resultScreen");
}


function restartTest() {

    if (analysisTimer) {
        clearInterval(analysisTimer);
        analysisTimer = null;
    }


    currentQuestion = 0;

    answers = {};

    userGender = "";

    userName = "";


    document.body.classList.remove(
        "male-theme"
    );

    document.body.classList.remove(
        "female-theme"
    );


    var nameInput =
        getElement("nameInput");


    if (nameInput) {
        nameInput.value = "";
    }


    var maleCard =
        getElement("maleCard");

    var femaleCard =
        getElement("femaleCard");


    if (maleCard) {
        maleCard.classList.remove(
            "selected"
        );
    }


    if (femaleCard) {
        femaleCard.classList.remove(
            "selected"
        );
    }


    showScreen("introScreen");
}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        var startButton =
            getElement("startBtn");

        var continueButton =
            getElement("continueBtn");

        var maleCard =
            getElement("maleCard");

        var femaleCard =
            getElement("femaleCard");

        var restartButton =
            getElement("restartBtn");


        if (startButton) {
            startButton.addEventListener(
                "click",
                startTest
            );
        }


        if (continueButton) {
            continueButton.addEventListener(
                "click",
                continueFromIdentity
            );
        }


        if (maleCard) {
            maleCard.addEventListener(
                "click",
                function () {
                    selectGender("male");
                }
            );
        }


        if (femaleCard) {
            femaleCard.addEventListener(
                "click",
                function () {
                    selectGender("female");
                }
            );
        }


        if (restartButton) {
            restartButton.addEventListener(
                "click",
                restartTest
            );
        }


        showScreen("introScreen");

    }
);
