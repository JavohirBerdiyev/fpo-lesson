let elOpenModalbtn = document.querySelector('#open-modal');
let elCloseModalbtn = document.querySelector('#close-modal');
let elmodalContent = document.querySelector('.modal');
let elmodalContentOta = document.querySelector('.modal-container');
let elSpanone = document.querySelector('.span');

elOpenModalbtn.addEventListener('click', function() {
  elSpanone.classList.add('db');
  elmodalContent.classList.add('addClass');
})
elCloseModalbtn.addEventListener('click', function() {
  elSpanone.classList.remove('db');
  elmodalContent.classList.remove('addClass');
})
elSpanone.addEventListener('click', function() {
  elSpanone.classList.remove('db');
  elmodalContent.classList.remove('addClass');
})