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

var fireDB=firebase.initializeApp(firebaseConfig);

export default fireDB; 


// var firebaseConfig = {
//   apiKey: "AIzaSyDHu93JO2hFyiG3a_4P96iqfSgwtYIpA0s",
//   authDomain: "firstweb-69eee.firebaseapp.com",
//   databaseURL: "https://firstweb-69eee-default-rtdb.firebaseio.com",
//   projectId: "firstweb-69eee",
//   storageBucket: "firstweb-69eee.appspot.com",
//   messagingSenderId: "385432753716",
//   appId: "1:385432753716:web:1e14bddaefdc00a3089c61"


//   };

//   var fireDB=firebase.initializeApp(firebaseConfig);

// export default fireDB;