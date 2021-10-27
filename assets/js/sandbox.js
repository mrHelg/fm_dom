'use strict';
let i=100;

function createCounter(initial=0){
  let i=initial;//замкнутная переменная
  return {
    increment(){
      return ++i;
    },
    decrement(){
      return --i;
    }
  }
}

const counter1 = createCounter(10);
console.log(counter1.increment());
console.log(counter1.decrement());
const counter2 = createCounter();


const createAdder = (n) => (m) =>(n += m);
const adder = createAdder(10);

