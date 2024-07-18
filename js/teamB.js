const names = ["Pepe", "Rui P.", "Bernardo S.", "Joao C.", "Cristiano R."];
const players = ['<img id="player" src="images/Pepe-7.png"  alt="Pepe">', '<img id="player" src="images/Rui-Patricio.png"  alt="Rui P.">', '<img id="player" src="images/Bernardo-Silva.png"  alt="Bernardo S.">', '<img id="player" src="images/joao-cancelo.png"  alt="João C.">', '<img id="player" src="images/Cristiano-Ronaldo.png"  alt="Cristiano R">'];

window.onload = function () {

    setInterval(getCurrentStat, 500);
    localStorage.setItem("current", 4);
    localStorage.setItem("Max", 4);
    hideArrowUp();
    localStorage.setItem("currentPlayerInfoA", "Cristiano R.");

}

function change(n) {
    var currentStat = localStorage.getItem("current");
    var MaxStat = localStorage.getItem("Max");
    console.log("para" + (parseInt(currentStat) + n));

    if ((parseInt(currentStat) + n) >= 0 && (parseInt(currentStat) + n) <= MaxStat) {
        localStorage.setItem("current", parseInt(currentStat) + n);

        document.getElementById("players").innerHTML = players[localStorage.getItem("current")];
        document.getElementById("playername").innerHTML = names[localStorage.getItem("current")];
        localStorage.setItem("currentPlayerInfoA", names[localStorage.getItem("current")]);
        if ((parseInt(currentStat) + n) == 0) {
            hideArrowDown();
        }
        if ((parseInt(currentStat) + n) == localStorage.getItem("Max")) {
            hideArrowUp();
        }
        if (n < 0) {
            showArrowUp();
        }
        if (n > 0) {
            showArrowDown();
        }
    }
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

function ret() {
    window.location.href = "menu.html";
}

