/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("Serita-db").style.marginLeft="200px";
  }
    
  /* Close the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("Serita-db").style.marginLeft="4px";
  }

//   login page
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
        $("#loginForm").submit(function(event) {
            event.preventDefault();
            var email = $("input[name='email']").val();
            var password = $("input[name='password']").val();
            auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {					
                window.location.href = "dashboard.html";                
            })
            .catch((error) => {					
                Swal.fire({
                    icon: 'error',
                    title: 'Login failed',
                    text: error.message
                })
            });
        });
    });
   