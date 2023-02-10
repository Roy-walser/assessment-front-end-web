console.log("hello world")


function favColor(evt) {
    evt.preventDefault();
    alert('My favorite color is Blue');
}
color.addEventListener('click', favColor);

function favPlace(evt) {
    evt.preventDefault();
    alert('My favorite place is the Basketball Court');
}
place.addEventListener('click', favPlace);

function favRitual(evt) {
    evt.preventDefault();
    alert('My favorite ritual is making sure i push all my cereal under the milk before i eat it');
}
ritual.addEventListener('click', favRitual);