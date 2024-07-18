function getCurrentStat() {

    var now = new Date().getTime();

    /*30s*/
    if (localStorage.getItem('firstH') - now > 0 && parseInt(localStorage.getItem("MaxStat")) < 2) {
        if ((localStorage.getItem('firstH') - now) < 10000) {

            if (localStorage.getItem("MaxStat") < 2) {
                localStorage.setItem("MaxStat", 2);
                localStorage.setItem("currentStat", 2);
            }
        } else if ((localStorage.getItem('firstH') - now) < 15000) {

            if (localStorage.getItem("MaxStat") < 1) {
                localStorage.setItem("MaxStat", 1);
                localStorage.setItem("currentStat", 1);
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
                localStorage.setItem("MaxStat", 5);
                localStorage.setItem("currentStat", 5);
            }
        } else if ((localStorage.getItem('secondH') - now) < 15000) {

            if (localStorage.getItem("MaxStat") < 4) {
                localStorage.setItem("MaxStat", 4);
                localStorage.setItem("currentStat", 4);
            }



        } else if ((localStorage.getItem('secondH') - now) < 20000) {
            if (localStorage.getItem("MaxStat") < 3) {
                localStorage.setItem("MaxStat", 3);
                localStorage.setItem("currentStat", 3);
            }
        }

    }

}