import firebase from 'firebase'

const config={
    apiKey: "AIzaSyCOUVj7oD-nRPcb_8TMNlYEIYip2HaBvtY",
    authDomain: "unified-ring-238002.firebaseapp.com",
    databaseURL: "https://unified-ring-238002-default-rtdb.firebaseio.com",
    projectId: "unified-ring-238002",
    storageBucket: "unified-ring-238002.appspot.com",
    messagingSenderId: "74862811796",
    appId: "1:74862811796:web:ef222cbb7c6e184d09f281"
}
firebase.initializeApp(config);
export default firebase;