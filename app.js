function main() {
  if (!location.hash) {
    location.hash = '#list-of-exercises';
  }

  changeDestination();
}

function changeDestination() {
  let hash = location.hash;
  let main = document.querySelector('#main');

  console.log('🔶 hash', hash);

  switch (hash) {
    case '#list-of-exercises':
      main.innerHTML = `
      <div class="main flex container">
      <div> 
      <ul class="exercise">
        <li id="firstExercise">Відтискання від стола</li>
        <li id="secondExercise">Біг сходами</li>
        <li id="thirdExercise">Розтяжка грудини</li>
        <li id="fourthExercise">Прокачка м'язів рук</li>
        <li id="fifthExercise">Сидячий прес</li>
        <li id="sixthExercise">Стрибки з випадами вперед</li>
        <li id="seventhExercise">Піднімання ніг</li>
        <li id="eighthExercise">Присідання з опорою на стілець</li>
        <li id="ninthExercise">Підіймання колін</li>
      </ul>
    </div>  
    <div class="all_exercise flex-d-c">
      <div class="exercise1">
        <h2>Відтискання від стола</h2>
        <img src="https://lifeimg.pravda.com/images/doc/4/9/490e240-vpravi-ofis-1.gif" alt="exercise">
        <p>Добре для: Трицепса. Станьте спиною до столу, візьміться за його край долонями, по обидва боки від вас, а ногами впріться у підлогу.Згинайте лікті на 90 градусів і присідайте, намагайтеся тримати позу протягом 30 секунд (5 хвилин, 20 калорій).</p>
      </div>
      <div class="exercise2">
        <h2>Біг сходами</h2>
        <img src="https://lifeimg.pravda.com/images/doc/4/1/41ca217-vpravi-ofis-17.gif" alt="exercise">
        <p>Добре для: Ніг. Піднімаючись сходами витримуйте активний темп, щоб змусити калорії спалюватись (10 хвилин, 142 калорії).</p>
      </div>
      <div class="exercise3">
        <h2>Розтяжка грудини</h2>
        <img src="https://lifeimg.pravda.com/images/doc/e/3/e3d982c-vpravi-ofis-3.gif" alt="exercise">
        <p>Добре для: Верхньої частини тіла. Встаньте, тримаючи руки в замку за спиною відводьте їх якомога далі назад. При цьому зводьте лопатки максимально близько одна до одної і тримайте позу протягом 30 секунд (30 секунд, 10 калорій).</p>
      </div>
      <div class="exercise4">
        <h2>Прокачка м'язів рук</h2>
        <img src="https://lifeimg.pravda.com/images/doc/a/f/af9b7f7-vpravi-ofis-4.gif" alt="exercise">
        <p>Добре для: Біцепса. Утримуючи пляшку для води або об'єкт аналогічної ваги, згинайте руку в лікті, а потім розгинайте паралельно до підлоги. Повторіть ці дії кілька разів на обох руках (10 хвилин, 80 калорій).</p>
      </div>
      <div class="exercise5">
        <h2>Сидячий прес</h2>
        <img src="https://lifeimg.pravda.com/images/doc/5/1/51ac967-vpravi-ofis-6.gif" alt="exercise">
        <p>Добре для: Торс. Сидячи на самому краю стільця тримайтеся руками за нього по обидва боки від тіла, підтягніть коліна до живота і утримуйте цю позу кілька секунд. Повторіть цю дію кілька разів (1 хвилина, 30 калорій).</p>
      </div>
      <div class="exercise6">
        <h2>Стрибки з випадами вперед</h2>
        <img src="https://lifeimg.pravda.com/images/doc/c/d/cd46c86-vpravi-ofis-7.gif" alt="exercise">
        <p>Добре для: Ніг. Підстрибніть і присядьте – одну ногу зігнувши в коліні під кутом 90 градусів, іншу виструнчивши назад. Руки тримайте зігнутими в ліктях. Підстрибніть вгору ще раз та поверніться у нормальне положення. Повторіть це на обох ногах (10 хвилин, 80 калорій).</p>
      </div>
      <div class="exercise7">
        <h2>Піднімання ніг</h2>
        <img src="https://lifeimg.pravda.com/images/doc/7/e/7e7b845-vpravi-ofis-8.gif" alt="exercise">
        <p>Добре для: Стегон. Сидячи за столом просто підніміть обидві ноги вгору і повільно опустіть їх. Повторіть цю дію кілька разів (10 хвилин, 70 калорій).</p>
      </div>
      <div class="exercise8">
        <h2>Присідання з опорою на стілець</h2>
        <img src="https://lifeimg.pravda.com/images/doc/3/3/33d4628-vpravi-ofis-9.gif" alt="exercise">
        <p>Добре для: Нижньої частини тіла. Сідайте та вставайте зі стільця. Контролюйте дихання та виконуйте одне коло за 30 секунд (1 хвилина, 20 калорій).</p>
      </div>
      <div class="exercise9">
        <h2>Підіймання колін</h2>
        <img src="https://lifeimg.pravda.com/images/doc/a/d/ad752c2-vpravi-ofis-11.gif" alt="exercise">
        <p>Добре для: Ніг, живота та верхньої частини стегон. Стоячи на місці, підніміть ногу перед вами й зігніть її у коліні на 90 градусів, обійміть ногу одночасно обома руками. Повторіть цю дію на іншій нозі. Зробіть це кілька разів (5 хвилин, 30 калорій).</p>
      </div>
    </div>    
  </div>`
const li1 = document.querySelector('#firstExercise');
const li2 = document.querySelector('#secondExercise');
const li3 = document.querySelector('#thirdExercise');
const li4 = document.querySelector('#fourthExercise');
const li5 = document.querySelector('#fifthExercise');
const li6 = document.querySelector('#sixthExercise');
const li7 = document.querySelector('#seventhExercise');
const li8 = document.querySelector('#eighthExercise');
const li9 = document.querySelector('#ninthExercise');

const div1= document.querySelector('.exercise1');
const div2= document.querySelector('.exercise2');
const div3= document.querySelector('.exercise3');
const div4= document.querySelector('.exercise4');
const div5= document.querySelector('.exercise5');
const div6= document.querySelector('.exercise6');
const div7= document.querySelector('.exercise7');
const div8= document.querySelector('.exercise8');
const div9= document.querySelector('.exercise9');


li1.addEventListener('click', change1);
    function change1() {
    div1.classList.toggle("showExercise1");
    div2.classList.remove("showExercise2");
    div3.classList.remove("showExercise3");
    div4.classList.remove("showExercise4");
    div5.classList.remove("showExercise5");
    div6.classList.remove("showExercise6");
    div7.classList.remove("showExercise7");
    div8.classList.remove("showExercise8");
    div9.classList.remove("showExercise9");
}

li2.addEventListener('click', change2);
    function change2() {
    div2.classList.toggle("showExercise2");
    div1.classList.remove("showExercise1");
    div3.classList.remove("showExercise3");
    div4.classList.remove("showExercise4");
    div5.classList.remove("showExercise5");
    div6.classList.remove("showExercise6");
    div7.classList.remove("showExercise7");
    div8.classList.remove("showExercise8");
    div9.classList.remove("showExercise9");
}

li3.addEventListener('click', change3);
    function change3() {
    div3.classList.toggle("showExercise3");
    div1.classList.remove("showExercise1");
    div2.classList.remove("showExercise2");
    div4.classList.remove("showExercise4");
    div5.classList.remove("showExercise5");
    div6.classList.remove("showExercise6");
    div7.classList.remove("showExercise7");
    div8.classList.remove("showExercise8");
    div9.classList.remove("showExercise9");
}

li4.addEventListener('click', change4);
    function change4() {
    div4.classList.toggle("showExercise4");
    div1.classList.remove("showExercise1");
    div3.classList.remove("showExercise3");
    div2.classList.remove("showExercise2");
    div5.classList.remove("showExercise5");
    div6.classList.remove("showExercise6");
    div7.classList.remove("showExercise7");
    div8.classList.remove("showExercise8");
    div9.classList.remove("showExercise9");
}

li5.addEventListener('click', change5);
    function change5() {
    div5.classList.toggle("showExercise5");
    div1.classList.remove("showExercise1");
    div3.classList.remove("showExercise3");
    div4.classList.remove("showExercise4");
    div2.classList.remove("showExercise2");
    div6.classList.remove("showExercise6");
    div7.classList.remove("showExercise7");
    div8.classList.remove("showExercise8");
    div9.classList.remove("showExercise9");
}

li6.addEventListener('click', change6);
    function change6() {
    div6.classList.toggle("showExercise6");
    div1.classList.remove("showExercise1");
    div3.classList.remove("showExercise3");
    div4.classList.remove("showExercise4");
    div5.classList.remove("showExercise5");
    div2.classList.remove("showExercise2");
    div7.classList.remove("showExercise7");
    div8.classList.remove("showExercise8");
    div9.classList.remove("showExercise9");
}

li7.addEventListener('click', change7);
    function change7() {
    div7.classList.toggle("showExercise7");
    div1.classList.remove("showExercise1");
    div3.classList.remove("showExercise3");
    div4.classList.remove("showExercise4");
    div5.classList.remove("showExercise5");
    div6.classList.remove("showExercise6");
    div2.classList.remove("showExercise2");
    div8.classList.remove("showExercise8");
    div9.classList.remove("showExercise9");
}

li8.addEventListener('click', change8);
    function change8() {
    div8.classList.toggle("showExercise8");
    div1.classList.remove("showExercise1");
    div3.classList.remove("showExercise3");
    div4.classList.remove("showExercise4");
    div5.classList.remove("showExercise5");
    div6.classList.remove("showExercise6");
    div7.classList.remove("showExercise7");
    div2.classList.remove("showExercise2");
    div9.classList.remove("showExercise9");
}

li9.addEventListener('click', change9);
    function change9() {
    div9.classList.toggle("showExercise9");
    div1.classList.remove("showExercise1");
    div3.classList.remove("showExercise3");
    div4.classList.remove("showExercise4");
    div5.classList.remove("showExercise5");
    div6.classList.remove("showExercise6");
    div7.classList.remove("showExercise7");
    div8.classList.remove("showExercise8");
    div2.classList.remove("showExercise2");
}
      break;
    case '#create-workout':  
        main.innerHTML = 'Створити тренування'
        
      break;
    case '#workout':
      main.innerHTML = 'Тренування'
      break;
  }

}

window.onload = main;
window.addEventListener("hashchange", changeDestination);


