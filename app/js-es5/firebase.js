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
    const add_btn = document.querySelector('.main-section_btn');
    const inlog = document.querySelectorAll('.inlog');
    const logout = document.querySelector('.logout');
    const info_text = document.querySelector('.payments-info_text');
    const user_info = document.querySelector('.user_info');
    const money = document.querySelector('.array');
    const block_main = document.querySelector('.main-section_p');
    const demo = document.querySelector('.demo');
    const orders = document.querySelector('.orders');
    const auth = firebase.auth();
    const btnLogin = document.querySelector(".login-button");
    const btnSignIn = document.querySelector(".signin-button");
    const btnLogout = document.querySelector(".logout");
    const button = document.querySelector('.buttons_right');


    function calc() {
        var user = firebase.auth().currentUser;
        const payments_info = document.querySelector('.array');
        var totalIncome = 0;
        firestore.collection("users").doc(user.uid).collection('orders').get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                totalIncome = parseFloat(totalIncome);
                totalIncome += doc.data().income;
                totalIncome.toFixed(2);
            });
            payments_info.textContent = totalIncome;
            $('.array').append('$');
        });
    }




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

    ! function () {

        const setupUI = (user) => {
            if (user) {
                user_info.textContent = user.email;
                $('.user_info').prepend('<img style="width:25px;height:25px;padding:5px" src="images/user.png"/>')
                //                inlog.forEach(item => item.style.display = 'none');
                demo.style.display = 'none';
                logout.style.display = "block";
                block_main.style.display = "flex";
                add_btn.style.display = "flex";
                info_text.style.display = "flex";
                orders.style.display = "block";
                user_info.style.display = "flex";
                money.style.display = "flex";
            } else {

                //                inlog.forEach(item => item.style.display = 'block');
                demo.style.display = 'flex';
                logout.style.display = "none";
                block_main.style.display = "none";
                add_btn.style.display = "none";
                info_text.style.display = "none";
                orders.style.display = "none";
                user_info.style.display = "none";
                money.style.display = "none";
            }
        }
        auth.onAuthStateChanged(function (user) {
            if (user) {
                setupUI(user);
                firestore.collection('users').doc(user.uid).collection('orders').onSnapshot(snapshot => {
                    let changes = snapshot.docChanges();
                    changes.forEach(change => {
                        if (change.type == 'added' || change.type == "removed") {
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
    }();






    let source;
    let smallCryptoname;
    let cryptoname;









    $('img').click(function () {
        source = $(this).attr('src');


    });
    //нажатие на кнопку добавить ордер
    button.addEventListener("click", function () {


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
        var user = firebase.auth().currentUser;
        firestore.collection('users').doc(user.uid).collection('orders').add({
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
        // firestore.collection('values').add({

        //});
        price1 = "";
        price2 = "";
        cryptoname = "";
        total1 = "";
        total2 = "";
        income1 = "";
        source = "";
        $('.modal').removeClass('active');

    });



    //нажатме на сделку
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
        //        let docRef = firestore.doc('users/' + data);
        var user = firebase.auth().currentUser;

        function output_data() {
            firestore.collection('users').doc(user.uid).collection('orders').doc(data).get().then(function (doc) {
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
        const delete_btn = document.querySelector(".delete");
        delete_btn.addEventListener("click", function (e) {


            console.log(data);
            firestore.collection("users").doc(user.uid).collection("orders").doc(data).delete().then(function () {
                $('.modal1').removeClass('active');
                location.reload()
            })

        });
        back.addEventListener('click', function () {
            $('.main_block_order_percent').removeClass('red');
            $('.main_block_order_percent').removeClass('gray');
            $('.main_block_order_percent').removeClass('green');

        });
        output_data();
    });








    ! function () {
        const mail = document.querySelector(".mail");
        const mail1 = document.querySelector(".mail1");
        const pass = document.querySelector(".pass");
        const pass1 = document.querySelector(".pass1");

        //нажатие на кнопку регистрация
        btnLogin.addEventListener('click', function (e) {
            let email = mail.value;
            let password = pass.value;
            const promise = auth.createUserWithEmailAndPassword(email, password).then(cred => {
                firestore.collection('users').doc(cred.user.uid).set({
                    mail: mail.value
                });

            }).then(() => {
                $('.modal2').removeClass('active');
                e.preventDefault();
            });

        });

        //нажатие на кнопку вход
        btnSignIn.addEventListener("click", function (e) {
            let email = mail1.value;
            let password = pass1.value;
            $(".inp").click(function () {
                $('.done').text("");
                $('.err').text("");
            });
            const promise = auth.signInWithEmailAndPassword(email, password).then(cred => {

                document.querySelector(".done").innerHTML = "Done! ";

                function close() {
                    $('.modal3').removeClass('active');
                    e.preventDefault();
                }
                setTimeout(close, 1000);
            }).catch(function (error) {
                document.querySelector(".err").innerHTML = "Error! Please, check your login and password"
            });
            promise.catch(e => console.log(e.message));

        });


        //нажатие на кнопку выйти
        btnLogout.addEventListener("click", function (e) {
            auth.signOut().then(() => {});

            location.reload();
        });
    }();









}());
