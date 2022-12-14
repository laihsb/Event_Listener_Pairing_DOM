// Your website should have a paragraph of placeholder text, along with two buttons. One button should make the text bigger when clicked. The other button should make the text smaller when clicked. The font size should not get smaller than 1px and should not get larger than 100px.


//selecting the elements
const paragraph = document.querySelector('p');
paragraph.style.fontSize = '20px';
const bigger = document.getElementsByClassName('bigger');

bigger.addEventListener('click', function(){
    bigger.style.fontSize = '70px';

})

