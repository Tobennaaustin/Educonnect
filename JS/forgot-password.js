const firebaseConfig = {
    apiKey: "AIzaSyCDYsXcsrtVujNg_GY5MTkTKxKDJ---1J0",
    authDomain: "resourcehub-8c1f4.firebaseapp.com",
    projectId: "resourcehub-8c1f4",
    storageBucket: "resourcehub-8c1f4.appspot.com",
    messagingSenderId: "278307611427",
    appId: "1:278307611427:web:ddc00adfbb03b8eda5e296",
    measurementId: "G-H4SN9PCNBM",
};

 // Initialize Firebase App
firebase.initializeApp(firebaseConfig);

const resetPasswordForm = document.getElementById('resetPasswordForm');
const urlParams = new URLSearchParams(window.location.search);
const oobCode = urlParams.get('oobCode');


resetPasswordForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newPassword = document.getElementById('newPassword').value;

    if (!oobCode) {
       alert("Invalid or missing password reset code.")

       return;
    }

    // Reset the password using Firebase Authentication
    firebase.auth().confirmPasswordReset(oobCode, newPassword)
        .then(() => {
            alert("Password reset successfully! You can now log in with your new password.")
            
        })
        .catch((error) => {
            messageElement.textContent = `Error: ${error.message}`;
        });
});