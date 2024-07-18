window.onload = function() {

    const gif = document.getElementById('gif');

    const currentStat = localStorage.getItem('currentStat');

    if (currentStat === '0') {
        gif.src = 'https://giphy.com/embed/1SxvQjwrD3pMRhIDBR';
    } else if (currentStat === '1') {
        gif.src = 'https://giphy.com/embed/RzifPnDTZArCPdnX7M';
    } else if (currentStat === '2') {
        gif.src = 'https://giphy.com/embed/Kd4xiIvX3BOXoOMeTN';
    } else if (currentStat === '3') {
        gif.src = 'https://giphy.com/embed/F6yt4KAEyqqdy';
    } else if (currentStat === '4') {
        gif.src = 'https://giphy.com/embed/Wji27ewxXNsas';
    } else if (currentStat === '5') {
        gif.src = 'https://giphy.com/embed/3o72Fiu6B2vBEwZnIA';
    } else {
        // Handle cases where currentStat is not set or is an unexpected value
        console.error('Unexpected value for currentStat:', currentStat);
    }
    setInterval(getCurrentStat, 500);
}

function shareGifOnTT() {
    const gifUrl = document.getElementById('gif').getAttribute('src');
    const navUrl = 'https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20gif&url=' + encodeURIComponent(gifUrl);
    window.open(navUrl, '_blank');
}
