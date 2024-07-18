window.onload = function () {

    getCurrentPlayer();
    setInterval(getCurrentStat, 500);

}

function shareOnTT() {
    const shareText = document.getElementById('info2').innerText;
    const navUrl =
        'https://twitter.com/intent/tweet?text=' + encodeURIComponent('Currently watching the player '+localStorage.getItem("currentPlayerInfoA")+' playing Portugal vs France\n\n' + shareText);
    window.open(navUrl, '_blank');

}

function getCurrentPlayer() {
    console.log(localStorage.getItem("currentPlayerInfoA"));
    switch (localStorage.getItem("currentPlayerInfoA")) {
        case "Hugo L.":
            document.getElementById("info2").innerHTML = "  <p> Date of birth:  Dec 26, 1986</p><p>Place of birth: Nice France</p><p>Age: 36</p><p>Height: 1,88 m</p><p>Citizenship: France</p><p> Current club: Tottenham Hotspur</p>";
            break;
        case "Lucas H.":
            document.getElementById("info2").innerHTML = "  <p> Date of birth: Feb 14, 1996</p><p>Place of birth: Marseille  France</p><p>Age: 27</p><p>Height: 1,84 m</p><p>Citizenship: France</p><p> Current club: Bayern Munich</p>";
            break;
        case "Raphael V.":
            document.getElementById("info2").innerHTML = "  <p> Date of birth: Apr 25, 1993</p><p>Place of birth: Lille  France</p><p>Age: 30</p><p>Height: 1,91 m</p><p>Citizenship: France</p><p> Current club: Manchester United</p>";
            break;
        case "Jules K.":
            console.log('4');
            document.getElementById("info2").innerHTML = "  <p> Date of birth: Nov 12, 1998</p><p>Place of birth: Paris  France</p><p>Age: 24</p><p>Height: 1,80 m</p><p>Citizenship: France</p><p> Current club: FC Barcelona</p>";
            break;
        case "Presnel K.":
            document.getElementById("info2").innerHTML = "  <p> Date of birth: Aug 13, 1995</p><p>Place of birth: Beaumont-sur-Oise France</p><p>Age: 27</p><p>Height: 1,83 m</p><p>Citizenship: France</p><p> Current club: Paris Saint-Germain</p>";
            break;
        case "Pepe":
            document.getElementById("info2").innerHTML = "  <p> Date of birth: Feb 26, 1983</p><p>Place of birth: Maceio Brazil</p><p>Age: 40</p><p>Height: 1,87 m</p><p>Citizenship: Portugal Brazil</p><p> Current club: FC Porto</p>";
            break;
        case "Rui P.":
            document.getElementById("info2").innerHTML = "  <p> Date of birth: Feb 15, 1988</p><p>Place of birth: Leiria  Portugal</p><p>Age: 35</p><p>Height: 1,90 m</p><p>Citizenship: Portugal </p><p> Current club: AS Roma</p>";
            break;
        case "Bernardo S.":
            document.getElementById("info2").innerHTML = "  <p> Date of birth:  Aug 10, 1994</p><p>Place of birth: Lisboa Portugal</p><p>Age: 28</p><p>Height: 1,73 m</p><p>Citizenship: Portugal </p><p> Current club: Manchester City</p>";
            break;
        case "Joao C.":
            document.getElementById("info2").innerHTML = "  <p> Date of birth:  May 27, 1994</p><p>Place of birth: Barreiro Portugal</p><p>Age: 28</p><p>Height: 1,82 m</p><p>Citizenship: Portugal </p><p> Current club: Bayern Munich</p>";
            break;
        case  "Cristiano R.":
            document.getElementById("info2").innerHTML = "  <p> Date of birth: Feb 5, 1985</p><p>Place of birth: Funchal Portugal</p><p>Age: 38</p><p>Height: 1,87 m</p><p>Citizenship: Portugal</p><p> Current club: Al-Nassr FC</p>";
            break;
    }
}