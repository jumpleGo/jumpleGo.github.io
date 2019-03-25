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

    const auth = firebase.auth();
    const mail = document.querySelector(".mail");
    const mail1 = document.querySelector(".mail1");
    const pass = document.querySelector(".pass");
    const pass1 = document.querySelector(".pass1");
    const btnLogin = document.querySelector(".login-button");
    const btnSignIn = document.querySelector(".signin-button");
    const btnLogout = document.querySelector(".logout");
    const orders = document.querySelector('.orders');
    const button = document.querySelector('.buttons_right');
    const payments_info = document.querySelector('.array');
    let source;



    $('img').click(function () {
        source = $(this).attr('src');
    });


    function calc() {
        var totalIncome = 0;
        firestore.collection("values").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                totalIncome = parseInt(totalIncome);
                totalIncome += doc.data().income;
            });
            payments_info.textContent = totalIncome;
            $('.array').append('$');
        });
    }


    //    window.onload = function () {
    //        calc();
    //    };

    function renderOrder(doc) {

        const div = document.createElement("div");
        div.setAttribute('data-id', doc.id);
        div.className = 'data';

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
        divrow.appendChild(divrowtxt);
        divrow.appendChild(divpackmoney);
        divinfo.appendChild(divrowimg);
        divinfo.appendChild(divrow);
        div.appendChild(divinfo);
        orders.appendChild(div);



    }






    button.addEventListener("click", function () {
        let smallCryptoname;
        let cryptoname;
        let income1;
        let percent1;
        let price1 = document.querySelector('.price1').value;
        let price2 = document.querySelector('.price2').value;
        let total1 = document.querySelector('.colvo1').value;
        let total2 = document.querySelector('.colvo2').value;
        let income = (total2 * price2) - (price1 * total1);
        let percent = (income * 100) / (total1 * price1);


        percent1 = percent.toFixed(1);
        income1 = income.toFixed(2);
        let income2 = parseFloat(income1);


        switch (source) {
            case 'images/LTC.png':
                cryptoname = "Litecoin";
                smallCryptoname = "LTC";
                break;
            case 'images/BTC.png':
                cryptoname = "Bitcoin";
                smallCryptoname = "BTC";
                break;
            case 'images/dash.png':
                cryptoname = "Dash";
                smallCryptoname = "DASH";
                break;
            case 'images/NEO.png':
                cryptoname = "Neo";
                smallCryptoname = "NEO";
                break;
            case 'images/XRP.png':
                cryptoname = "ripple";
                smallCryptoname = "XRP";
                break;
            case 'images/BCH.png':
                cryptoname = "bitcoin cash ";
                smallCryptoname = "BCH";
                break;
            case 'images/BNB.png':
                cryptoname = "binance coin";
                smallCryptoname = "BNB";
                break;
            case 'images/EOS.png':
                cryptoname = "EOS";
                smallCryptoname = "EOS";
                break;
            case 'images/ADA.png':
                cryptoname = "Cardano";
                smallCryptoname = "ADA";
                break;
            case 'images/ETC.png':
                cryptoname = "Ethereum Classic";
                smallCryptoname = "ETC";
                break;
            case 'images/ETH.png':
                cryptoname = "Ethereum ";
                smallCryptoname = "ETH";
                break;
            case 'images/bsv.png':
                cryptoname = "Bitcoin Cash SV ";
                smallCryptoname = "BCHSV";
                break;
            case 'images/DOGE.png':
                cryptoname = "Doge Coin ";
                smallCryptoname = "DOGE";
                break;
            case 'images/GNT.png':
                cryptoname = "Golem ";
                smallCryptoname = "GNT";
                break;
            case 'images/OMG.png':
                cryptoname = "OmiseGo ";
                smallCryptoname = "OMG";
                break;
            case 'images/QTUM.png':
                cryptoname = "QTUM ";
                smallCryptoname = "QTUM ";
                break;
            case 'images/WAVES.png':
                cryptoname = "WAVES ";
                smallCryptoname = "WAVES ";
                break;
            case 'images/XEM.png':
                cryptoname = "XEM ";
                smallCryptoname = "XEM ";
                break;
            case 'images/XLM.png':
                cryptoname = "Stellar Lumens ";
                smallCryptoname = "XLM";
                break;
            case 'images/XMR.png':
                cryptoname = "Monero ";
                smallCryptoname = "MNR";
                break;
            case 'images/ZEC.png':
                cryptoname = "ZCash ";
                smallCryptoname = "ZEC";
                break;
        }


        firestore.collection('values').add({
            cryptoname: cryptoname,
            priceBuy: price1,
            priceCell: price2,
            totalBuy: total1,
            totalCell: total2,
            income: income2,
            src: source,
            smallCryptoname: smallCryptoname,
            percent: percent1,
            time: firebase.firestore.FieldValue.serverTimestamp(),



        });
        price1 = "";
        price2 = "";
        cryptoname = "";
        total1 = "";
        total2 = "";
        income1 = "";
        source = "";
        $('.modal').removeClass('active');

    });


    $(document).on('click', '.data', function () {
        const back = document.querySelector('.back');
        const name = document.querySelector('.name');
        const totalBuy = document.querySelector('.totalBuy');
        const totalSell = document.querySelector('.totalSell');
        const priceBuy = document.querySelector('.priceBuy');
        const priceSell = document.querySelector('.priceSell');
        const income = document.querySelector('.income');
        const percent_text = document.querySelector('.percent');
        const order_img = document.querySelector('.block_order_img');
        const small_cryptoname = document.querySelector('.small_cryptoname');
        const cryptoname = document.querySelector('.cryptoname');
        const orderincome = document.querySelector('.order_income');
        const payments_info = document.querySelector('.array');
        let data = $(this).attr('data-id');
        let docRef = firestore.doc('values/' + data);


        function output_data() {
            docRef.get().then(function (doc) {
                if (doc && doc.exists) {
                    let myData = doc.data();
                    small_cryptoname.textContent = myData.smallCryptoname;
                    cryptoname.textContent = myData.cryptoname;
                    totalBuy.textContent = myData.totalBuy;
                    totalSell.textContent = myData.totalCell;
                    priceBuy.textContent = myData.priceBuy + "$";
                    priceSell.textContent = myData.priceCell + "$";
                    order_img.src = myData.src;
                    orderincome.textContent = myData.income;
                    percent_text.textContent = myData.percent;
                }
                let data = percent_text.innerHTML;
                parseInt(data);
                if (data > 0) {
                    $('.percent').prepend("+");
                    $('.main_block_order_percent').addClass('green');
                } else if (data == 0) {
                    $('.main_block_order_percent').addClass('gray');
                } else {
                    $('.main_block_order_percent').addClass('red');
                }
            });
        }
        back.addEventListener('click', function () {
            $('.main_block_order_percent').removeClass('red');
            $('.main_block_order_percent').removeClass('gray');
            $('.main_block_order_percent').removeClass('green');

        });
        output_data();
    });









    btnLogin.addEventListener('click', function (e) {
        let email = mail.value;
        let password = pass.value;
        const promise = auth.createUserWithEmailAndPassword(email, password).then(cred => {

            $('.modal2').removeClass('active');
            e.preventDefault();

        });
        promise.then(user => console.log(user)).catch(e => console.log(e.message));
    });


    btnSignIn.addEventListener("click", function (e) {
        let email = mail1.value;
        let password = pass1.value;
        const promise = auth.signInWithEmailAndPassword(email, password).then(cred => {
            $('.modal3').removeClass('active');
            e.preventDefault();
        });
        promise.catch(e => console.log(e.message));
        console.log('user signed in')
    });
    btnLogout.addEventListener("click", function (e) {
        auth.signOut().then(() => {
            console.log("user signed Out");

        });
    });



    const add_btn = document.querySelector('.main-section_btn');
    const inlog = document.querySelectorAll('.inlog');
    const logout = document.querySelector('.logout');
    const info_text = document.querySelector('.payments-info_text');
    const user_info = document.querySelector('.user_info');
    const setupUI = (user) => {
        if (user) {
            user_info.textContent = user.email;
            $('.user_info').prepend()
            inlog.forEach(item => item.style.display = 'none');
            logout.style.display = "block";
            add_btn.style.display = "flex";
            info_text.style.display = "flex";
        } else {
            inlog.forEach(item => item.style.display = 'block');
            logout.style.display = "none";
            add_btn.style.display = "none";
            info_text.style.display = "none";
        }
    }



    auth.onAuthStateChanged(function (user) {
        if (user) {
            setupUI(user);
            firestore.collection('values').onSnapshot(snapshot => {
                let changes = snapshot.docChanges();
                changes.forEach(change => {
                    if (change.type == 'added') {
                        renderOrder(change.doc);
                        calc();

                    }
                });
            });

        } else {
            console.log('user log out');
            setupUI();

        }
    });


}());
