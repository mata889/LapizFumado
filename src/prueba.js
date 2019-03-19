var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyAjWK7IticvF90SZaHBsUhnixrMNt2714o",
    authDomain: "pen-900.firebaseapp.com",
    databaseURL: "https://pen-900.firebaseio.com",
    projectId: "pen-900",
    storageBucket: "pen-900.appspot.com",
};
firebase.initializeApp(config);

var db = firebase.database();

return db.ref('pictures/').on('value', function (snapshot) {
    String(snapshot.val().carousel_1) ;
    console.log(String(snapshot.val().carousel_1))
}); 
