// var database = firebase.database()


$(document).ready(function() {

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

var rootRef = firebase.database().ref();

$("#sbmt").on("click", function(event){
    event.preventDefault();
    var train = $("#train").val()
    var dest = $("#dest").val()
    var frst = $("#frst").val()
    var freq = $("#freq").val()
    // console.log([train,dest,frst,freq])
    // data.push([train,dest,frst,freq])
    

    var data = [["Train Name", "Destination", "Frequency(min)","Next Arrival","Minutes Away"], //headers
    ["Test Train", "New York" , "15" , "7:15" , "8"], 
    ]
    data.push([train,dest,frst,freq])
    console.log(data)
    var trainTable = makeTable($(document.body), data);

    database.ref().push({
        train: train,
        dest: dest,
        frst: frst,
        freq: freq,
    })

    database.ref().on("child_added", function(){
        console.log("you referenced firebase you worthless pile")
    })
  
    function makeTable(container, data) {
        var table = $("<table/>").addClass('table');
        $.each(data, function(rowIndex, r) {
            var row = $("<tr/>");
            $.each(r, function(colIndex, c) { 
                row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
            });
            table.append(row);
        });
        return container.append(table);
    }
})



    // var data = [["Train Name", "Destination", "Frequency(min)","Next Arrival","Minutes Away"], //headers
    //             ["Test Train", "New York" , "15" , "7:15" , "8"], 
    //             ]
    // var cityTable = makeTable($(document.body), data);


// function makeTable(container, data) {
//     var table = $("<table/>").addClass('table');
//     $.each(data, function(rowIndex, r) {
//         var row = $("<tr/>");
//         $.each(r, function(colIndex, c) { 
//             row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
//         });
//         table.append(row);
//     });
//     return container.append(table);
// }

});


// database.ref().push({
//     train: train,
//     dest: dest,
//     frst: frst,
//     freq: freq,

// database.ref().on("child_added", function(){
//     console.log("you did it you piece of shit")
// })


// database.ref().orderByChild("number").limitToLast(1).on("child_added", function(){
//     console.log("you did it you piece of shit")
// })
