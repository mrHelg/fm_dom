'use strict';

// const btn = document.getElementById('btn');
 function counter() {
  let i = 1;
  return function () {
    console.log(i++);
  };
}
//a()();

const a = counter();
a();
a();
a();

counter()();