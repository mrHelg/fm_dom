'use strict';
const cardsContainer = document.getElementById('cardsContainer');
const HTMLElements = actors
  .filter((actor)=>actor.name&&actor.birthdate&&actor.photo)
  .map((actor)=>createActorCards(actor));

function createActorCards(actor){
  const p = createElement('p', {classNames:['cardDescription']},
        document.createTextNode(actor.birthdate || 'unknow')
      );
  const h2 = createElement('h2', {classNames:['cardName']},
        document.createTextNode(actor.name || 'noname')
      );
  const article = createElement('article', {classNames:['cardContainer']}, 
        createImageWrapper(actor),
        h2,
        p,
      );
  return createElement('li',{classNames:['cardWrapper']}, article);
}
cardsContainer.append(...HTMLElements);

/**
 * 
 * @param {string} type 
 * @param {object} options 
 * @param {Node[]} children 
 */
function createElement(type,{classNames, onClick}, ...children){
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.addEventListener('click', onClick);//for example
  elem.append(...children);
  return elem;
}

function createImageWrapper(actor){
  const {id, name} = actor;
  const imgWrapper = document.createElement('div');
  imgWrapper.setAttribute('id', `wrapper${id}`);
  imgWrapper.classList.add('cardImageWrapper');
  

  const initials = document.createElement('div');
  initials.classList.add('initials');
  initials.append(document.createTextNode(name[0] || 'noname'));
  initials.style.backgroundColor = stringToColour(name || '');

  imgWrapper.append(initials, createImage(actor));
  return imgWrapper;
}

function createImage({photo, name, id}){
  const img = document.createElement('img');
  img.dataset.id = id;  
  img.classList.add('cardImage');
  img.setAttribute('src', photo);
  img.setAttribute('alt', name);
  img.addEventListener('error', handleImageError);
  img.addEventListener('load', handleImageLoad);
  //return img;
}

/*  handles */
function handleImageError({target}){
  target.remove();
}
function handleImageLoad({
  target, 
  target:{
    dataset:{id},
  }
}){
  console.log(target);
  document.getElementById(`wrapper${id}`).append(target);
}

/* utilits */
function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

