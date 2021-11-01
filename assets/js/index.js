'use strict';

const messageArray = [];

const form = document.getElementById('root-form');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const {target: { textInput }} = e;
  //после нажатия на кнопку добавлять значение инпута в массив, если оно не пустое
  const inputValue = textInput.value.trim();
  if(inputValue){
    messageArray.push(inputValue);
    //после добавления - очищать форму
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