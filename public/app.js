// registration form
const registerForm = document.querySelector('#register-form');
const googleRegisterBtn = document.querySelector('#google-register-btn');

// Register with email and password
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = registerForm['email'].value;
  const password = registerForm['password'].value;

  // Register the user with Firebase Authentication
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const uid = user.uid;

      // Store additional user data in a Firestore database
      const userData = {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      };

      firebase.firestore().collection('users').doc(uid).set(userData)
        .then(() => {
          console.log('User data saved');
        })
        .catch((error) => {
          console.error('Error writing user data', error);
        });
    })
    .catch((error) => {
      console.error('Error registering user', error);
    });
});

