// Your website should have a paragraph of placeholder text, along with two buttons. One button should make the text bigger when clicked. The other button should make the text smaller when clicked. The font size should not get smaller than 1px and should not get larger than 100px.


//selecting the elements
const paragraph = document.body.querySelector('p');
paragraph.style.fontSize = '20px';
let count = 0;
let bigger = document.body.querySelector('#bigger');

bigger.addEventListener('click', function(){
    console.log('i was clicked');
     document.paragraph.style.fontSize = '70px';
}); 

let fontsize = count + 'px'


