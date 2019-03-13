(function () {
    var config = {
        apiKey: "AIzaSyCwHDCI2f0j4IFlPGJPwavi6e-xGAYeNiM",
        authDomain: "crypto782.firebaseapp.com",
        databaseURL: "https://crypto782.firebaseio.com",
        projectId: "crypto782",
        storageBucket: "crypto782.appspot.com",
        messagingSenderId: "816239904802"
    };
    firebase.initializeApp(config);
    var firestore = firebase.firestore();

    const docRef = firestore.doc('values/9fIV2BbJnUrcMmtmSOw3/collection/ehZezTz7fuzw9rWygN7z');
    const sourse = document.querySelector('.carousel-cell-img').getAttribute('src');
    const button = document.querySelector('.buttons_right');


    button.addEventListener("click", function name() {
        let cryptoname;
        const price1 = document.querySelector('.price1').value;
        const price2 = document.querySelector('.price2').value;
        const total1 = document.querySelector('.colvo1').value;
        const total2 = document.querySelector('.colvo2').value;
        let income = (total2 * price2) - (price1 * total1);
        switch (sourse) {
            case 'images/LTC.png':
                cryptoname = "litecoin";
                break;
            case 'images/BTC.png':
                cryptoname = "bitcoin";
                break;
            case 'images/dash.png':
                cryptoname = "dash";
                break;
            case 'images/NEO.png':
                cryptoname = "neo";
                break;
            case 'images/XRP.png':
                cryptoname = "ripple";
                break;
            case 'images/BCH.png':
                cryptoname = "bitcoin cash ";
                break;
            case 'images/BNB.png':
                cryptoname = "binance coin";
                break;

        }
        docRef.set({
            income: income,
            priceBuy: price1,
            priceCell: price2,
            totalBuy: total1,
            totalCell: total2,
            src: sourse,
            cryptoname: cryptoname
        });

        $('.modal').removeClass('active');
        getRealTimeUpdates();
    });
    getRealTimeUpdates = function () {
        docRef.onSnapshot(function (doc) {
            if (doc && doc.exists) {
                const myData = doc.data();

                document.querySelector(".orders").innerHTML =
                    "  <div class='info_pack'> <div class='info_pack_row'>  <div class='info_pack_row_img'>" +
                    " <img style='width: 30px;height:30px;'" +
                    " src='" + myData.src + " \'>" + "</div><div" + " class='info_pack_row_text'" +
                    "> <span>" +
                    myData.cryptoname +
                    "</span></div></div><div" + " class='info_pack_money'> <span>  " +
                    myData.income +
                    "$ </span></div></div>";
            }
        });
    }




}());
