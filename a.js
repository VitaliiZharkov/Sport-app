// import { name, size }from './consts.js';

// console.log('🔶 NAME', { name, size });

const e1 = document.querySelector('#list-of-exercises-c');
const e2 = document.querySelector('#create-workout-c');
const e3 = document.querySelector('#workout-c');

const btn = document.querySelector('#btn');

function main() {
  if (!location.hash) {
    location.hash = '#list-of-exercises';
  }

  changeDestination();
}

window.onload = main;
window.addEventListener("hashchange", changeDestination);

function changeDestination() {
  [e1, e2, e3].forEach(e => {
    if (`#${e.id}` === `${location.hash}-c`) {
      e.style.display = 'block';
    } else {
      e.style.display = 'none';
    }
  })
  drawList();
}

btn.addEventListener('click', addEX);

function addEX() {
  const exName = document.querySelector('#ex-name');
  const exDesc = document.querySelector('#ex-desc');
  let ex = JSON.parse(localStorage.getItem('ex'));
  let id = new Date().getTime();

  console.log('🔶 data', { name: exName.value, desc: exDesc.value });
  console.log('🔶 ex', ex);

  if (ex) {
    ex.push({ name: exName.value, desc: exDesc.value, id })
  } else {
    ex = [{ name: exName.value, desc: exDesc.value, id }]
  }

  localStorage.setItem('ex', JSON.stringify(ex));

  exName.value = null;
  exDesc.value= null;
  drawList();
}

function delEx(id) {
  console.log('🔶 id', id);
  let ex = JSON.parse(localStorage.getItem('ex'));
  let newEx = ex.filter(el => id !== el.id);

  localStorage.setItem('ex', JSON.stringify(newEx));
  drawList();
}

function drawList() {
  const exList = document.querySelector('#ex-list');

  let ex = JSON.parse(localStorage.getItem('ex'));

  if (ex) {
    const list = ex.map(el => `<li><i onClick="delEx(${el.id})" class="close">&times;</i><h2>${el.name}</h2><p>${el.desc}</p></li>`).join('');

    exList.innerHTML = list;


  } else {
    exList.innerHTML = 'No exercise';
  }
}