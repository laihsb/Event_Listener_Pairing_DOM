// Your website should have a text input box with a corresponding button. When the button is clicked, the background color of the entire website should change to match what the user typed into the box. If the user did not input a valid color name, then nothing should happen.

//Note: Your website should support at least five valid colors.
let html = document.querySelector('html');
html.style.height = '100%';
html.style.width = 'auto';
html.style.textAlign = 'center';

let body = document.querySelector('body');

const h1 = document.querySelector('h1');
// h1.style.textAlign = 'center';


const wrapper = document.querySelector('form');
const colorInput = document.querySelector('input');
colorInput.style.height = '50px';
colorInput.style.width = '200px';

const submitBtn = document.querySelector('button');
submitBtn.style.marginTop = '10px';

submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    colorInput.value = colorInput.value.toLocaleLowerCase();
    if(colorInput.value === 'red'){
        html.style.backgroundColor = 'red' 
        // console.log('clicked');
    } if(colorInput.value == 'blue'){
        html.style.backgroundColor = 'blue';
    } if(colorInput.value == 'green'){
        html.style.backgroundColor = 'green';
    } if(colorInput.value == 'orange'){
        html.style.backgroundColor = 'orange';
    } if(colorInput.value == 'pink'){
        html.style.backgroundColor = 'pink';
    } else {
        html.style.backgroundColor = 'none';
    }

});