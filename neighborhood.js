let resturantsArr = ["Panda Express", "Marley's Gourmet Sliders", "Chubby's Cafe Vineyard"]

function randResturants(evt) {
    let randomNum = Math.floor(Math.random()*resturantsArr.length);
    evt.preventDefault();
    alert(resturantsArr[randomNum]);
}

resturantsArr.addEventListner('click', randResturants);