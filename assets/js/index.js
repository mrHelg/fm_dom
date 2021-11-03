'use strict';

const state = [];
const form = document.getElementById('root-form');
const list = document.getElementById('list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target: { textInput },
  } = e;
  const inputValue = textInput.value.trim();
  const validatorName = /^[A-Z][a-z]{2,12}$/;

  if (validatorName.test(inputValue) && !state.includes(inputValue)) {
    state.push(inputValue);
    form.reset();
    const li = createElement('li', {dataValue: inputValue}, document.createTextNode(inputValue));
    const btn = createElement('button', {typeEvent: 'click', onClick: deleteLi.bind(li)}, document.createTextNode('X'));
    li.append(btn);
    list.append(li);
  }

});

function deleteLi(e){
  // console.log(this.dataset.value);
  state.splice(state.indexOf(this.dataset.value), 1);
  this.remove();
}

function createElement(type, { dataValue = '', classNames = [], typeEvent = '', onClick = null }, 
  ...children){
  const elem = document.createElement(type);
  if (dataValue) {
    elem.dataset.value = dataValue;
  }
  if (classNames.length) {
    elem.classList.add(...classNames);
  }
  elem.addEventListener(typeEvent, onClick); //for example
  elem.append(...children);
  return elem;
}
