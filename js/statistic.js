var statisc1 = " <img src='images/Goll.png' id='icon'> 8m - Goal!!!! <p> Portugal!<p> by Ronaldo C. "
var statisc2 = " <img src='images/yellow_card.jpg' id='icon'> 23m - Card to <p> Lloris H."
var statisc3 = "<img src='images/red_card.jpg' id='icon'> 30m - Card to <p> Hernandez L"
var statisc4 = "<img src='images/switch.jpg' id='icon'> 65m - Substitution <p> Hernandez L. to  Benzema K."
var statisc5 = "<img src='images/Goll.png' id='icon'> 78m - Goal!!!! <p> France!<p> by Benzema K."
var statisc6 = "<img src='images/yellow_card.jpg' id='icon'> 85m - Card to <p> Digne L."

const stats = [statisc1, statisc2, statisc3, statisc4, statisc5, statisc6];


window.onload = function () {

  setInterval(function () {
    var now = new Date().getTime();
    if (!(localStorage.getItem('secondH') - (now) > 0) && localStorage.getItem('playing') == 'true') {
      window.location.href = 'finished.html';
    }
  }, 1000);

  setInterval(getCurrentStat, 1000);
  if (localStorage.getItem('MaxStat') == 0) {
    hideArrowDown();
    hideArrowUp();
  }

  setInterval(atual, 500);

}


function getCurrentStat() {

  var now = new Date().getTime();
  var replay = document.getElementById("replay");

  /*30s*/
  if (localStorage.getItem('firstH') - now > 0 && parseInt(localStorage.getItem("MaxStat")) < 2) {
    if ((localStorage.getItem('firstH') - now) < 10000) {

      if (localStorage.getItem("MaxStat") < 2) {
        document.getElementById("s").innerHTML = statisc3;
        localStorage.setItem("MaxStat", 2);
        localStorage.setItem("currentStat", 2);
        replay.style.display = 'block';

      }
    } else if ((localStorage.getItem('firstH') - now) < 15000) {

      if (localStorage.getItem("MaxStat") < 1) {
        document.getElementById("s").innerHTML = statisc2;
        localStorage.setItem("MaxStat", 1);
        localStorage.setItem("currentStat", 1);
        replay.style.display = 'block';

        showArrowDown();
      }



    } else if ((localStorage.getItem('firstH') - now) < 25000) {
      if (localStorage.getItem("MaxStat") == 0) {
        document.getElementById("s").innerHTML = statisc1;
        replay.style.display = 'block';

      }
    }


    /*30*/
  } else if (localStorage.getItem('secondH') - now > 0) {
    if (parseInt(localStorage.getItem("MaxStat")) == 0) {
      localStorage.setItem("MaxStat", 2);
      localStorage.setItem("currentStat", 2);
    }

    if ((localStorage.getItem('secondH') - now) < 10000) {

      if (localStorage.getItem("MaxStat") < 5) {
        document.getElementById("s").innerHTML = statisc6;
        localStorage.setItem("MaxStat", 5);
        localStorage.setItem("currentStat", 5);
        replay.style.display = 'block';

      }
    } else if ((localStorage.getItem('secondH') - now) < 15000) {

      if (localStorage.getItem("MaxStat") < 4) {
        document.getElementById("s").innerHTML = statisc5;
        localStorage.setItem("MaxStat", 4);
        localStorage.setItem("currentStat", 4);
        replay.style.display = 'block';

        showArrowDown();
      }



    } else if ((localStorage.getItem('secondH') - now) < 20000) {
      if (localStorage.getItem("MaxStat") < 3) {
        document.getElementById("s").innerHTML = statisc4;
        localStorage.setItem("MaxStat", 3);
        localStorage.setItem("currentStat", 3);
        showArrowDown();
      }
    }

  }

}

function change(n) {
  var currentStat = localStorage.getItem("currentStat");
  var MaxStat = localStorage.getItem("MaxStat");
  console.log("para" + (parseInt(currentStat) + n));

  if ((parseInt(currentStat) + n) >= 0 && (parseInt(currentStat) + n) <= MaxStat) {
    localStorage.setItem("currentStat", parseInt(currentStat) + n);

    document.getElementById("s").innerHTML = stats[localStorage.getItem("currentStat")];
    if ((parseInt(currentStat) + n) == 0) {
      hideArrowDown();
    }
    if ((parseInt(currentStat) + n) == localStorage.getItem("MaxStat")) {
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

function atual() {
  var replay = document.getElementById("replay");

  if (localStorage.getItem('MaxStat') != 0) {
    switch (parseInt(localStorage.getItem('currentStat'))) {
      case 0:
        document.getElementById("s").innerHTML = statisc1;
        replay.style.display = 'block';

        break;
      case 1:
        document.getElementById("s").innerHTML = statisc2;
        replay.style.display = 'block';

        break;
      case 2:
        document.getElementById("s").innerHTML = statisc3;
        replay.style.display = 'block';

        break;
      case 3:
        document.getElementById("s").innerHTML = statisc4;
        replay.style.display = 'block';

        break;
      case 4:
        document.getElementById("s").innerHTML = statisc5;
        replay.style.display = 'block';

        break;

      case 5:
        document.getElementById("s").innerHTML = statisc6;
        replay.style.display = 'block';

        break;

      default:
        break;
    }
    if (parseInt(localStorage.getItem("currentStat")) == 0) hideArrowDown();
    if (parseInt(localStorage.getItem("currentStat")) == parseInt(localStorage.getItem("MaxStat"))) hideArrowUp();
  }
}