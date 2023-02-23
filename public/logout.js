const firebaseConfig = {
    apiKey: "AIzaSyATbNjJXMWC-F-LPD8H6IukvN2KVmD3gIs",
    authDomain: "seritahealth.firebaseapp.com",
    projectId: "seritahealth",
    storageBucket: "seritahealth.appspot.com",
    messagingSenderId: "597467249811",
    appId: "1:597467249811:web:e6ddf3d183ce0683352166",
    measurementId: "G-G2GKC4MZ14"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

$(document).ready(function() {
    $("#logoutBtn").click(function() {
        auth.signOut()
        .then(() => {            
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.log(error);
        });
    });
});

auth.onAuthStateChanged((user) => {
    if (user) {
        $("#userEmail").text(user.email);
    }
});