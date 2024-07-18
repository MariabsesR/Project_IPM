var burger = localStorage.getItem("burger");
var pizza = localStorage.getItem("pizza");
var hotdog = localStorage.getItem("hotdog");
var water = localStorage.getItem("water");
var soda = localStorage.getItem("soda");
var beer = localStorage.getItem("beer");

/* const burger = {cheese:0, bacon:1, egg:1};
const pizza = {mista:1, carbo:3, pepe:1};
const hotdog = {simple:1, two:4, four:1};
const water = {normal:1, large: 5};
const soda = {normal:3, large: 1};
const beer = {normal:1, large: 1}; */
var food = [burger, pizza, hotdog, water, soda, beer];
var result = divideFood();

window.onload = function(){
    let cartButton = document.getElementById("Cart");
    console.log(result);
    if(result[0].length == 0){
        cartButton.style.display = "none";
    }else{
        cartButton.style.display = "block";
    }
}

function divideFood() {
    const foodArray = Object.entries(food); // convert the food object into an array of key-value pairs
    const result = [
        [],
        [],
        []
    ]; // initialize an array of three empty arrays
    let currentIndex = 0; // initialize the current index to 0

    for (let index = 0; index < food.length; index++) {
        var prod = JSON.parse(food[index]);

        for (let x in prod) {

            if (prod[x][0] != 0) {
                result[currentIndex].push({
                    [x]: prod[x]
                });
            }
            if (result[currentIndex].length == 5) {
                currentIndex++;
            }
        }
    }
    console.log(result);
    return result;
}