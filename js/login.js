const burger = {
    "Cheeseburger": [0, 5],
    "Baconburger": [0, 6],
    "Eggburger": [0, 7]
};
const pizza = {
    "Pizza Cheese&Ham": [0, 4.5],
    "Pizza Carbonara": [0, 5.5],
    "Pizza Peperonni": [0, 6]
};
const hotdog = {
    "Simple HotDog": [0, 4],
    "HotDog w/ 2 sides": [0, 4.5],
    "HotDog w/ 4 sides": [0, 5]
};
const water = {
    "Normal Water": [0, 1.5],
    "Large Water": [0, 2.5]
};
const soda = {
    "Normal Soda": [0, 2],
    "Large Soda": [0, 3]
};
const beer = {
    "Normal Beer": [0, 2],
    "Large Beer": [0, 3]
};
const food = {
    burger,
    pizza,
    hotdog,
    water,
    soda,
    beer
};

window.onload = function () {

    if (localStorage.getItem('playing') == 'true') {
        window.location.href = 'menu.html';
    }

    document.querySelector('a').addEventListener('click', main);
    setInterval(getCurrentStat, 500);
}  

function main() {

    const rand = getRandomTime(10, 30);
    const beforeG_Date = new Date().getTime() + (rand * 1000);
    localStorage.setItem('beforeG', beforeG_Date);
    const firstH_Date = beforeG_Date + (30 * 1000);
    localStorage.setItem('firstH', firstH_Date);
    const half_Date = firstH_Date + (15 * 1000);
    localStorage.setItem('half', half_Date);
    const secondH_Date = half_Date + (30 * 1000);
    localStorage.setItem('secondH', secondH_Date);

    localStorage.setItem('playing', true);

    localStorage.setItem("MaxStat", 0);
    localStorage.setItem("currentStat", 0);

    localStorage.setItem("total", 0);
    localStorage.setItem("burger", JSON.stringify(burger));
    localStorage.setItem("pizza", JSON.stringify(pizza));
    localStorage.setItem("hotdog", JSON.stringify(hotdog));
    localStorage.setItem("water", JSON.stringify(water));
    localStorage.setItem("beer", JSON.stringify(beer));
    localStorage.setItem("soda", JSON.stringify(soda));
    localStorage.setItem("resultIndex", 0);

    window.location.href = 'register.html'
}

function getRandomTime(min, max) {
    // Generate a random number between min and max (inclusive)
    var randomSeconds = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomSeconds;
}