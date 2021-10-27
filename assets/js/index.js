'use strict';
const imagesDB = [
  'https://www.bookbell.in/wp-content/uploads/2018/08/sea-01.jpg',
  'https://compass-ssl.xboxlive.com/assets/fd/df/fddfac17-875c-4910-ab1f-3f18dd9962b3.jpg?n=Parallax_Sections_Mobile_01.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-s/14/64/88/c2/makanda-by-the-sea.jpg',
  'https://bangkokpost.com/photos_content/large/prefix_1/1875/43875/43875-1448252967zcl8ij9iv3.jpg',
  'https://previews.123rf.com/images/muha/muha1205/muha120500089/13658592-tropical-beach-andaman-sea-thailand.jpg'
];
const slider = new Slider(imagesDB);

const image = document.querySelector('.slide>img');
const [prevBtn, nextBtn] = document.querySelectorAll('.slider-container>button');

function updateView(){
  image.setAttribute('src', slider.currentSlide);
}
updateView();

const bthSliderHandler = (direction = 'next') => () =>{
  slider.currentIndex = slider[direction === 'next' ? 'nextIndex' : 'prevIndex'];
  updateView();
}

nextBtn.addEventListener('click', bthSliderHandler('next'));
prevBtn.addEventListener('click', bthSliderHandler('prev'));

image.addEventListener('wheel', (e)=>{
  // const handler = e.deltaY>0? bthSliderHandler('next'):bthSliderHandler('prev');
  // handler();
  e.deltaY>0 ? bthSliderHandler('next')():bthSliderHandler('prev')();
})



/*------------------------------------------- */

// const uniqueImg = document.getElementById('unique');

// const srcAttr = document.createAttribute('src');
// srcAttr.value = imagesDB[0];

// uniqueImg.setAttributeNode(srcAttr);

/*

По клику на кнопку показывать чередоваинем одну из двух картинок

*/



