import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCMXexRABJnVMjuUqtvtOj192vhHwZAG70",
    authDomain: "bookapp-ebc44.firebaseapp.com",
    projectId: "bookapp-ebc44",
    storageBucket: "bookapp-ebc44.appspot.com",
    messagingSenderId: "795612708104",
    appId: "1:795612708104:web:e1e061c93d317966d2c0bd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase