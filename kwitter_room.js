
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA0GhOvergrTDXvDWrSRnfMgeVi68TAuHc",
      authDomain: "kwitter-by-arnav-joshi.firebaseapp.com",
      databaseURL: "https://kwitter-by-arnav-joshi-default-rtdb.firebaseio.com",
      projectId: "kwitter-by-arnav-joshi",
      storageBucket: "kwitter-by-arnav-joshi.appspot.com",
      messagingSenderId: "944492670668",
      appId: "1:944492670668:web:f506db131d6c3bc1481c69",
      measurementId: "G-L9T1KK839M"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   username=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+username+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addroom(){
      roomname=document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",roomname);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      
}
 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="index.html";
       
 }