const firebaseConfig = {
  apiKey: "AIzaSyDaNq4FrxXRx4scnUKnwTAG35gxbn-BTqA",
  authDomain: "iotsem13-2.firebaseapp.com",
  databaseURL: "https://iotsem13-2-default-rtdb.firebaseio.com",
  projectId: "iotsem13-2",
  storageBucket: "iotsem13-2.appspot.com",
  messagingSenderId: "806988773715",
  appId: "1:806988773715:web:688b79ed81dd7ad22649a6",
  measurementId: "G-CH4WF7QBPJ",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var dataRef1 = database.ref("temp");
var dataRef2 = database.ref("hum");
var dataRef3 = database.ref("LED");

//fetch the data
dataRef2.on("value", function (getdata1) {
  var humi = getdata1.val();
  document.getElementById("humid").innerHTML = humi + "%";
});

dataRef1.on("value", function (getdata2) {
  var temp = getdata2.val();
  document.getElementById("temp").innerHTML = temp + "&#8451;";
});

var index = 0;
var btn = document.getElementById("led");

function press() {
  index++;
  if (index % 2 == 1) {
    database.ref("LED").set("1");
    document.getElementById("led").innerHTML = "turn off";
  } else {
    database.ref("LED").set("0");
    document.getElementById("led").innerHTML = "turn on";
  }
}

document.getElementById("led").addEventListener("click", press)
