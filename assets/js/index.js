'use strict';

// const obj = {
//   name: 'Elon',
//   age: 50,
//   isMale: true,
//   car: null,
//   hasPet: undefined,
//   children: ['Olga', 'Igor'],
// };

fetch('./assets/js/data.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((item) => console.log(item.name));
  })
  .catch((error) => {
    if (err instanceof SyntaxError) {

    }
    console.log('response: ', error);
  });

