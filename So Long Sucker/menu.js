var userr = "";
var username = "";
var playObject = {username:username, userr:userr};

document.getElementById("submit").addEventListener("click", function() {
  username = document.getElementById("usernameBox").value;
  if (username == null || username == undefined || username == "") {
    document.getElementById("usernameBox").value = "";
    alert("Please create a username");
  } else {
    var rand = JSON.stringify(Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);
    userr = username + rand;
    console.log(userr);
    playObject = {username:username, userr:userr};
    console.log(playObject);
    localStorage.setItem("playObject", JSON.stringify(playObject));
  }
  enterQ();
});

function enterQ() {
  window.open("que.html","_self");
}
