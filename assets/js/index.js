'use strict';

const btns = document.querySelectorAll('button');

const btnHandler = ({target:{dataset:{path}}})=>{console.log(path);}

for (const btn of btns) {
  btn.addEventListener('click', btnHandler);
}


