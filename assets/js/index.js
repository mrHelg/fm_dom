

function logMessage(){
  console.log('hi!')
}

const [button] = document.getElementsByTagName('button');

button.addEventListener('click', logMessage);