// Your website should have two main components: an image of a cookie and a counter that starts at 0. Whenever the cookie is clicked, the counter should go up by one.

// you're button on HTML you're selecting it
const button = document.querySelector('button');
// you're assigning a counter
let counter = 0;

button.addEventListener('click', function (){
    // when the button is clicked add 1 to counter
    counter++;
    // cookieCounter is keeping track of how many times cookie is clicked this is located in you're h2 element
    const cookieCounter = document.querySelector('h2');
    // you are add text to the cookieCounter
    cookieCounter.textContent = "clicked:" + counter ;
});
