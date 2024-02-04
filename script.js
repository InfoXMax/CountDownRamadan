let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

//Format: Date(year, month, day, hour, minute)
//Year is counter from 0 to 11
let endDate = new Date(2024, 2, 10, 00, 01);
//Output value in milliseconds
let endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  //Output value in milliseconds
  let todayTime = todayDate.getTime();

  let remainingTime = endTime - todayTime;

  //60sec => 1000 milliseconds
  let oneMin = 60 * 1000;
  //1hr => 60 minutes
  let oneHr = 60 * oneMin;
  //1 day => 24 hours
  let oneDay = 24 * oneHr;

  //Function to format number if it is single digit
  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  //If end dat is before today date
  if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>Countdown had expired!</h1>`;
  }
  //If end date is not before today date
  else {
    //Calculating remaining days, hrs,mins ,secs
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    //Displaying Valurs
    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}
let i = setInterval(countdown, 1000);
countdown();
// bg
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});


// test

const phrases = [  "قال رسول الله صلى الله عليه وسلم: (إِذَا مَاتَ الإنْسَانُ انْقَطَعَ عنْه عَمَلُهُ إِلَّا مِن ثَلَاثَةٍ: إِلَّا مِن صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو له)", 
 "عن جابر بن عبد الله -رضي الله عنه- قال: قال رسول الله صلّى الله عليه وسلم: (سلُوا اللهَ علمًا نافعًا، وتَعَوَّذُوا باللهِ منْ علمٍ لا ينفعُ).",  
 "قال صلّى الله عليه وسلّم: (سيأتيكُم أقوامٌ يطلبونَ العِلمَ، فإذا رأيتُموهم؛ فقولوا لَهُم مَرحبًا مَرحبًا بوصيَّةِ رسولِ اللَّهِ صلَّى اللَّهُ عليهِ وسلَّمَ، واقْنوهُم)", 
  "قال رسول الله صلى الله عليه وسلم: (فضلُ العلْمِ أحبُّ إِلَيَّ مِنْ فضلِ العبادَةِ، وخيرُ دينِكُمُ الورَعُ)", 
   "قال رسول الله صلى الله عليه وسلم: (إنْ قامَتِ الساعةُ وفي يدِ أحدِكمْ فَسِيلةٌ، فإنِ استطاعَ أنْ لا تقومَ حتى يَغرِسَها فلْيغرِسْهَا).", 
    "قال صلّى الله عليه وسلّم: (لَأَنْ يَحْتَطِبَ أَحَدُكُمْ حُزْمَةً علَى ظَهْرِهِ، خَيْرٌ له مِن أَنْ يَسْأَلَ أَحَدًا فيُعْطِيَهُ أَوْ يَمْنَعَهُ).", 
     "قال رسول الله صلى الله عليه وسلم: (المُسْلِمُ مَن سَلِمَ المُسْلِمُونَ مِن لِسانِهِ ويَدِهِ، والمُهاجِرُ مَن هَجَرَ ما نَهَى اللَّهُ عنْه).", 
      "قال رسول الله صلى الله عليه وسلم: (خَيْرُكُمْ مَن تَعَلَّمَ القُرْآنَ وعَلَّمَهُ).", 
       "قال رسول الله صلى الله عليه وسلم: (كَلِمَتانِ حَبِيبَتانِ إلى الرَّحْمَنِ، خَفِيفَتانِ علَى اللِّسانِ، ثَقِيلَتانِ في المِيزانِ: سُبْحانَ اللَّهِ وبِحَمْدِهِ، سُبْحانَ اللَّهِ العَظِيمِ).", 
        "قال رسول الله صلى الله عليه وسلم: (مَن حَفِظَ عَشْرَ آياتٍ مِن أوَّلِ سُورَةِ الكَهْفِ عُصِمَ مِنَ الدَّجَّالِ)."];

const textContainer = document.getElementById("text-container");

let currentPhraseIndex = 0;

function changePhrase() {
  textContainer.innerHTML = phrases[currentPhraseIndex];
  textContainer.classList.add("fade-out");
  setTimeout(() => {
    textContainer.classList.remove("fade-out");
    textContainer.classList.add("fade-in");
  }, 1000);
  setTimeout(() => {
    textContainer.classList.remove("fade-in");
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  }, 5500);
}

changePhrase();
setInterval(changePhrase, 6000);
