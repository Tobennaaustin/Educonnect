const firebaseConfig = {
    apiKey: "AIzaSyCDYsXcsrtVujNg_GY5MTkTKxKDJ---1J0",
    authDomain: "resourcehub-8c1f4.firebaseapp.com",
    projectId: "resourcehub-8c1f4",
    storageBucket: "resourcehub-8c1f4.appspot.com",
    messagingSenderId: "278307611427",
    appId: "1:278307611427:web:ddc00adfbb03b8eda5e296",
    measurementId: "G-H4SN9PCNBM"
};

export {firebaseConfig};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const signoutBtn = document.querySelector('#signoutbtn');
signoutBtn.addEventListener('click', () => {
  auth.signOut()
    .then(() => {
      console.log('User signed out successfully');
      location.href = "index.html";
    })
    .catch((error) => {
      alert('Error signing out: ', error);
    });
});