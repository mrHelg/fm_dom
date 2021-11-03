'use strict';

const pattern1 = new RegExp('\\b\\w{2}\\b','gi');
const pattern2 = /\b\w{4}\b/gi;

if(pattern2.test('qwewdfsf 15sdsa21 @#$#')){
  console.log(true)
}else{
  console.log(false)
}

const str = 'All qwewqe1956my troubles qweqwe1998seemed 1999so far away';

const pattern3 = /\b(?:[a-z]*)(\d{4})([a-z]+)/gi;

const newStr = str.replace(pattern3, '$2 - $1');

console.log(newStr)