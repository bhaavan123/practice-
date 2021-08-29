




var firebaseConfig = {
  apiKey: "AIzaSyDEcTGdT01IpEZX6iwZ36N4n_zeiZrmH90",
  authDomain: "practice-fb51d.firebaseapp.com",
  databaseURL: "https://practice-fb51d-default-rtdb.firebaseio.com",
  projectId: "practice-fb51d",
  storageBucket: "practice-fb51d.appspot.com",
  messagingSenderId: "689407453143",
  appId: "1:689407453143:web:e14e463a63cdea1a930d92"
};


firebase.initializeApp(firebaseConfig);

function add_user(){
    user_name=document.getElementById("user_name").value;
    age=document.getElementById("age").value;
    email=document.getElementById("Email").value;
    cn=document.getElementById("contact_number").value;
    address=document.getElementById("address").value;
firebase.database().ref("/").child(user_name).update({
        name:user_name,
        age:age,
        email:email,
        contact_number:cn,
        address:address
});
}