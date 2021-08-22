import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBrGnomoDTn_pHCUVuDLfUO2MF2CvF6kpk",

  authDomain: "se-hizo-la-luz.firebaseapp.com",

  databaseURL: "https://se-hizo-la-luz-default-rtdb.firebaseio.com",

  projectId: "se-hizo-la-luz",

  storageBucket: "se-hizo-la-luz.appspot.com",

  messagingSenderId: "297392938587",

  appId: "1:297392938587:web:ad1b64c410eed7b727e97e"

  };
  // Initialize Firebase se hizo la luz 
  https://console.firebase.google.com/project/se-hizo-la-luz/settings/general/web:YjQwYTAwODItOGFlOC00OWQ2LWIyNjgtN2M2NzU1ZmNjY2Fj?hl=es
  var fireDB=firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref();