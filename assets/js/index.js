'use strict';

const messageArray = [];

const form = document.getElementById('root-form');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const {target: { textInput }} = e;
  const inputValue = textInput.value.trim();
  //const validator = /(^[A-Z][a-z]{2,12} [A-Z][a-z]{1,17}$)|(^[А-Я][а-я]{2,12} [А-Я][а-я]{1,17}$)/;
  //const validator = /^[А-Я][а-я]{1,17} ([А-Я]\.){2}$/;
  
  if(validator.test(inputValue)){
    messageArray.push(inputValue);
    form.reset();
  }
  //рендерить на странице то, что добавилось в массив
  console.dir(messageArray);
})


function createElement(type,{classNames, typeEvent, onClick}, ...children){
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.addEventListener(typeEvent, onClick);//for example
  elem.append(...children);
  return elem;
}