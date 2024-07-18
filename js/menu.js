window.onload = function () {

    setInterval(function() {
    var now = new Date().getTime();
    if(!(localStorage.getItem('secondH') - (now) > 0) && localStorage.getItem('playing') == 'true'){
        window.location.href = 'finished.html';
    }
    }, 1000);
    setInterval(getCurrentStat, 500);
}