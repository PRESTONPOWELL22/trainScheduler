

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAgI7AsjghhruTh2qcYW0Q6SEtw_TmAeuM",
    authDomain: "train-schedule-bbc43.firebaseapp.com",
    databaseURL: "https://train-schedule-bbc43.firebaseio.com",
    projectId: "train-schedule-bbc43",
    storageBucket: "train-schedule-bbc43.appspot.com",
    messagingSenderId: "797806940418"
};
  
firebase.initializeApp(config);

// variable to reference the database
var database = firebase.database()

$("#sbmt").on("click", function(event){
    event.preventDefault();
    var train = $("#train").val()
    var dest = $("#dest").val()
    var frst = $("#frst").val()
    var freq = $("#freq").val()
    console.log([train,dest,frst,freq])
})


