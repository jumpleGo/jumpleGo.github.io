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
    let firestore = firebase.firestore();
    const settings = {
        timestampsInSnapshots: true
    };

    firestore.settings(settings);

    let source;
    const docRef = firestore.doc('values/9fIV2BbJnUrcMmtmSOw3');
    const button = document.querySelector('.buttons_right');

    const orders = document.querySelector('.orders');

    function renderOrder(doc) {

        const div = document.createElement("div");
        div.setAttribute('data-id', doc.id);

        const divinfo = document.createElement("div");
        divinfo.className = "info_pack";

        const divrow = document.createElement("div");
        divrow.className = "info_pack_row";

        const divrowimg = document.createElement("div");
        divrowimg.className = "info_pack_row_img";

        const img = document.createElement("img");
        img.style.width = "30px";
        img.style.height = "30px";
        img.src = doc.data().src;

        const divrowtxt = document.createElement("div");
        divrowtxt.className = "info_pack_text";
        divrowtxt.textContent = doc.data().cryptoname;

        const divpackmoney = document.createElement("div");
        divpackmoney.className = "info_pack_money";
        divpackmoney.textContent = doc.data().income;


        const span = document.createElement('span');
        span.textContent = "$";
        divpackmoney.appendChild(span);


        divrowimg.appendChild(img);
        divrow.appendChild(divrowimg);
        divrow.appendChild(divrowtxt);
        divinfo.appendChild(divrow);
        divinfo.appendChild(divpackmoney);
        div.appendChild(divinfo);
        orders.appendChild(div);
    }
    button.addEventListener("click", function () {
        let cryptoname;
        let income1;
        let price1 = document.querySelector('.price1').value;
        let price2 = document.querySelector('.price2').value;
        let total1 = document.querySelector('.colvo1').value;
        let total2 = document.querySelector('.colvo2').value;
        let income = (total2 * price2) - (price1 * total1);
        income1 = income.toFixed(2);
        switch (source) {
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
            case 'images/EOS.png':
                cryptoname = "EOS";
                break;
            case 'images/ADA.png':
                cryptoname = "Cardano";
                break;
            case 'images/ETC.png':
                cryptoname = "Ethereum Classic";
                break;
            case 'images/ETH.png':
                cryptoname = "Ethereum ";
                break;
        }

        firestore.collection('values').add({
            cryptoname: cryptoname,
            priceBuy: price1,
            priceCell: price2,
            totalBuy: total1,
            totalCell: total2,
            income: income1,
            src: source,
        });
        price1 = "";
        price2 = "";
        cryptoname = "";
        total1 = "";
        total2 = "";
        income1 = "";
        source = "";
        $('.modal').removeClass('active');

        function reload() {
            location.reload();
        }
        setTimeout(reload, 500);
        reload;
    });


    window.onload = function name() {

        firestore.collection('values').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                renderOrder(doc);
            })
        });
    }


    $('img').click(function () {
        source = $(this).attr('src');
    });




}());
