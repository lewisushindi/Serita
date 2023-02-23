/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("mySidenav").style.display = "flex";
    document.getElementById("Serita-db").style.marginLeft="200px";
  }
    
  /* Close the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.display = "none";
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
   
    // journal page
    
    const firebase = require("firebase");
    // Required for side-effects
    require("firebase/firestore");
    // Authenticate the user
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // The user is signed in
      const userId = user.uid;
      const db = firebase.firestore();
  
      // Listen for form submit events
      const form = document.getElementById('new-journal-entry-form');
      form.addEventListener('submit', (event) => {
        event.preventDefault();
  
        // Get form data
        const recentMood = document.getElementById('recent-mood').value;
        const currentGoals = document.getElementById('current-goals').value;
        const upcomingAppointments = document.getElementById('upcoming-appointments').value;
  
        // Save the journal entry data to Firestore
        const journalRef = db.collection('users').doc(userId).collection('journal');
        journalRef.add({
          recentMood: recentMood,
          currentGoals: currentGoals,
          upcomingAppointments: upcomingAppointments,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
          // Clear the form
          document.getElementById('recent-mood').value = '';
          document.getElementById('current-goals').value = '';
          document.getElementById('upcoming-appointments').value = '';
  
          // Show a success message
          document.getElementById('success-message').classList.remove('hidden');
        }).catch((error) => {
          // Show an error message
          document.getElementById('error-message').classList.remove('hidden');
          document.getElementById('error-message').textContent = error.message;
        });
      });
    } else {
        window.location.href = "dashboard.html";   
    }
    
    // displaying past entries
    if (user) {
        // The user is signed in
        const userId = user.uid;
        const journalRef = firebase.database().ref(`users/${userId}/journal`);
    
        // Listen for value changes in the journal data
        journalRef.on('value', (snapshot) => {
          const journalEntries = [];
    
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            childData.key = childSnapshot.key;
            journalEntries.push(childData);
          });
    
          // Display the journal entries in a table
          const table = document.getElementById('journal-entries-table');
          table.innerHTML = `
            <thead>
              <tr>
                <th>Date</th>
                <th>Recent Mood</th>
                <th>Current Goals</th>
                <th>Upcoming Appointments</th>
              </tr>
            </thead>
            <tbody>
              ${journalEntries.map(entry => `
                <tr>
                  <td>${new Date(entry.timestamp).toLocaleDateString()}</td>
                  <td>${entry.recentMood}</td>
                  <td>${entry.currentGoals}</td>
                  <td>${entry.upcomingAppointments}</td>
                </tr>
              `).join('')}
            </tbody>
          `;
        });
      } else {
        window.location.href = "login.html";   
      }
  });
  
  
       
