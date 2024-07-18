window.onload = function() {
    //document.getElementById('timer').innerHTML = "00:00:00";
    repeat();
    setInterval(getCurrentStat, 500);
    setInterval(score, 500);

}

function repeat() {

    var now = new Date().getTime();

  if (localStorage.getItem('beforeG') - now > 0) {
    document.getElementById('txt').innerHTML = "To Start!!!";
    printTimer(localStorage.getItem('beforeG'));

  } else if (localStorage.getItem('firstH') - now > 0) {
    document.getElementById('txt').innerHTML = "Until Half Time!!!";
    printTimer(localStorage.getItem('firstH'));
  
  } else if (localStorage.getItem('half') - now > 0) {
    document.getElementById('txt').innerHTML = "Until The 2nd Half!!!";
    printTimer(localStorage.getItem('half'));
  
  } else if (localStorage.getItem('secondH') - now > 0) {
    document.getElementById('txt').innerHTML = "To Finish!!!";
    printTimer(localStorage.getItem('secondH'));
  
  } else { 
    window.location.href = 'finished.html';
  }
}

function printTimer(countDownDate) {

  var x = setInterval(function() {
    // Get today's date and time

    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Calculate hours, minutes, and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format the time with leading zeros
    var formattedHours = hours < 10 ? "0" + hours : hours;
    var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Display the remaining time
    document.getElementById('timer').innerHTML = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;

    // If the count down is over, stop the timer
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('timer').innerHTML = "00:00:00";
      repeat();
    }
  }, 1000);
}

function score() {

    var now = new Date().getTime();

    if ((localStorage.getItem('firstH') - now) < 25000){
    document.getElementById('score').innerHTML = "POR 1 - 0 FRA";
  } else if((localStorage.getItem('secondH') - now) < 15000){
    document.getElementById('score').innerHTML = "POR 1 - 1 FRA";
  }

}