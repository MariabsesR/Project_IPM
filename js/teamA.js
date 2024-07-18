const names = ["Hugo L.", "Lucas H.", "Raphael V.", "Jules K.", "Presnel K."];
const players = ['<img id="player" src="images/Hugo-L.png"  alt="Hugo L.">', '<img id="player" src="images/LucasHernandez.png"  alt="Lucas H">', '<img id="player" src="images/Raphael-V.png"  alt="RaphaelV ">', '<img id="player" src="images/jules-kounde-4.png"  alt="Jules K">', '<img id="player" src="images/Presnel-K.png"  alt="presnel">'];

window.onload = function () {

  setInterval(getCurrentStat, 500);
  localStorage.setItem("current", 4);
  localStorage.setItem("Max", 4);
  hideArrowUp();
  localStorage.setItem("currentPlayerInfoA", "Presnel K.");


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

