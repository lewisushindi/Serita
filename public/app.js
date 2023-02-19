// sidenav
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
var firebaseConfig = {
    // your Firebase configuration settings
};
firebase.initializeApp(firebaseConfig);

// set up event listener on the login form
$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        event.preventDefault();
        var email = $("input[name='email']").val();
        var password = $("input[name='password']").val();
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // redirect to dashboard on successful login
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            // handle login error
            Swal.fire({
                icon: 'error',
                title: 'Login failed',
                text: error.message
            })
        });
    });
});
