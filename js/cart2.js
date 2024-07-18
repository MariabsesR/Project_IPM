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

window.onload = function () {
    main();
    setInterval(getCurrentStat, 500);

}

function main() {
    let list = document.getElementById("cart");
    let prices = document.getElementById("prices");

    var res = localStorage.getItem("resultIndex");
    console.log(res);

    if (res == 0) {
        hideArrowUp();
        print(list, prices, 0);
        if (result[1].length != 0) {
            showArrowDown();
        } else {
            hideArrowDown();
        }
    } else if (res == 1) {
        print(list, prices, 1);
        showArrowUp();
        if (result[2].length != 0) {
            showArrowDown();
        } else {
            hideArrowDown();
        }
    } else {
        hideArrowDown();
        print(list, prices, 2);
        showArrowUp();
    }


    console.log(localStorage.getItem("total"));
    let total = document.getElementById("total");
    total.innerText = "Total: " + localStorage.getItem("total") + " Euros";
}

function print(list, prices, indexR) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
      prices.removeChild(prices.firstChild);
    }
    for (let index = 0; index < result[indexR].length; index++) {
      var prod = result[indexR][index];
      for (let x in prod) {
        let li = document.createElement("li");
        let li2 = document.createElement("li");
        li.innerText = x;
        li.setAttribute("id", `product-${x}`);
        li.setAttribute("onclick",  `remove("${x}")`);
        li2.innerText = prod[x][0] + " X " + prod[x][1] + " Euros";
        li2.setAttribute("id", `price-${x}`);
        li2.setAttribute("onclick",  `remove("${x}")`);
        prices.appendChild(li2);
        list.appendChild(li);
      }
    }
  }
  
  

function change(num) {
    var resultIndex = parseInt(localStorage.getItem("resultIndex"));
    resultIndex += num;
    localStorage.setItem("resultIndex", resultIndex);
    main();
}

function hideArrowUp() {
    var image = document.getElementById('arrow_up');
    image.style.display = 'none';
}

function hideArrowDown() {
    var image = document.getElementById('arrow_down');
    image.style.display = 'none';
}

function showArrowDown() {
    var image = document.getElementById('arrow_down');
    image.style.display = 'block';
}

function showArrowUp() {
    var image = document.getElementById('arrow_up');
    image.style.display = 'block';
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

function getCart(){
    burger = localStorage.getItem("burger");
    pizza = localStorage.getItem("pizza");
    hotdog = localStorage.getItem("hotdog");
    water = localStorage.getItem("water");
    soda = localStorage.getItem("soda");
    beer = localStorage.getItem("beer");
    food = [burger, pizza, hotdog, water, soda, beer];

   result = divideFood();
}

function remove(item) {
    console.log(item);
    var foodnames = ["burger", "pizza", "hotdog", "water", "soda", "beer"];
    var index = 0;

    getCart();
    var elem;
    food.forEach(element => {
       elem = JSON.parse(element);
        var total = parseFloat(localStorage.getItem("total"));

        if(elem.hasOwnProperty(item)){

            console.log("element");
            console.log(element);
            console.log(elem[item][0]);
            
           elem[item][0] -= 1;
           
           console.log(elem[item][0]);
           console.log(total - elem[item][1]);

           preco = total - elem[item][1];
          
            element = JSON.stringify(elem);
            console.log("element");
            console.log(element);
            console.log(item);
            localStorage.setItem(foodnames[index],element);
        }
        index++;
    });
    
    localStorage.setItem("total",preco);

   /*  localStorage.setItem("burger",burger);
    localStorage.setItem("pizza",pizza);
    localStorage.setItem("hotdog",hotdog);
    localStorage.setItem("water",water);
    localStorage.setItem("soda",soda);
    localStorage.setItem("beer",beer);
 */
    getCart();

    if(result[0].length == 0){
        window.location.href="foodmenu.html";
    }

    
    main();
}