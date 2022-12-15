//Your website should show an image of a crane alongside four buttons. Each button corresponds to a cardinal direction (up, down, left, right), and will move the crane in that direction when clicked.

const wrapper = document.querySelector('body');
wrapper.style.textAlign = 'center';
wrapper.style.justifyContent = 'center';
wrapper.style.alignContent = 'center';

const craneImg = document.querySelector('img');
craneImg.style.justifyContent = 'center';

const btnL = document.querySelector('.left img');
btnL.style.height = '15px';
btnL.style.width = '15px';

const btnU = document.querySelector('.up img');
btnU.style.height = '15px';
btnU.style.width = '15px';

const btnR = document.querySelector('.right img');
btnR.style.height = '15px';
btnR.style.width = '15px';

const btnD = document.querySelector('.down img');
btnD.style.height = '15px';
btnD.style.width = '15px';