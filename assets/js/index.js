'use strict';

const btns = document.querySelectorAll('button');


const btnHandler = ({
  target:{
    dataset:{color},
    parentNode: parentRoot
  }
})=>{
  parentRoot.style.backgroundColor = color;
}




const handler = ({currentTarget})=>{ 
  console.log(currentTarget, 'dipping');
}

for (const btn of btns) {
  btn.addEventListener('click', handler,true);
}
/* на root только один раз */
document.getElementById('root').addEventListener('click', handler,true);
document.body.addEventListener('click', handler,true);
document.addEventListener('click', handler,true);
window.addEventListener('click', handler,true);


