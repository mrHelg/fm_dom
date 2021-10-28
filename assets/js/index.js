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
const handler = (e)=>{ 
  //e.cancelBubble = true;
  e.stopPropagation() ;
  console.group();  
  console.dir(e.target); 
  console.dir(e.currentTarget);//  
  console.groupEnd();
}

for (const btn of btns) {
  btn.addEventListener('click', btnHandler);
  btn.addEventListener('click', handler);
  btn.addEventListener('click', ()=>{console.log(123)}, {capture:true, once:true});
}

document.getElementById('root').addEventListener('click', handler);
document.body.addEventListener('click', handler);

document.addEventListener('click', handler, true);
window.addEventListener('click', handler, true);


