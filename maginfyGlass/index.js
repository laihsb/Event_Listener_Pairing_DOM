// Your website should have a paragraph of placeholder text, along with two buttons. One button should make the text bigger when clicked. The other button should make the text smaller when clicked. The font size should not get smaller than 1px and should not get larger than 100px.


// assigning values 
let count = 0;
function countFont(count){
    
}

const h1 = document.querySelector('h1');
h1.style.textAlign = 'center';

const para = document.body.querySelector('p');
let bigger = document.body.querySelector('.bigger');
bigger.addEventListener('click', function(){
    // count ++;
    if(count < 1){
        count = 1;
    } else if (count > 100){
        count = 100;
    } else{
        count++;
    }

    let fontsize = count + 'px';
    // console.log('i was clicked');
    para.style.fontSize = fontsize;

}); 
let smaller = document.body.querySelector('.smaller');
smaller.addEventListener('click', function(){
    // count ++;
    if(count < 1){
        count = 1;
    } else if (count > 100){
        count = 100;
    } else{
        count--;
    }

    let fontsize = count + 'px';
    // console.log('i was clicked');
    para.style.fontSize = fontsize;

}); 

const bigImg = document.querySelector('.bigImg');
bigImg.style.height = '15px'

const smallImg = document.querySelector('.smallImg');
smallImg.style.height = '15px'








