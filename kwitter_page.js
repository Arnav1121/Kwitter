//YOUR FIREBASE LINKS
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
   var room_name=localStorage.getItem("room_name");
var user_name=localStorage.getItem("user_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
user_name=message_data['username'];
message=message_data['message'];
like=message_data['like'];
name_with_tag='<h4>'+user_name+'<img class="user_tick" src="tick.png">';
message_with_tag='<h4 class="message_h4">'+message+'</h4>';
like_button='<button class="btn btn-warning" id='+firebase_message_id+' value='+like+' onclick="update_like(this.id)">';
span_with_tag='<span class="glyphicon glyphicon-thumbs-up">like:'+like+'</span> </button> <hr>';
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
      


function send(){
message=document.getElementById("message").value;
firebase.database().ref(room_name).push({
message:message,
like:0,
username:user_name
});


document.getElementById("message").value="";




} 
 function update_like(message_id){
       button_id=message_id
       likes=document.getElementById(button_id).value;
       updated_likes=Number(likes)+1;
       firebase.database().ref(room_name).child(message_id).update({
             like:updated_likes
       });
       }
       function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

       }