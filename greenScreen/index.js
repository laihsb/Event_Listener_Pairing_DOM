// Your website should have a text input box with a corresponding button. When the button is clicked, the background color of the entire website should change to match what the user typed into the box. If the user did not input a valid color name, then nothing should happen.

//Note: Your website should support at least five valid colors.
let html = document.querySelector('html');
const wrapper = document.querySelector('form');
const colorInput = document.querySelector('input');

const submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', function(){
    html.style.backgroundColor = '';
    if(colorInput.value == 'red'){
        html.style.backgroundColor = 'red';
        console.log('clicked');
    } if(colorInput.value == 'blue'){
        html.style.backgroundColor = 'blue';
    } if(colorInput.value == 'green'){
        html.style.backgroundColor = 'green';
    } if(colorInput.value == 'yellow'){
        html.style.backgroundColor === 'purple';
    } if(colorInput.value == 'pink'){
        html.style.backgroundColor = 'pink';
    } else {
        html.style.backgroundColor = 'none';
    }
});