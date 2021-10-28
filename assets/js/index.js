'use strict';

const [openBtn, closeBtn] = document.querySelectorAll('button');

/*поменять местами содeржимое двух по наведению на любую */

const switchInnerText = ({target})=>{
  const openElem = target===closeBtn ? openBtn : closeBtn;
  const closeElem = target===closeBtn ? closeBtn : openBtn;

  const buffer = openElem.textContent;
  openElem.textContent = closeElem.textContent;
  closeElem.textContent = buffer;

  closeElem.removeEventListener('mouseenter',switchInnerText);
  openElem.addEventListener('mouseenter',switchInnerText);
}

const clickHandler = ({target})=>{
  console.log(target)
}

//openBtn.addEventListener('mouseenter',switchInnerText, {once:true});
closeBtn.addEventListener('mouseenter',switchInnerText);

openBtn.addEventListener('click', clickHandler);
closeBtn.addEventListener('click', clickHandler);


