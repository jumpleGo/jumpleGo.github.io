 + function () {
     const auth = firebase.auth();
     const mail = document.querySelector(".mail");
     const pass = document.querySelector(".pass");
     const btnLogin = document.querySelector(".login-button");
     const btnSignIn = document.querySelector(".signin-button");

     btnLogin.addEventListener("click", function (e) {
         let email = mail.value;
         let password = pass.value;
         const promise = auth.signInWithEmailAndPassword(email, password);
         promise.catch(e => console.log(e.message));
     });


     btnSignIn.addEventListener('click', function (e) {
         let email = mail.value;
         let password = pass.value;
         const promise = auth.createUserWithEmailAndPassword(email, password);
         promise.then(user => console.log(user)).catch(e => console.log(e.message));
     });

     auth.onAuthStateChanged(function (user) {
         if (user) {
             console.log('user log in')
         } else {
             console.log('user log out')
         }
     });

 }();

 function logOut() {
     const auth = firebase.auth();
     auth.signOut().then(() => {
         console.log("user signed Out")
     });
 }
