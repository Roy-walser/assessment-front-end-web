console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted Successfully');
}

function rubberDuck(duck) {
	alert('Wow those are some fancy socks')
}

let duck = document.querySelector("content > img");
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
form.addEventListener('mouseover', rubberDuck)