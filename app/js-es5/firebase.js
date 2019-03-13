$(document).ready(function () {
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

    const docRef = firestore.doc('values/9fIV2BbJnUrcMmtmSOw3');

    const button = document.querySelector('.buttons_right');


    button.addEventListener("click", function () {
        const price1 = document.querySelector('.price1').value;
        const price2 = document.querySelector('.price2').value;
        const total1 = document.querySelector('.colvo1').value;
        const total2 = document.querySelector('.colvo2').value;
        console.log(price1);
        docRef.set({
            pr: price1
        });
    });
}());
