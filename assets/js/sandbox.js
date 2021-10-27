'use strict';
let i=100;

function createCounter(initial=0){
  let i=initial;//замкнутная переменная
  return function counter(){
    return ++i;
  }
}

const counter1 = createCounter(10);
console.log(counter1());
const counter2 = createCounter();
