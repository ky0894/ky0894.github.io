 
    let questionTitle = JSON.parse(localStorage.getItem("questionTitle")) || [];
  questionTitle.push ('1.Waar ligt de tweede grootste zeehaven van Europa?');
  questionTitle.push ('2.Welke gebieden waren vroeger ook Nederlandse koloniën?');
  questionTitle.push ('3.Wat is de oorsprong van het boeddhisme?');
  questionTitle.push ('4.Welk land is geen land dat is ontstaan na de val van de Sovjetunie?');
  questionTitle.push ('5.Wat is de stad met de beste natuurlijke omgeving ter wereld?');
  questionTitle.push ('6.Welke dier in de natuur heeft een levensduur die het meest lijkt op die van de mens?');
  questionTitle.push ('7.Welke plant groeit het snelst in de natuur?');
  questionTitle.push ('8.Welke paddenstoel heeft de langste groeicyclus?');
  questionTitle.push ('9.Welke dieren zijn de afgelopen jaren niet uitgestorven?');
  questionTitle.push ('10.Wat is het meest voorkomende dier ter wereld?');
  questionTitle.push ('11.Waar ontstond de vroegste menselijke beschaving?');
  questionTitle.push ('12.Wat was de belangrijkste reden voor de Belgische onafhankelijkheid?');
  questionTitle.push ('13.Wat is de grootste revolutie in de menselijke geschiedenis?');
  questionTitle.push ('14.Welk rijk was het grootste in de menselijke geschiedenis?');
  questionTitle.push ('15.Wat is het tweede jongste soevereine land ter wereld?');
  questionTitle.push ('16.Wat is het allerbelangrijkste kernaspect dat een land nodig heeft om zijn economie snel te ontwikkelen?');
  questionTitle.push ('17.Welk land is economisch sterk afhankelijk van de porno-industrie?');
  questionTitle.push ('18.Wat is de belangrijkste reden waarom kuststeden economisch beter ontwikkeld zijn?');
  questionTitle.push ('19.Wat is de beste oplossing voor de overheid als de vraag naar banen kleiner is dan het aanbod?');
  questionTitle.push ('20.Wat de regering absoluut niet moet doen wanneer zij met een begrotingstekort wordt geconfronteerd');

    let currentquestion = parseInt(localStorage.getItem("currentquestion")) || 0;
  const questiondiv = document.querySelector('.vraagTitel')
  //questiondiv.textContent= questionTitle[0]
 

 let questionanswerA = JSON.parse(localStorage.getItem("questionanswerA")) || [];
 questionanswerA.push('A: Algeciras, op Spanje');
 questionanswerA.push('A: Sri lanka');
 questionanswerA.push('A: Japan');
 questionanswerA.push('A: Polen');
 questionanswerA.push('A: Kopenhagen, op Denemarken');
 questionanswerA.push('A: olifant');
 questionanswerA.push('A: Bamboe');
 questionanswerA.push('A: Enoki');
 questionanswerA.push('A: Pinta-eiland reuzenschildpad');
 questionanswerA.push('A: Kippen');
 questionanswerA.push('A: Huidig Egypte');
 questionanswerA.push('A: Economische belangen');
 questionanswerA.push('A: Franse Revolutie');
 questionanswerA.push('A: Chinese Rijk');
 questionanswerA.push('kosovo');
 questionanswerA.push('A: Infrastructuur');
 questionanswerA.push('A: Tsjechië');
 questionanswerA.push('A: Toerisme en diensten');
 questionanswerA.push('A: Overmatige subsidies aan verouderde sectoren');
 questionanswerA.push('A: Hervorming van de uitgavenstructuur');

 let questionanswerB = JSON.parse(localStorage.getItem("questionanswerB")) || [];
 questionanswerB.push('B: Rotterdam, op Nederland');
 questionanswerB.push('B: Taiwan');
 questionanswerB.push('B: Thailand');
 questionanswerB.push('B: Azerbeidzjan');
 questionanswerB.push('B: Helsinki, op Finland');
 questionanswerB.push('B: Potvis');
 questionanswerB.push('B: eendekroos');
 questionanswerB.push('B: Shiitake');
 questionanswerB.push('B: Gouden pad');
 questionanswerB.push('B: Mieren');
 questionanswerB.push('B: Huidig Irak');
 questionanswerB.push('B: Religieus conflict');
 questionanswerB.push('B: Industriële Revolutie');
 questionanswerB.push('B: Britse Rijk');
 questionanswerB.push('B: Montenegro');
 questionanswerB.push('B: Internationale handel');
 questionanswerB.push('B: Nederland');
 questionanswerB.push('B: Technologie- en innovatieclusters');
 questionanswerB.push('B: Overheidsinvesteringen uitbreiden');
 questionanswerB.push('B: Abrupte bezuinigingen op sociale voorzieningen');
 
 

  let questionanswerC = JSON.parse(localStorage.getItem("questionanswerC")) || [];
 questionanswerC.push('C: Antwerpen, op België');
 questionanswerC.push('C: Hongkong');
 questionanswerC.push('C: China');
 questionanswerC.push('C: Georgië');
 questionanswerC.push('C: Oslo, op Noorwegen');
 questionanswerC.push('C: Orang-oetan');
 questionanswerC.push('C: waterplanten');
 questionanswerC.push('C: Matsutake');
 questionanswerC.push('C: Hawaiiaanse kraai');
 questionanswerC.push('C: muis');
 questionanswerC.push('C: Huidig china');
 questionanswerC.push('C: Invloed van de Franse Revolutie');
 questionanswerC.push('C: Amerikaanse Onafhankelijkheidsrevolutie');
 questionanswerC.push('C: Spaanse Rijk');
 questionanswerC.push('C: Servië');
 questionanswerC.push('C: vertrouwen in het systeem en uitvoeringskracht van beleid');
 questionanswerC.push('C: Japan');
 questionanswerC.push('C: Grote bevolking');
 questionanswerC.push('C: Kunstmatige toewijzing van banen');
 questionanswerC.push('C: Verbetering van belastingefficiëntie');

 
  let questionanswerD = JSON.parse(localStorage.getItem("questionanswerD")) || [];
 questionanswerD.push('D: Hamburg, op Duitsland');
 questionanswerD.push('D: Saint Lucia');
 questionanswerD.push('D: India');
 questionanswerD.push('D: Letland');
 questionanswerD.push('D: Wenen, op Oostenrijk');
 questionanswerD.push('D: Galápagos-reuzenschildpad');
 questionanswerD.push('D: Gras');
 questionanswerD.push('D: Eekhoorntjesbrood');
 questionanswerD.push('D: Noordelijke witte neushoorn');
 questionanswerD.push('D: mensen');
 questionanswerD.push('D: Huidig India en Pakistan');
 questionanswerD.push('D: Taal- en cultuurverschillen');
 questionanswerD.push('D: Chinese Revolutie');
 questionanswerD.push('D: Russische Rijk');
 questionanswerD.push('D: Oost-Timor');
 questionanswerD.push('D: Technologie en innovatie');
 questionanswerD.push('D: Verenigde Staten');
 questionanswerD.push('D: Lage transportkosten');
 questionanswerD.push('D: Niets doen');
 questionanswerD.push('D: Uitgifte van langlopende staatsobligaties');

   const questiondivA = document.querySelector('.antwoordA');
questiondivA.innerHTML = questionanswerA[0];
let currentquestionA = 0
  
  const questiondivB = document.querySelector('.antwoordB')
 questiondivB.innerHTML = questionanswerB[0];
 let currentquestionB = 0

  const questiondivC = document.querySelector('.antwoordC')
 questiondivC.innerHTML = questionanswerC[0];
 let currentquestionC = 0
  
  const questiondivD = document.querySelector('.antwoordD')
 questiondivD.innerHTML = questionanswerD[0];
 let currentquestionD = 0

 localStorage.setItem("questionTitle", JSON.stringify(questionTitle));
 localStorage.setItem("questionanswerA", JSON.stringify(questionanswerA));
 localStorage.setItem("questionanswerB", JSON.stringify(questionanswerB));
 localStorage.setItem("questionanswerC", JSON.stringify(questionanswerC));
 localStorage.setItem("questionanswerD", JSON.stringify(questionanswerD));

document.querySelector('.vraagTitel').textContent = questionTitle[currentquestion];
document.querySelector('.antwoordA').textContent = questionanswerA[currentquestion];
document.querySelector('.antwoordB').textContent = questionanswerB[currentquestion];
document.querySelector('.antwoordC').textContent = questionanswerC[currentquestion];
document.querySelector('.antwoordD').textContent = questionanswerD[currentquestion];

const antwoordA = document.getElementById('myBoxA');

  antwoordA.addEventListener('click', () => {
    antwoordA.classList.add('clicked');
    setTimeout(() => {
      antwoordA.classList.remove('clicked');
    }, 200); 
  });

  const antwoordB = document.getElementById('myBoxB');

  antwoordB.addEventListener('click', () => {
    antwoordB.classList.add('clicked');
    setTimeout(() => {
      antwoordB.classList.remove('clicked');
    }, 200); 
  });

  const antwoordC = document.getElementById('myBoxC');

  antwoordC.addEventListener('click', () => {
    antwoordC.classList.add('clicked');
    setTimeout(() => {
      antwoordC.classList.remove('clicked');
    }, 200); 
  });

  const antwoordD = document.getElementById('myBoxD');

  antwoordD.addEventListener('click', () => {
    antwoordD.classList.add('clicked');
    setTimeout(() => {
      antwoordD.classList.remove('clicked');
    }, 200); 
  });


  const boxes = document.querySelectorAll('[data-answer]');
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');


boxes.forEach(box => {
  box.addEventListener('click', () => {
    const isCorrect = box.dataset.answer === 'true';
    const selectedText = box.textContent;
    const correctBox = document.querySelector('[data-answer="true"]');
    const correctText = correctBox.textContent;

    modal.classList.remove('correct', 'wrong');
    modal.classList.add(isCorrect ? 'correct' : 'wrong');

    modalTitle.textContent = isCorrect ? '✅ True!' : '❌ False!';
    modalContent.innerHTML = `
      jij kiest:<br><strong>${selectedText}</strong><br><br>
      echt antwoord is:<br><strong>${correctText}</strong>
    `;

    modal.style.display = 'block';
    overlay.style.display = 'block';
  });
});

let score = parseInt(localStorage.getItem("score")) || 0;
document.getElementById("scoreDisplay").textContent = "score:" + score;

const anwerboxes = document.querySelectorAll('[data-answer]');
boxes.forEach(box => {
  box.addEventListener('click', () => {
    const isCorrect = box.dataset.answer === 'true';

    if (isCorrect) {
      score += 1;
      localStorage.setItem("score", score);
      document.getElementById("scoreDisplay").textContent = "score:" + score;
    }
  });
});


let eliminateChances = parseInt(localStorage.getItem("eliminateChances"));
if (isNaN(eliminateChances)) {
  eliminateChances = 2;
}
const eliminateBtn = document.getElementById("eliminateBtn");

eliminateBtn.addEventListener("click", () => {
  if (eliminateChances <= 0) return;

  const falseBoxes = Array.from(document.querySelectorAll('[data-answer="false"]'))
    .filter(box => box.style.pointerEvents !== "none");

  if (falseBoxes.length < 2) return;

  const shuffled = falseBoxes.sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 2);

  selected.forEach(box => {
    box.style.backgroundColor = "red";
    box.style.pointerEvents = "none";
    box.style.opacity = "0.6";
  });

  eliminateChances--;
  localStorage.setItem("eliminateChances", eliminateChances);
  eliminateBtn.textContent = `50/50 ${eliminateChances} /2`;

  if (eliminateChances === 0) {
    eliminateBtn.disabled = true;
    eliminateBtn.style.opacity = "0.5";
    eliminateBtn.style.cursor = "not-allowed";
  }
});


window.onload = function() {
  eliminateChances = localStorage.getItem("eliminateChances");
  eliminateChances = eliminateChances === null ? 2 : parseInt(eliminateChances);

  eliminateBtn.textContent = `50/50 ${eliminateChances} /2`;

  if (eliminateChances === 0) {
    eliminateBtn.disabled = true;
    eliminateBtn.style.opacity = "0.5";
    eliminateBtn.style.cursor = "not-allowed";
  } else {
    eliminateBtn.disabled = false;
    eliminateBtn.style.opacity = "1";
    eliminateBtn.style.cursor = "pointer";
  }

  if (!localStorage.getItem("hasRefreshed")) {
    localStorage.setItem("hasRefreshed", "true");
    location.reload();
  } else {
    localStorage.removeItem("hasRefreshed");
  }
};

function saveName() {
  const name = document.getElementById("usernameInput").value.trim();
  if (name) {
    localStorage.setItem("username", name);
    document.getElementById("usernameDisplay").textContent = name;
  }
}

  window.addEventListener("DOMContentLoaded", () => {
    const finished = localStorage.getItem("quizFinished");
    const score = parseInt(localStorage.getItem("score")) || 0;

    if (finished !== "true") return;

    const perfectBox = document.getElementById("perfect");
    const goodBox = document.getElementById("good");
    const okBox = document.getElementById("ok");
    const lolBox = document.getElementById("lol");

    [perfectBox, goodBox, okBox, lolBox].forEach(box => {
      if (box) box.style.display = "none";
    });

    if (score >= 18 && perfectBox) {
      perfectBox.style.display = "block";
    } else if (score >= 14 && goodBox) {
      goodBox.style.display = "block";
    } else if (score >= 10 && okBox) {
      okBox.style.display = "block";
    } else if (lolBox) {
      lolBox.style.display = "block";
    }

    localStorage.removeItem("quizFinished");
  });

// console.log(score, 'debugging');

document.addEventListener('DOMContentLoaded', () => {
  const klaarBtn = document.getElementById('klaarBtn');
  if (klaarBtn) {
    klaarBtn.addEventListener('click', (e) => {
      localStorage.setItem('quizFinished', 'true');
      window.location.href = 'eind.html';
    });
  }
});



function resetall() {
  localStorage.removeItem("score");
  localStorage.removeItem("username");
  localStorage.removeItem("eliminateChances")
}

function resetnotall() {
  localStorage.removeItem("score");
  localStorage.removeItem("eliminateChances")
}

  function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  }

document.getElementById("klaar").addEventListener("click", () => {
  localStorage.setItem("quizFinished", "true");
  window.location.href = "eind.html";
});

//localStorage.clear()


