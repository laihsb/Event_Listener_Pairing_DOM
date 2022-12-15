// Your website should have a paragraph of placeholder text, along with two buttons. One button should make the text bigger when clicked. The other button should make the text smaller when clicked. The font size should not get smaller than 1px and should not get larger than 100px.


// assigning values 
let count = 15;
function countFont(count){
    
}

const h1 = document.querySelector('h1');
h1.style.textAlign = 'center';

const para = document.body.querySelector('p');
para.style.textAlign = 'center';

//this wraps both the buttons
const buttonWrapper = document.querySelector('section');
buttonWrapper.style.textAlign ='center';
buttonWrapper.style.justifyContent = 'center';



//this is the button to increase the font size
let bigger = document.body.querySelector('.bigger');
bigger.style.fontSize = '20px';
//this marginRight is the space between the 2 buttons
bigger.style.marginRight = '20px';
bigger.addEventListener('click', function(){
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

//this is the button to decrease font size
let smaller = document.body.querySelector('.smaller');
smaller.style.fontSize = '20px';
smaller.addEventListener('click', function(){
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
bigImg.style.height = '15px';
bigImg.style.marginRight = '5px';

const smallImg = document.querySelector('.smallImg');
smallImg.style.height = '15px';
smallImg.style.marginRight = '5px';










