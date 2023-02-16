// registration form
const registerForm = document.querySelector('#register-form');
const googleRegisterBtn = document.querySelector('#google-register-btn');

// register with email and password
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = registerForm['email'].value;
    const password = registerForm['password'].value;

    // register the user with Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const uid = user.uid;
    })

    // Store additional user data in a Firebase database
    const userData = {
        email: user.email,
        displayName: user.displayName,
        photoUrl: user.photoUrl
    };
})