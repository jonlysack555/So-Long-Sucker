var userr = "";
var username = "";
var playObject = JSON.parse(localStorage.getItem("playObject"));
userr = playObject.userr;
username = playObject.username;
var newPlayUserr = "";
var newPlayUsername = "";
var readies = 0;
var gameArray = [["", ""], ["", ""], ["", ""], ["", ""]];
var starting = false;
document.getElementById("playOneUser").style.fontSize = JSON.stringify(JSON.parse((window.innerHeight)*0.07)) + "px";
document.getElementById("playTwoUser").style.fontSize = JSON.stringify(JSON.parse((window.innerHeight)*0.07)) + "px";
document.getElementById("playThreeUser").style.fontSize = JSON.stringify(JSON.parse((window.innerHeight)*0.07)) + "px";
document.getElementById("playFourUser").style.fontSize = JSON.stringify(JSON.parse((window.innerHeight)*0.07)) + "px";

const pubnub = new PubNub({
  publishKey: "pub-c-c03147c7-bee2-4479-8823-b5669448d70a",
  subscribeKey: "sub-c-a30a8486-3f1b-11eb-a233-facb2062b65c",
  uuid: userr
});

pubnub.subscribe({
  channels: ["menu"],
  withPresence: true
});

pubnub.addListener({
  message: function(event) {
    console.log(event.message);
    if (event.message[1] == "imhere" && event.message[0] != userr) {
      newPlayUserr = event.message[0];
      newPlayUsername = event.message[2];
      addPlayer(newPlayUsername);
      reply();
    }
    if (event.message[1] == "alreadyhere" && event.message[2] == userr) {
      addPlayer(event.message[0]);
    }
    if (event.message[1] == "ready" && event.message[2] != userr) {
      readyPlayer(event.message[0]);
    }
    if (event.message[1] == "create" && event.message[2] != userr) {
      gameArray[0][0] = userr;
      gameArray[0][1] = username;
      if (gameArray[1][0] == "") {
        gameArray[1][0] = event.message[2];
        gameArray[1][1] = event.message[0];
      } else if (gameArray[2][0] == "") {
        gameArray[2][0] = event.message[2];
        gameArray[2][1] = event.message[0];
      } else if (gameArray[3][0] == "") {
        gameArray[3][0] = event.message[2];
        gameArray[3][1] = event.message[0];
        console.log("creating");
        localStorage.setItem("gameArray", JSON.stringify(gameArray));
        startGame();
      }
    }
    if (event.message[1] == "leaving") {
      if (document.getElementById("playTwoUser").innerHTML == event.message[0]) {
        readies = 0;
        document.getElementById("playOne").style.background = "#d3d3d3";
        document.getElementById("playTwo").style.background = "#d3d3d3";
        document.getElementById("playThree").style.background = "#d3d3d3";
        document.getElementById("playFour").style.background = "#d3d3d3";
        document.getElementById("playTwoUser").innerHTML = "";
        document.getElementById("sendGame").style.display = "none";
      } else if (document.getElementById("playThreeUser").innerHTML == event.message[0]) {
        readies = 0;
        document.getElementById("playOne").style.background = "#d3d3d3";
        document.getElementById("playTwo").style.background = "#d3d3d3";
        document.getElementById("playThree").style.background = "#d3d3d3";
        document.getElementById("playFour").style.background = "#d3d3d3";
        document.getElementById("playThreeUser").innerHTML = "";
        document.getElementById("sendGame").style.display = "none";
      } else if (document.getElementById("playFourUser").innerHTML == event.message[0]) {
        readies = 0;
        document.getElementById("playOne").style.background = "#d3d3d3";
        document.getElementById("playTwo").style.background = "#d3d3d3";
        document.getElementById("playThree").style.background = "#d3d3d3";
        document.getElementById("playFour").style.background = "#d3d3d3";
        document.getElementById("playFourUser").innerHTML = "";
        document.getElementById("sendGame").style.display = "none";
      }
    }
  }
});

function readyPlayer(userName) {
  if (document.getElementById("playTwoUser").innerHTML == userName && (document.getElementById("playTwo").style.background != "#77dd77" && document.getElementById("playTwo").style.background != "rgb(119, 221, 119)")) {
    document.getElementById("playTwo").style.background = "#77dd77";
    document.getElementById("playTwo").style.opacity = "0.8";
    readies += 1;
    if (readies >= 4) {
      createGame();
    }
  } else if (document.getElementById("playThreeUser").innerHTML == userName && (document.getElementById("playThree").style.background != "#77dd77" && document.getElementById("playThree").style.background != "rgb(119, 221, 119)")) {
    document.getElementById("playThree").style.background = "#77dd77";
    document.getElementById("playThree").style.opacity = "0.8";
    readies += 1;
    if (readies >= 4) {
      createGame();
    }
  } else if (document.getElementById("playFourUser").innerHTML == userName && (document.getElementById("playFour").style.background != "#77dd77" && document.getElementById("playFour").style.background != "rgb(119, 221, 119)")) {
    document.getElementById("playFour").style.background = "#77dd77";
    document.getElementById("playFour").style.opacity = "0.8";
    readies += 1;
    if (readies >= 4) {
      createGame();
    }
  }
}

function enter() {
  document.getElementById("playOneUser").innerHTML = username;
  pubnub.publish({
		channel : "menu",
		message : [userr, "imhere", username]
	});
}

enter();

function addPlayer(addedUsername) {
  if (document.getElementById("playTwoUser").innerHTML == "") {
    document.getElementById("playTwoUser").innerHTML = addedUsername;
  } else if (document.getElementById("playThreeUser").innerHTML == "") {
    document.getElementById("playThreeUser").innerHTML = addedUsername;
  } else if (document.getElementById("playFourUser").innerHTML == "") {
    document.getElementById("playFourUser").innerHTML = addedUsername;
  }
  if (document.getElementById("playOneUser").innerHTML != "" && document.getElementById("playTwoUser").innerHTML != "" && document.getElementById("playThreeUser").innerHTML != "" && document.getElementById("playFourUser").innerHTML != "") {
    promptReady();
  }
}

function reply() {
  pubnub.publish({
		channel : "menu",
		message : [username, "alreadyhere", newPlayUserr]
	});
}

function promptReady() {
  document.getElementById("sendGame").style.display = "block";
}

document.getElementById("sendGame").addEventListener("click", function() {
  document.getElementById("playOne").style.background = "#77dd77";
  document.getElementById("playOne").style.opacity = "0.8";
  document.getElementById("sendGame").style.display = "none";
  readies += 1;
  pubnub.publish({
		channel : "menu",
		message : [username, "ready", userr]
	});
  if (readies >= 4) {
    createGame();
  }
});

function createGame() {
  pubnub.publish({
		channel : "menu",
		message : [username, "create", userr]
	});
}

window.addEventListener("beforeunload", function(e){
  if (starting == false) {
    playerLeaving();
  }
}, false);

function playerLeaving() {
	pubnub.publish({
    channel : "menu",
    message : [username, "leaving"]
	});
	hostUserBackup = "";
}

function startGame() {
  starting = true;
  window.open("game.html","_self");
}
