var userr = JSON.parse(localStorage.getItem("gameArray"))[0][0];
var username = JSON.parse(localStorage.getItem("gameArray"))[0][1];
var gameArray = JSON.parse(localStorage.getItem("gameArray"));
document.getElementById("playOneName").innerHTML = gameArray[0][1];
document.getElementById("playTwoName").innerHTML = gameArray[1][1];
document.getElementById("playThreeName").innerHTML = gameArray[2][1];
document.getElementById("playFourName").innerHTML = gameArray[3][1];
document.getElementById("playOneUserName").innerHTML = gameArray[0][0];
document.getElementById("playTwoUserName").innerHTML = gameArray[1][0];
document.getElementById("playThreeUserName").innerHTML = gameArray[2][0];
document.getElementById("playFourUserName").innerHTML = gameArray[3][0];
var turnUser;
var place;
var chipSlots = [document.getElementById("chipOne"), document.getElementById("chipTwo"), document.getElementById("chipThree"), document.getElementById("chipFour"), document.getElementById("chipFive"), document.getElementById("chipSix"), document.getElementById("chipSeven"), document.getElementById("chipEight"), document.getElementById("chipNine"), document.getElementById("chipTen"), document.getElementById("chipEleven"), document.getElementById("chipTwelve"), document.getElementById("chipThirteen"), document.getElementById("chipFourteen"), document.getElementById("chipFifteen"), document.getElementById("chipSixteen"), document.getElementById("chipSeventeen"), document.getElementById("chipEighteen"), document.getElementById("chipNineteen"), document.getElementById("chipTwenty"), document.getElementById("chipTwentyone"), document.getElementById("chipTwentytwo"), document.getElementById("chipTwentythree"), document.getElementById("chipTwentyfour"), document.getElementById("chipTwentyfive"), document.getElementById("chipTwentysix"), document.getElementById("chipTwentyseven"), document.getElementById("chipTwentyeight"), document.getElementById("final")]
var stackHeight;
var redChips = [document.getElementById("redChipCountOne"), document.getElementById("redChipCountTwo"), document.getElementById("redChipCountThree"), document.getElementById("redChipCountFour")]
var blueChips = [document.getElementById("blueChipCountOne"), document.getElementById("blueChipCountTwo"), document.getElementById("blueChipCountThree"), document.getElementById("blueChipCountFour")]
var greenChips = [document.getElementById("greenChipCountOne"), document.getElementById("greenChipCountTwo"), document.getElementById("greenChipCountThree"), document.getElementById("greenChipCountFour")]
var yellowChips = [document.getElementById("yellowChipCountOne"), document.getElementById("yellowChipCountTwo"), document.getElementById("yellowChipCountThree"), document.getElementById("yellowChipCountFour")]
var segment = "waiting";
var temp = 0;
var inStack = [false, false, false, false, ""];

var reA = /[^a-zA-Z]/g;
var reN = /[^0-9]/g;
function sortAlphaNum(a, b) {
  var aA = a.replace(reA, "");
  var bA = b.replace(reA, "");
  if (aA === bA) {
    var aN = parseInt(a.replace(reN, ""), 10);
    var bN = parseInt(b.replace(reN, ""), 10);
    return aN === bN ? 0 : aN > bN ? 1 : -1;
  } else {
    return aA > bA ? 1 : -1;
  }
}

var order = [gameArray[0][0], gameArray[1][0], gameArray[2][0], gameArray[3][0]].sort(sortAlphaNum);
console.log(order);

if (document.getElementById("playOneUserName").innerHTML == order[0]) {
  document.getElementById("playOneName").style.color = "red";
  document.getElementById("redChipCountOne").innerHTML = "7";
} else if (document.getElementById("playOneUserName").innerHTML == order[1]) {
  document.getElementById("playOneName").style.color = "blue";
  document.getElementById("blueChipCountOne").innerHTML = "7";
} else if (document.getElementById("playOneUserName").innerHTML == order[2]) {
  document.getElementById("playOneName").style.color = "green";
  document.getElementById("greenChipCountOne").innerHTML = "7";
} else if (document.getElementById("playOneUserName").innerHTML == order[3]) {
  document.getElementById("playOneName").style.color = "yellow";
  document.getElementById("yellowChipCountOne").innerHTML = "7";
}

if (document.getElementById("playTwoUserName").innerHTML == order[0]) {
  document.getElementById("playTwoName").style.color = "red";
  document.getElementById("redChipCountTwo").innerHTML = "7";
} else if (document.getElementById("playTwoUserName").innerHTML == order[1]) {
  document.getElementById("playTwoName").style.color = "blue";
  document.getElementById("blueChipCountTwo").innerHTML = "7";
} else if (document.getElementById("playTwoUserName").innerHTML == order[2]) {
  document.getElementById("playTwoName").style.color = "green";
  document.getElementById("greenChipCountTwo").innerHTML = "7";
} else if (document.getElementById("playTwoUserName").innerHTML == order[3]) {
  document.getElementById("playTwoName").style.color = "yellow";
  document.getElementById("yellowChipCountTwo").innerHTML = "7";
}

if (document.getElementById("playThreeUserName").innerHTML == order[0]) {
  document.getElementById("playThreeName").style.color = "red";
  document.getElementById("redChipCountThree").innerHTML = "7";
} else if (document.getElementById("playThreeUserName").innerHTML == order[1]) {
  document.getElementById("playThreeName").style.color = "blue";
  document.getElementById("blueChipCountThree").innerHTML = "7";
} else if (document.getElementById("playThreeUserName").innerHTML == order[2]) {
  document.getElementById("playThreeName").style.color = "green";
  document.getElementById("greenChipCountThree").innerHTML = "7";
} else if (document.getElementById("playThreeUserName").innerHTML == order[3]) {
  document.getElementById("playThreeName").style.color = "yellow";
  document.getElementById("yellowChipCountThree").innerHTML = "7";
}

if (document.getElementById("playFourUserName").innerHTML == order[0]) {
  document.getElementById("playFourName").style.color = "red";
  document.getElementById("redChipCountFour").innerHTML = "7";
} else if (document.getElementById("playFourUserName").innerHTML == order[1]) {
  document.getElementById("playFourName").style.color = "blue";
  document.getElementById("blueChipCountFour").innerHTML = "7";
} else if (document.getElementById("playFourUserName").innerHTML == order[2]) {
  document.getElementById("playFourName").style.color = "green";
  document.getElementById("greenChipCountFour").innerHTML = "7";
} else if (document.getElementById("playFourUserName").innerHTML == order[3]) {
  document.getElementById("playFourName").style.color = "yellow";
  document.getElementById("yellowChipCountFour").innerHTML = "7";
}

if (userr == order[0]) {
  var start = Math.random();
  console.log(start);
  if (start < 0.25) {
    document.getElementById("turnPlateOne").style.display = "block";
    turnUser = document.getElementById("playOneUserName").innerHTML;
  } else if (start < 0.5) {
    document.getElementById("turnPlateTwo").style.display = "block";
    turnUser = document.getElementById("playTwoUserName").innerHTML;
  } else if (start < 0.75) {
    document.getElementById("turnPlateThree").style.display = "block";
    turnUser = document.getElementById("playThreeUserName").innerHTML;
  } else {
    document.getElementById("turnPlateFour").style.display = "block";
    turnUser = document.getElementById("playFourUserName").innerHTML;
  }
}

const pubnub = new PubNub({
  publishKey: "pub-c-c03147c7-bee2-4479-8823-b5669448d70a",
  subscribeKey: "sub-c-a30a8486-3f1b-11eb-a233-facb2062b65c",
  uuid: userr
});

pubnub.subscribe({
  channels: ["game"],
  withPresence: true
});

console.log(gameArray);

if (userr == order[0]) {
  setTimeout(send, 500);
}

function send() {
  pubnub.publish({
    channel : "game",
    message : ["startTurn", turnUser]
  });
}

if (userr == turnUser) {
  segment = "placement";
} else {
  segment = "waiting";
}

pubnub.addListener({
  message: function(event) {
    console.log(event.message);
    if (turnUser != userr || (event.message[0] == "elimChip" && event.message[2] != userr)) {
      if (event.message[0] == "startTurn") {
        turnUser = event.message[1];
        if (turnUser == userr) {
          segment = "placement";
          document.getElementById("turnPlateOne").style.display = "block";
        } else if (turnUser == document.getElementById("playTwoUserName").innerHTML) {
          segment = "waiting";
          document.getElementById("turnPlateTwo").style.display = "block";
        } else if (turnUser == document.getElementById("playThreeUserName").innerHTML) {
          segment = "waiting";
          document.getElementById("turnPlateThree").style.display = "block";
        } else if (turnUser == document.getElementById("playFourUserName").innerHTML) {
          segment = "waiting";
          document.getElementById("turnPlateFour").style.display = "block";
        }
      } else if (event.message[0] == "placeChip") {
        var tempPlace = event.message[2];
        var tempUser = event.message[3];
        var tempChip = event.message[1];
        chipSlots[tempPlace-1].src = tempChip;
        if (document.getElementById("playTwoUserName").innerHTML == tempUser) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountTwo").innerHTML)-1);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountTwo").innerHTML)-1);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountTwo").innerHTML)-1);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountTwo").innerHTML)-1);
          }
        } else if (document.getElementById("playThreeUserName").innerHTML == tempUser) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountThree").innerHTML)-1);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountThree").innerHTML)-1);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountThree").innerHTML)-1);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountThree").innerHTML)-1);
          }
        } else if (document.getElementById("playFourUserName").innerHTML == tempUser) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountFour").innerHTML)-1);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountFour").innerHTML)-1);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountFour").innerHTML)-1);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountFour").innerHTML)-1);
          }
        }
      } else if (event.message[0] == "stackChip") {
        var tempChip = event.message[1];
        var tempPlace = event.message[2];
        var tempUser = event.message[3];
        if (document.getElementById("playTwoUserName").innerHTML == tempUser) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountTwo").innerHTML)-1);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountTwo").innerHTML)-1);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountTwo").innerHTML)-1);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountTwo").innerHTML)-1);
          }
        } else if (document.getElementById("playThreeUserName").innerHTML == tempUser) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountThree").innerHTML)-1);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountThree").innerHTML)-1);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountThree").innerHTML)-1);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountThree").innerHTML)-1);
          }
        } else if (document.getElementById("playFourUserName").innerHTML == tempUser) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountFour").innerHTML)-1);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountFour").innerHTML)-1);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountFour").innerHTML)-1);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountFour").innerHTML)-1);
          }
        }


        console.log("push");
        var i = 0;
        while (chipSlots[tempPlace+i].src != "" && tempPlace+i < 28) {
          i += 1;
        }
        console.log(i);
        console.log(tempPlace+i);
        if (tempPlace+i < 27) {
          while (i > 0) {
            chipSlots[tempPlace+i].src = chipSlots[tempPlace+i-1].src;
            if ((JSON.parse((chipSlots[tempPlace].style.left).slice(0, -1)))-(JSON.parse((chipSlots[tempPlace-1].style.left).slice(0, -1))) <= 14) {
              chipSlots[tempPlace+i].style.left = JSON.stringify(JSON.parse((chipSlots[tempPlace+i-1].style.left).slice(0, -1))+14)+"%";
            } else {
              chipSlots[tempPlace+i].style.left = chipSlots[tempPlace+i-1].style.left;
            }
            chipSlots[tempPlace+i].style.top = chipSlots[tempPlace+i-1].style.top;
            i -= 1;
          }
          chipSlots[tempPlace].style.left = JSON.stringify(JSON.parse((chipSlots[tempPlace-1].style.left).slice(0, -1))+3)+"%";
          chipSlots[tempPlace].style.top = chipSlots[tempPlace-1].style.top;
          console.log("up");
        } else {
          console.log("back");
          i = 0;
          while (chipSlots[tempPlace-i].src != "") {
            i += 1;
          }
          while (i > 0) {
            console.log(i);
            chipSlots[tempPlace-i].src = chipSlots[tempPlace-i+1].src;
            if ((JSON.parse((chipSlots[tempPlace].style.left).slice(0, -1)))-(JSON.parse((chipSlots[tempPlace-1].style.left).slice(0, -1))) <= 14) {
              console.log("one");
              chipSlots[tempPlace-i].style.left = JSON.stringify(JSON.parse((chipSlots[tempPlace-i+1].style.left).slice(0, -1))-14)+"%";
            } else {
              console.log("two");
              chipSlots[tempPlace-i].style.left = chipSlots[tempPlace-i+1].style.left;
            }
            chipSlots[tempPlace-i].style.top = chipSlots[tempPlace-i+1].style.top;
            i -= 1;
          }
          chipSlots[tempPlace-1].style.left = JSON.stringify(JSON.parse((chipSlots[tempPlace-2].style.left).slice(0, -1))+3)+"%";
          chipSlots[tempPlace-1].style.top = chipSlots[tempPlace-2].style.top;
        }


        chipSlots[tempPlace].src = tempChip;
        if (chipSlots[tempPlace].src == chipSlots[tempPlace-1].src) {
          setTimeout(capture, 500, tempPlace);
        }
      } else if (event.message[0] == "elimChip") {
        var tempChip = event.message[1];
        var tempUser = event.message[2];
        if (document.getElementById("playTwoUserName").innerHTML == tempUser) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountTwo").innerHTML)-1);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountTwo").innerHTML)-1);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountTwo").innerHTML)-1);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountTwo").innerHTML)-1);
          }
        } else if (document.getElementById("playThreeUserName").innerHTML == tempUser) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountThree").innerHTML)-1);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountThree").innerHTML)-1);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountThree").innerHTML)-1);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountThree").innerHTML)-1);
          }
        } else if (document.getElementById("playFourUserName").innerHTML == tempUser) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountFour").innerHTML)-1);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountFour").innerHTML)-1);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountFour").innerHTML)-1);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountFour").innerHTML)-1);
          }
        }
        document.getElementById("redChipCountOne").style.color = "white";
        document.getElementById("blueChipCountOne").style.color = "white";
        document.getElementById("greenChipCountOne").style.color = "white";
        document.getElementById("yellowChipCountOne").style.color = "white";
        document.getElementById("redChipCountTwo").style.color = "white";
        document.getElementById("blueChipCountTwo").style.color = "white";
        document.getElementById("greenChipCountTwo").style.color = "white";
        document.getElementById("yellowChipCountTwo").style.color = "white";
        document.getElementById("redChipCountThree").style.color = "white";
        document.getElementById("blueChipCountThree").style.color = "white";
        document.getElementById("greenChipCountThree").style.color = "white";
        document.getElementById("yellowChipCountThree").style.color = "white";
        document.getElementById("redChipCountFour").style.color = "white";
        document.getElementById("blueChipCountFour").style.color = "white";
        document.getElementById("greenChipCountFour").style.color = "white";
        document.getElementById("yellowChipCountFour").style.color = "white";
        if (turnUser == userr) {
          segment = "disTrade";
          document.getElementById("discard").style.display = "block";
          document.getElementById("trade").style.display = "block";
          document.getElementById("done").style.display = "block";
        }
      } else if (event.message[0] == "discardChip") {
        var tempChip = event.message[1];
        var tempNum = event.message[2];
        var tempUser = event.message[3];
        if (document.getElementById("playTwoUserName").innerHTML == tempUser) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountTwo").innerHTML)-tempNum);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountTwo").innerHTML)-tempNum);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountTwo").innerHTML)-tempNum);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountTwo").innerHTML)-tempNum);
          }
        } else if (document.getElementById("playThreeUserName").innerHTML == tempUser) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountThree").innerHTML)-tempNum);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountThree").innerHTML)-tempNum);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountThree").innerHTML)-tempNum);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountThree").innerHTML)-tempNum);
          }
        } else if (document.getElementById("playFourUserName").innerHTML == tempUser) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountFour").innerHTML)-tempNum);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountFour").innerHTML)-tempNum);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountFour").innerHTML)-tempNum);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountFour").innerHTML)-tempNum);
          }
        }
      } else if (event.message[0] == "transferChip") {
        var tempChip = event.message[1];
        var tempNum = event.message[2];
        var tempUser = event.message[3];
        var tempUserGet = event.message[4];
        if (document.getElementById("playTwoUserName").innerHTML == tempUser) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountTwo").innerHTML)-tempNum);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountTwo").innerHTML)-tempNum);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountTwo").innerHTML)-tempNum);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountTwo").innerHTML)-tempNum);
          }
        } else if (document.getElementById("playThreeUserName").innerHTML == tempUser) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountThree").innerHTML)-tempNum);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountThree").innerHTML)-tempNum);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountThree").innerHTML)-tempNum);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountThree").innerHTML)-tempNum);
          }
        } else if (document.getElementById("playFourUserName").innerHTML == tempUser) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountFour").innerHTML)-tempNum);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountFour").innerHTML)-tempNum);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountFour").innerHTML)-tempNum);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountFour").innerHTML)-tempNum);
          }
        }
        if (document.getElementById("playOneUserName").innerHTML == tempUserGet) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountOne").innerHTML)+tempNum);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountOne").innerHTML)+tempNum);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountOne").innerHTML)+tempNum);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountOne").innerHTML)+tempNum);
          }
        } else if (document.getElementById("playTwoUserName").innerHTML == tempUserGet) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountTwo").innerHTML)+tempNum);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountTwo").innerHTML)+tempNum);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountTwo").innerHTML)+tempNum);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountTwo").innerHTML)+tempNum);
          }
        } else if (document.getElementById("playThreeUserName").innerHTML == tempUserGet) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountThree").innerHTML)+tempNum);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountThree").innerHTML)+tempNum);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountThree").innerHTML)+tempNum);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountThree").innerHTML)+tempNum);
          }
        } else if (document.getElementById("playFourUserName").innerHTML == tempUserGet) {
          if (tempChip == "redChip.jpg") {
            document.getElementById("redChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountFour").innerHTML)+tempNum);
          } else if (tempChip == "blueChip.jpg") {
            document.getElementById("blueChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountFour").innerHTML)+tempNum);
          } else if (tempChip == "greenChip.jpg") {
            document.getElementById("greenChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountFour").innerHTML)+tempNum);
          } else if (tempChip == "yellowChip.jpg") {
            document.getElementById("yellowChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountFour").innerHTML)+tempNum);
          }
        }
      } else if (event.message[0] == "newTurn") {
        if (event.message[1] == userr) {
          turnUser = userr;
          segment = "placement";
          document.getElementById("turnPlateOne").style.display = "block";
          document.getElementById("turnPlateTwo").style.display = "none";
          document.getElementById("turnPlateThree").style.display = "none";
          document.getElementById("turnPlateFour").style.display = "none";
        } else if (event.message[1] == document.getElementById("playTwoUserName").innerHTML) {
          turnUser = event.message[1];
          segment = "waiting";
          document.getElementById("turnPlateOne").style.display = "none";
          document.getElementById("turnPlateTwo").style.display = "block";
          document.getElementById("turnPlateThree").style.display = "none";
          document.getElementById("turnPlateFour").style.display = "none";
        } else if (event.message[1] == document.getElementById("playThreeUserName").innerHTML) {
          turnUser = event.message[1];
          segment = "waiting";
          document.getElementById("turnPlateOne").style.display = "none";
          document.getElementById("turnPlateTwo").style.display = "none";
          document.getElementById("turnPlateThree").style.display = "block";
          document.getElementById("turnPlateFour").style.display = "none";
        } else if (event.message[1] == document.getElementById("playFourUserName").innerHTML) {
          turnUser = event.message[1];
          segment = "waiting";
          document.getElementById("turnPlateOne").style.display = "none";
          document.getElementById("turnPlateTwo").style.display = "none";
          document.getElementById("turnPlateThree").style.display = "none";
          document.getElementById("turnPlateFour").style.display = "block";
        }
      }
    }
  }
});

function stackChip() {
  var c = -1;
  var temper = "";
  if (document.getElementById("playOneName").style.color == "red") {
    inStack[0] = true;
  } else if (document.getElementById("playOneName").style.color == "blue") {
    inStack[1] = true;
  } else if (document.getElementById("playOneName").style.color == "green") {
    inStack[2] = true;
  } else if (document.getElementById("playOneName").style.color == "yellow") {
    inStack[3] = true;
  }
  var thisOne = false;
  if (place > 2) {
    while (((JSON.parse((chipSlots[place+c].style.left).slice(0, -1)))-(JSON.parse((chipSlots[place+c-1].style.left).slice(0, -1))) == 3 || c == -1) && thisOne == false) {
      console.log(chipSlots[place+c].src);
      if ((JSON.parse((chipSlots[place+c].style.left).slice(0, -1)))-(JSON.parse((chipSlots[place+c-1].style.left).slice(0, -1))) != 3) {
        thisOne = true;
      }
      if ((chipSlots[place+c].src).includes("redChip.jpg")) {
        if (inStack[1] == true && inStack[2] == true && inStack[3] == true && inStack[0] != true) {
          temper = "red";
        }
        inStack[0] = true;
      } else if ((chipSlots[place+c].src).includes("blueChip.jpg")) {
        if (inStack[1] != true && inStack[2] == true && inStack[3] == true && inStack[0] == true) {
          temper = "blue";
        }
        inStack[1] = true;
      } else if ((chipSlots[place+c].src).includes("greenChip.jpg")) {
        if (inStack[1] == true && inStack[2] != true && inStack[3] == true && inStack[0] == true) {
          temper = "green";
        }
        inStack[2] = true;
      } else if ((chipSlots[place+c].src).includes("yellowChip.jpg")) {
        if (inStack[1] == true && inStack[2] == true && inStack[3] != true && inStack[0] == true) {
          temper = "red";
        }
        inStack[3] = true;
      }
      if (inStack[0] == true && inStack[1] == true && inStack[2] == true && inStack[3] == true) {
        inStack[4] = temper;
      }
      c -= 1;
    }
  } else if (place == 2) {
    if ((JSON.parse((chipSlots[place+c].style.left).slice(0, -1)))-(JSON.parse((chipSlots[place+c-1].style.left).slice(0, -1))) == 3 || c == -1) {
      if ((chipSlots[place-1].src).includes("redChip.jpg")) {
        inStack[0] = true;
      } else if ((chipSlots[place-1].src).includes("blueChip.jpg")) {
        inStack[1] = true;
      } else if ((chipSlots[place-1].src).includes("greenChip.jpg")) {
        inStack[2] = true;
      } else if ((chipSlots[place-1].src).includes("yellowChip.jpg")) {
        inStack[3] = true;
      }
      if ((JSON.parse((chipSlots[place-1].style.left).slice(0, -1)))-(JSON.parse((chipSlots[place-2].style.left).slice(0, -1))) == 3) {
        if ((chipSlots[place-2].src).includes("redChip.jpg")) {
          inStack[0] = true;
        } else if ((chipSlots[place-2].src).includes("blueChip.jpg")) {
          inStack[1] = true;
        } else if ((chipSlots[place-2].src).includes("greenChip.jpg")) {
          inStack[2] = true;
        } else if ((chipSlots[place-2].src).includes("yellowChip.jpg")) {
          inStack[3] = true;
        }
      }
    } else {
      if ((chipSlots[place-1].src).includes("redChip.jpg")) {
        inStack[0] = true;
      } else if ((chipSlots[place-1].src).includes("blueChip.jpg")) {
        inStack[1] = true;
      } else if ((chipSlots[place-1].src).includes("greenChip.jpg")) {
        inStack[2] = true;
      } else if ((chipSlots[place-1].src).includes("yellowChip.jpg")) {
        inStack[3] = true;
      }
    }
  } else {
    if ((chipSlots[place-1].src).includes("redChip.jpg")) {
      inStack[0] = true;
    } else if ((chipSlots[place-1].src).includes("blueChip.jpg")) {
      inStack[1] = true;
    } else if ((chipSlots[place-1].src).includes("greenChip.jpg")) {
      inStack[2] = true;
    } else if ((chipSlots[place-1].src).includes("yellowChip.jpg")) {
      inStack[3] = true;
    }
  }
  stackHeight = 1;
  var useThis = false;
  while (chipSlots[place-stackHeight].src != "" && useThis == false) {
    if (place-stackHeight == 0) {
      useThis = true;
    } else {
      stackHeight += 1;
    }
  }
  stackHeight -= 1;
  if (JSON.parse(document.getElementById("redChipCountOne").innerHTML)>0) {
    document.getElementById("redChipCountOne").style.color = "blue";
  }
  if (JSON.parse(document.getElementById("blueChipCountOne").innerHTML)>0) {
    document.getElementById("blueChipCountOne").style.color = "blue";
  }
  if (JSON.parse(document.getElementById("greenChipCountOne").innerHTML)>0) {
    document.getElementById("greenChipCountOne").style.color = "blue";
  }
  if (JSON.parse(document.getElementById("yellowChipCountOne").innerHTML)>0) {
    document.getElementById("yellowChipCountOne").style.color = "blue";
  }
}

function placeChip() {
  if (document.getElementById("playOneName").style.color == "red") {
    inStack[0] = true;
  } else if (document.getElementById("playOneName").style.color == "blue") {
    inStack[1] = true;
  } else if (document.getElementById("playOneName").style.color == "green") {
    inStack[2] = true;
  } else if (document.getElementById("playOneName").style.color == "yellow") {
    inStack[3] = true;
  }
  if (JSON.parse(document.getElementById("redChipCountOne").innerHTML)>0) {
    document.getElementById("redChipCountOne").style.color = "green";
  }
  if (JSON.parse(document.getElementById("blueChipCountOne").innerHTML)>0) {
    document.getElementById("blueChipCountOne").style.color = "green";
  }
  if (JSON.parse(document.getElementById("greenChipCountOne").innerHTML)>0) {
    document.getElementById("greenChipCountOne").style.color = "green";
  }
  if (JSON.parse(document.getElementById("yellowChipCountOne").innerHTML)>0) {
    document.getElementById("yellowChipCountOne").style.color = "green";
  }
}

function push() {
  console.log("push");
  var i = 0;
  while (chipSlots[place+i].src != "" && place+i < 28) {
    i += 1;
  }
  console.log(i);
  console.log(place+i);
  if (place+i < 27) {
    while (i > 0) {
      chipSlots[place+i].src = chipSlots[place+i-1].src;
      if ((JSON.parse((chipSlots[place].style.left).slice(0, -1)))-(JSON.parse((chipSlots[place-1].style.left).slice(0, -1))) <= 14) {
        chipSlots[place+i].style.left = JSON.stringify(JSON.parse((chipSlots[place+i-1].style.left).slice(0, -1))+14)+"%";
      } else {
        chipSlots[place+i].style.left = chipSlots[place+i-1].style.left;
      }
      chipSlots[place+i].style.top = chipSlots[place+i-1].style.top;
      i -= 1;
    }
    chipSlots[place].style.left = JSON.stringify(JSON.parse((chipSlots[place-1].style.left).slice(0, -1))+3)+"%";
    chipSlots[place].style.top = chipSlots[place-1].style.top;
    console.log("up");
  } else {
    console.log("back");
    i = 0;
    while (chipSlots[place-i].src != "") {
      i += 1;
    }
    while (i > 0) {
      console.log(i);
      chipSlots[place-i].src = chipSlots[place-i+1].src;
      if ((JSON.parse((chipSlots[place].style.left).slice(0, -1)))-(JSON.parse((chipSlots[place-1].style.left).slice(0, -1))) <= 14) {
        console.log("one");
        chipSlots[place-i].style.left = JSON.stringify(JSON.parse((chipSlots[place-i+1].style.left).slice(0, -1))-14)+"%";
      } else {
        console.log("two");
        chipSlots[place-i].style.left = chipSlots[place-i+1].style.left;
      }
      chipSlots[place-i].style.top = chipSlots[place-i+1].style.top;
      i -= 1;
    }
    chipSlots[place-1].style.left = JSON.stringify(JSON.parse((chipSlots[place-2].style.left).slice(0, -1))+3)+"%";
    chipSlots[place-1].style.top = chipSlots[place-2].style.top;
  }
}

function capture(place) {
  console.log(place);
  var player = 0;
  if ((chipSlots[place].src).includes("redChip.jpg")) {
    if (document.getElementById("playOneName").style.color == "red") {
      player = 0;
    } else if (document.getElementById("playTwoName").style.color == "red") {
      player = 1;
    } else if (document.getElementById("playThreeName").style.color == "red") {
      player = 2;
    } else if (document.getElementById("playFourName").style.color == "red") {
      player = 3;
    }
  } else if ((chipSlots[place].src).includes("blueChip.jpg")) {
    if (document.getElementById("playOneName").style.color == "blue") {
      player = 0;
    } else if (document.getElementById("playTwoName").style.color == "blue") {
      player = 1;
    } else if (document.getElementById("playThreeName").style.color == "blue") {
      player = 2;
    } else if (document.getElementById("playFourName").style.color == "blue") {
      player = 3;
    }
  } else if ((chipSlots[place].src).includes("greenChip.jpg")) {
    if (document.getElementById("playOneName").style.color == "green") {
      player = 0;
    } else if (document.getElementById("playTwoName").style.color == "green") {
      player = 1;
    } else if (document.getElementById("playThreeName").style.color == "green") {
      player = 2;
    } else if (document.getElementById("playFourName").style.color == "green") {
      player = 3;
    }
  } else if ((chipSlots[place].src).includes("yellowChip.jpg")) {
    if (document.getElementById("playOneName").style.color == "yellow") {
      player = 0;
    } else if (document.getElementById("playTwoName").style.color == "yellow") {
      player = 1;
    } else if (document.getElementById("playThreeName").style.color == "yellow") {
      player = 2;
    } else if (document.getElementById("playFourName").style.color == "yellow") {
      player = 3;
    }
  }
  var orThis = false;
  var c = 0;
  /*var temper = "";
  if (document.getElementById("playOneName").style.color == "red") {
    inStack[0] = true;
  } else if (document.getElementById("playOneName").style.color == "blue") {
    inStack[1] = true;
  } else if (document.getElementById("playOneName").style.color == "green") {
    inStack[2] = true;
  } else if (document.getElementById("playOneName").style.color == "yellow") {
    inStack[3] = true;
  }*/
  while ((JSON.parse((chipSlots[place+c].style.left).slice(0, -1)))-(JSON.parse((chipSlots[place+c-1].style.left).slice(0, -1))) == 3 && orThis == false) {
    /*if ((chipSlots[place+c].src).includes("redChip.jpg")) {
      if (inStack[1] == true && inStack[2] == true && inStack[3] == true && inStack[0] != true) {
        temper = "red";
      }
      inStack[0] = true;
    } else if ((chipSlots[place+c].src).includes("blueChip.jpg")) {
      if (inStack[1] != true && inStack[2] == true && inStack[3] == true && inStack[0] == true) {
        temper = "blue";
      }
      inStack[1] = true;
    } else if ((chipSlots[place+c].src).includes("greenChip.jpg")) {
      if (inStack[1] == true && inStack[2] != true && inStack[3] == true && inStack[0] == true) {
        temper = "green";
      }
      inStack[2] = true;
    } else if ((chipSlots[place+c].src).includes("yellowChip.jpg")) {
      if (inStack[1] == true && inStack[2] == true && inStack[3] != true && inStack[0] == true) {
        temper = "red";
      }
      inStack[3] = true;
    }
    if (inStack[0] == true && inStack[1] == true && inStack[2] == true && inStack[3] == true) {
      inStack[4] = temper;
    }*/
    if (place+c-1 == 0) {
      orThis = true;
    } else {
      c -= 1;
    }
  }
  if (orThis == true) {
    c -= 1;
  }
  console.log(c);
  while (c < 1) {
    if ((chipSlots[place+c].src).includes("redChip.jpg")) {
      redChips[player].innerHTML = JSON.stringify(JSON.parse(redChips[player].innerHTML)+1);
      chipSlots[place+c].removeAttribute("src");
      if (c == 0 && (JSON.parse((chipSlots[place+c+2].style.left).slice(0, -1)))-(JSON.parse((chipSlots[place+c+1].style.left).slice(0, -1))) != 3) {

      } else {
        chipSlots[place+c+1].style.left = JSON.stringify(JSON.parse((chipSlots[place+c].style.left).slice(0, -1))+14)+"%";
      }
      redChips[player].style.color = "red";
    } else if ((chipSlots[place+c].src).includes("blueChip.jpg")) {
      blueChips[player].innerHTML = JSON.stringify(JSON.parse(blueChips[player].innerHTML)+1);
      chipSlots[place+c].removeAttribute("src");
      if (c == 0 && (JSON.parse((chipSlots[place+c+2].style.left).slice(0, -1)))-(JSON.parse((chipSlots[place+c+1].style.left).slice(0, -1))) != 3) {

      } else {
        chipSlots[place+c+1].style.left = JSON.stringify(JSON.parse((chipSlots[place+c].style.left).slice(0, -1))+14)+"%";
      }
      blueChips[player].style.color = "red";
    } else if ((chipSlots[place+c].src).includes("greenChip.jpg")) {
      greenChips[player].innerHTML = JSON.stringify(JSON.parse(greenChips[player].innerHTML)+1);
      chipSlots[place+c].removeAttribute("src");
      if (c == 0 && (JSON.parse((chipSlots[place+c+2].style.left).slice(0, -1)))-(JSON.parse((chipSlots[place+c+1].style.left).slice(0, -1))) != 3) {

      } else {
        chipSlots[place+c+1].style.left = JSON.stringify(JSON.parse((chipSlots[place+c].style.left).slice(0, -1))+14)+"%";
      }
      greenChips[player].style.color = "red";
    } else if ((chipSlots[place+c].src).includes("yellowChip.jpg")) {
      yellowChips[player].innerHTML = JSON.stringify(JSON.parse(yellowChips[player].innerHTML)+1);
      chipSlots[place+c].removeAttribute("src");
      if (c == 0 && (JSON.parse((chipSlots[place+c+2].style.left).slice(0, -1)))-(JSON.parse((chipSlots[place+c+1].style.left).slice(0, -1))) != 3) {

      } else {
        chipSlots[place+c+1].style.left = JSON.stringify(JSON.parse((chipSlots[place+c].style.left).slice(0, -1))+14)+"%";
      }
      yellowChips[player].style.color = "red";
    }
    console.log(c);
    c += 1;
  }
}

document.getElementById("redChipCountOne").addEventListener("click", function() {
  document.getElementById("final").src = "redChip.jpg";
  if (document.getElementById("redChipCountOne").style.color == "green") {
    pubnub.publish({
  		channel : "game",
  		message : ["placeChip", "redChip.jpg", place, userr]
  	});
    segment = "disTrade";
    document.getElementById("discard").style.display = "block";
    document.getElementById("trade").style.display = "block";
    document.getElementById("done").style.display = "block";
    chipSlots[place - 1].src = "redChip.jpg";
    document.getElementById("redChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountOne").innerHTML) - 1);
    document.getElementById("redChipCountOne").style.color = "white";
    document.getElementById("blueChipCountOne").style.color = "white";
    document.getElementById("greenChipCountOne").style.color = "white";
    document.getElementById("yellowChipCountOne").style.color = "white";
  } else if (document.getElementById("redChipCountOne").style.color == "blue") {
    pubnub.publish({
  		channel : "game",
  		message : ["stackChip", "redChip.jpg", place, userr]
  	});
    segment = "disTrade";
    if (chipSlots[place].src != "") {
      push();
      chipSlots[place].src = "redChip.jpg";
      document.getElementById("redChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountOne").innerHTML) - 1);
      document.getElementById("redChipCountOne").style.color = "white";
      document.getElementById("blueChipCountOne").style.color = "white";
      document.getElementById("greenChipCountOne").style.color = "white";
      document.getElementById("yellowChipCountOne").style.color = "white";
      if (chipSlots[place].src == chipSlots[place-1].src) {
        segment = "capture";
        setTimeout(capture, 1500, place);
      }
      if (place != 1) {
        if (chipSlots[place-1].src == chipSlots[place-2].src && chipSlots[place-1].style.left == chipSlots[place-2].style.left) {
          segment = "capture";
          setTimeout(capture, 1500, place-1);
        }
      }
    } else {
      chipSlots[place].src = "redChip.jpg";
      chipSlots[place].style.left = JSON.stringify(JSON.parse((chipSlots[place-1].style.left).slice(0, -1))+3)+"%";
      chipSlots[place].style.top = chipSlots[place-1].style.top;
      document.getElementById("redChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountOne").innerHTML) - 1);
      document.getElementById("redChipCountOne").style.color = "white";
      document.getElementById("blueChipCountOne").style.color = "white";
      document.getElementById("greenChipCountOne").style.color = "white";
      document.getElementById("yellowChipCountOne").style.color = "white";
      if (chipSlots[place].src == chipSlots[place-1].src) {
        segment = "capture";
        setTimeout(capture, 1500, place);
      }
    }
    if (segment == "disTrade") {
      document.getElementById("discard").style.display = "block";
      document.getElementById("trade").style.display = "block";
      document.getElementById("done").style.display = "block";
    }
  } else if (document.getElementById("redChipCountOne").style.color == "red") {
    pubnub.publish({
  		channel : "game",
  		message : ["elimChip", "redChip.jpg", userr]
  	});
    if (turnUser == userr) {
      segment = "disTrade";
      document.getElementById("discard").style.display = "block";
      document.getElementById("trade").style.display = "block";
      document.getElementById("done").style.display = "block";
    }
    document.getElementById("redChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountOne").innerHTML)-1);
    document.getElementById("redChipCountOne").style.color = "white";
    document.getElementById("blueChipCountOne").style.color = "white";
    document.getElementById("greenChipCountOne").style.color = "white";
    document.getElementById("yellowChipCountOne").style.color = "white";
  } else if (document.getElementById("redChipCountOne").style.color == "purple") {
    var ad = JSON.parse(document.getElementById("redChipCountOne").innerHTML);
    var number = 0;
    number = (function ask() {
      var n = prompt('Enter how many to discard:');
      return isNaN(n) || +n > (ad) || +n < (0) ? ask() : n;
    }());
    pubnub.publish({
  		channel : "game",
  		message : ["discardChip", "redChip.jpg", number, userr]
  	});
    document.getElementById("redChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountOne").innerHTML)-number);
    document.getElementById("redChipCountOne").style.color = "white";
    document.getElementById("blueChipCountOne").style.color = "white";
    document.getElementById("greenChipCountOne").style.color = "white";
    document.getElementById("yellowChipCountOne").style.color = "white";
  } else if (document.getElementById("redChipCountOne").style.color == "yellow") {
    var ad = JSON.parse(document.getElementById("redChipCountOne").innerHTML);
    var number = 0;
    number = (function ask() {
      var n = prompt('Enter how many to transfer:');
      return isNaN(n) || +n > (ad) || +n < (0) ? ask() : n;
    }());
    temp = number;
    temp = JSON.parse(temp);
    document.getElementById("redChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountOne").innerHTML)-number);
    document.getElementById("blueChipCountOne").style.color = "white";
    document.getElementById("greenChipCountOne").style.color = "white";
    document.getElementById("yellowChipCountOne").style.color = "white";
    document.getElementById("playTwoName").style.background = "grey";
    document.getElementById("playThreeName").style.background = "grey";
    document.getElementById("playFourName").style.background = "grey";
  }
});

document.getElementById("blueChipCountOne").addEventListener("click", function() {
  document.getElementById("final").src = "blueChip.jpg";
  if (document.getElementById("blueChipCountOne").style.color == "green") {
    pubnub.publish({
  		channel : "game",
  		message : ["placeChip", "blueChip.jpg", place, userr]
  	});
    segment = "disTrade";
    document.getElementById("discard").style.display = "block";
    document.getElementById("trade").style.display = "block";
    document.getElementById("done").style.display = "block";
    chipSlots[place - 1].src = "blueChip.jpg";
    document.getElementById("blueChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountOne").innerHTML) - 1);
    document.getElementById("redChipCountOne").style.color = "white";
    document.getElementById("blueChipCountOne").style.color = "white";
    document.getElementById("greenChipCountOne").style.color = "white";
    document.getElementById("yellowChipCountOne").style.color = "white";
  } else if (document.getElementById("blueChipCountOne").style.color == "blue") {
    pubnub.publish({
  		channel : "game",
  		message : ["stackChip", "blueChip.jpg", place, userr]
  	});
    segment = "disTrade";
    if (chipSlots[place].src != "") {
      push();
      chipSlots[place].src = "blueChip.jpg";
      document.getElementById("blueChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountOne").innerHTML) - 1);
      document.getElementById("redChipCountOne").style.color = "white";
      document.getElementById("blueChipCountOne").style.color = "white";
      document.getElementById("greenChipCountOne").style.color = "white";
      document.getElementById("yellowChipCountOne").style.color = "white";
      if (chipSlots[place].src == chipSlots[place-1].src) {
        segment = "capture";
        setTimeout(capture, 1500, place);
      }
      if (place != 1) {
        if (chipSlots[place-1].src == chipSlots[place-2].src && chipSlots[place-1].style.left == chipSlots[place-2].style.left) {
          segment = "capture";
          setTimeout(capture, 1500, place-1);
        }
      }
    } else {
      chipSlots[place].src = "blueChip.jpg";
      chipSlots[place].style.left = JSON.stringify(JSON.parse((chipSlots[place-1].style.left).slice(0, -1))+3)+"%";
      chipSlots[place].style.top = chipSlots[place-1].style.top;
      document.getElementById("blueChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountOne").innerHTML) - 1);
      document.getElementById("redChipCountOne").style.color = "white";
      document.getElementById("blueChipCountOne").style.color = "white";
      document.getElementById("greenChipCountOne").style.color = "white";
      document.getElementById("yellowChipCountOne").style.color = "white";
      if (chipSlots[place].src == chipSlots[place-1].src) {
        segment = "capture";
        setTimeout(capture, 1500, place);
      }
    }
    if (segment == "disTrade") {
      document.getElementById("discard").style.display = "block";
      document.getElementById("trade").style.display = "block";
      document.getElementById("done").style.display = "block";
    }
  } else if (document.getElementById("blueChipCountOne").style.color == "red") {
    pubnub.publish({
  		channel : "game",
  		message : ["elimChip", "blueChip.jpg", userr]
  	});
    if (turnUser == userr) {
      segment = "disTrade";
      document.getElementById("discard").style.display = "block";
      document.getElementById("trade").style.display = "block";
      document.getElementById("done").style.display = "block";
    }
    document.getElementById("blueChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountOne").innerHTML)-1);
    document.getElementById("redChipCountOne").style.color = "white";
    document.getElementById("blueChipCountOne").style.color = "white";
    document.getElementById("greenChipCountOne").style.color = "white";
    document.getElementById("yellowChipCountOne").style.color = "white";
  } else if (document.getElementById("blueChipCountOne").style.color == "purple") {
    var ad = JSON.parse(document.getElementById("blueChipCountOne").innerHTML);
    var number = 0;
    number = (function ask() {
      var n = prompt('Enter how many to discard:');
      return isNaN(n) || +n > (ad) || +n < (0) ? ask() : n;
    }());
    pubnub.publish({
  		channel : "game",
  		message : ["discardChip", "blueChip.jpg", number, userr]
  	});
    document.getElementById("blueChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountOne").innerHTML)-number);
    document.getElementById("redChipCountOne").style.color = "white";
    document.getElementById("blueChipCountOne").style.color = "white";
    document.getElementById("greenChipCountOne").style.color = "white";
    document.getElementById("yellowChipCountOne").style.color = "white";
  } else if (document.getElementById("blueChipCountOne").style.color == "yellow") {
    var ad = JSON.parse(document.getElementById("blueChipCountOne").innerHTML);
    var number = 0;
    number = (function ask() {
      var n = prompt('Enter how many to transfer:');
      return isNaN(n) || +n > (ad) || +n < (0) ? ask() : n;
    }());
    temp = number;
    temp = JSON.parse(temp);
    document.getElementById("blueChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountOne").innerHTML)-number);
    document.getElementById("redChipCountOne").style.color = "white";
    document.getElementById("greenChipCountOne").style.color = "white";
    document.getElementById("yellowChipCountOne").style.color = "white";
    document.getElementById("playTwoName").style.background = "grey";
    document.getElementById("playThreeName").style.background = "grey";
    document.getElementById("playFourName").style.background = "grey";
  }
});

document.getElementById("greenChipCountOne").addEventListener("click", function() {
  document.getElementById("final").src = "greenChip.jpg";
  if (document.getElementById("greenChipCountOne").style.color == "green") {
    pubnub.publish({
  		channel : "game",
  		message : ["placeChip", "greenChip.jpg", place, userr]
  	});
    segment = "disTrade";
    document.getElementById("discard").style.display = "block";
    document.getElementById("trade").style.display = "block";
    document.getElementById("done").style.display = "block";
    chipSlots[place - 1].src = "greenChip.jpg";
    document.getElementById("greenChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountOne").innerHTML) - 1);
    document.getElementById("redChipCountOne").style.color = "white";
    document.getElementById("blueChipCountOne").style.color = "white";
    document.getElementById("greenChipCountOne").style.color = "white";
    document.getElementById("yellowChipCountOne").style.color = "white";
  } else if (document.getElementById("greenChipCountOne").style.color == "blue") {
    pubnub.publish({
  		channel : "game",
  		message : ["stackChip", "greenChip.jpg", place, userr]
  	});
    segment = "disTrade";
    if (chipSlots[place].src != "") {
      push();
      chipSlots[place].src = "greenChip.jpg";
      document.getElementById("greenChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountOne").innerHTML) - 1);
      document.getElementById("redChipCountOne").style.color = "white";
      document.getElementById("blueChipCountOne").style.color = "white";
      document.getElementById("greenChipCountOne").style.color = "white";
      document.getElementById("yellowChipCountOne").style.color = "white";
      if (chipSlots[place].src == chipSlots[place-1].src) {
        segment = "capture";
        setTimeout(capture, 1500, place);
      }
      if (place != 1) {
        if (chipSlots[place-1].src == chipSlots[place-2].src && chipSlots[place-1].style.left == chipSlots[place-2].style.left) {
          segment = "capture";
          setTimeout(capture, 1500, place-1);
        }
      }
    } else {
      chipSlots[place].src = "greenChip.jpg";
      chipSlots[place].style.left = JSON.stringify(JSON.parse((chipSlots[place-1].style.left).slice(0, -1))+3)+"%";
      chipSlots[place].style.top = chipSlots[place-1].style.top;
      document.getElementById("greenChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountOne").innerHTML) - 1);
      document.getElementById("redChipCountOne").style.color = "white";
      document.getElementById("blueChipCountOne").style.color = "white";
      document.getElementById("greenChipCountOne").style.color = "white";
      document.getElementById("yellowChipCountOne").style.color = "white";
      if (chipSlots[place].src == chipSlots[place-1].src) {
        segment = "capture";
        setTimeout(capture, 1500, place);
      }
    }
    if (segment == "disTrade") {
      document.getElementById("discard").style.display = "block";
      document.getElementById("trade").style.display = "block";
      document.getElementById("done").style.display = "block";
    }
  } else if (document.getElementById("greenChipCountOne").style.color == "red") {
    pubnub.publish({
  		channel : "game",
  		message : ["elimChip", "greenChip.jpg", userr]
  	});
    if (turnUser == userr) {
      segment = "disTrade";
      document.getElementById("discard").style.display = "block";
      document.getElementById("trade").style.display = "block";
      document.getElementById("done").style.display = "block";
    }
    document.getElementById("greenChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountOne").innerHTML)-1);
    document.getElementById("redChipCountOne").style.color = "white";
    document.getElementById("blueChipCountOne").style.color = "white";
    document.getElementById("greenChipCountOne").style.color = "white";
    document.getElementById("yellowChipCountOne").style.color = "white";
  } else if (document.getElementById("greenChipCountOne").style.color == "purple") {
    var ad = JSON.parse(document.getElementById("greenChipCountOne").innerHTML);
    var number = 0;
    number = (function ask() {
      var n = prompt('Enter how many to discard:');
      return isNaN(n) || +n > (ad) || +n < (0) ? ask() : n;
    }());
    pubnub.publish({
  		channel : "game",
  		message : ["discardChip", "greenChip.jpg", number, userr]
  	});
    document.getElementById("greenChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountOne").innerHTML)-number);
    document.getElementById("redChipCountOne").style.color = "white";
    document.getElementById("blueChipCountOne").style.color = "white";
    document.getElementById("greenChipCountOne").style.color = "white";
    document.getElementById("yellowChipCountOne").style.color = "white";
  } else if (document.getElementById("greenChipCountOne").style.color == "yellow") {
    var ad = JSON.parse(document.getElementById("greenChipCountOne").innerHTML);
    var number = 0;
    number = (function ask() {
      var n = prompt('Enter how many to transfer:');
      return isNaN(n) || +n > (ad) || +n < (0) ? ask() : n;
    }());
    temp = number;
    temp = JSON.parse(temp);
    document.getElementById("greenChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountOne").innerHTML)-number);
    document.getElementById("redChipCountOne").style.color = "white";
    document.getElementById("blueChipCountOne").style.color = "white";
    document.getElementById("yellowChipCountOne").style.color = "white";
    document.getElementById("playTwoName").style.background = "grey";
    document.getElementById("playThreeName").style.background = "grey";
    document.getElementById("playFourName").style.background = "grey";
  }
});

document.getElementById("yellowChipCountOne").addEventListener("click", function() {
  document.getElementById("final").src = "yellowChip.jpg";
  if (document.getElementById("yellowChipCountOne").style.color == "green") {
    pubnub.publish({
  		channel : "game",
  		message : ["placeChip", "yellowChip.jpg", place, userr]
  	});
    segment = "disTrade";
    document.getElementById("discard").style.display = "block";
    document.getElementById("trade").style.display = "block";
    document.getElementById("done").style.display = "block";
    chipSlots[place - 1].src = "yellowChip.jpg";
    document.getElementById("yellowChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountOne").innerHTML) - 1);
    document.getElementById("redChipCountOne").style.color = "white";
    document.getElementById("blueChipCountOne").style.color = "white";
    document.getElementById("greenChipCountOne").style.color = "white";
    document.getElementById("yellowChipCountOne").style.color = "white";
  } else if (document.getElementById("yellowChipCountOne").style.color == "blue") {
    pubnub.publish({
  		channel : "game",
  		message : ["stackChip", "yellowChip.jpg", place, userr]
  	});
    segment = "disTrade";
    if (chipSlots[place].src != "") {
      push();
      chipSlots[place].src = "yellowChip.jpg";
      document.getElementById("yellowChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountOne").innerHTML) - 1);
      document.getElementById("redChipCountOne").style.color = "white";
      document.getElementById("blueChipCountOne").style.color = "white";
      document.getElementById("greenChipCountOne").style.color = "white";
      document.getElementById("yellowChipCountOne").style.color = "white";
      if (chipSlots[place].src == chipSlots[place-1].src) {
        segment = "capture";
        setTimeout(capture, 1500, place);
      }
      if (place != 1) {
        if (chipSlots[place-1].src == chipSlots[place-2].src && chipSlots[place-1].style.left == chipSlots[place-2].style.left) {
          segment = "capture";
          setTimeout(capture, 1500, place-1);
        }
      }
    } else {
      chipSlots[place].src = "yellowChip.jpg";
      chipSlots[place].style.left = JSON.stringify(JSON.parse((chipSlots[place-1].style.left).slice(0, -1))+3)+"%";
      chipSlots[place].style.top = chipSlots[place-1].style.top;
      document.getElementById("yellowChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountOne").innerHTML) - 1);
      document.getElementById("redChipCountOne").style.color = "white";
      document.getElementById("blueChipCountOne").style.color = "white";
      document.getElementById("greenChipCountOne").style.color = "white";
      document.getElementById("yellowChipCountOne").style.color = "white";
      if (chipSlots[place].src == chipSlots[place-1].src) {
        segment = "capture";
        setTimeout(capture, 1500, place);
      }
    }
    if (segment == "disTrade") {
      document.getElementById("discard").style.display = "block";
      document.getElementById("trade").style.display = "block";
      document.getElementById("done").style.display = "block";
    }
  } else if (document.getElementById("yellowChipCountOne").style.color == "red") {
    pubnub.publish({
  		channel : "game",
  		message : ["elimChip", "yellowChip.jpg", userr]
  	});
    if (turnUser == userr) {
      segment = "disTrade";
      document.getElementById("discard").style.display = "block";
      document.getElementById("trade").style.display = "block";
      document.getElementById("done").style.display = "block";
    }
    document.getElementById("yellowChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountOne").innerHTML)-1);
    document.getElementById("redChipCountOne").style.color = "white";
    document.getElementById("blueChipCountOne").style.color = "white";
    document.getElementById("greenChipCountOne").style.color = "white";
    document.getElementById("yellowChipCountOne").style.color = "white";
  } else if (document.getElementById("yellowChipCountOne").style.color == "purple") {
    var ad = JSON.parse(document.getElementById("yellowChipCountOne").innerHTML);
    var number = 0;
    number = (function ask() {
      var n = prompt('Enter how many to discard:');
      return isNaN(n) || +n > (ad) || +n < (0) ? ask() : n;
    }());
    pubnub.publish({
  		channel : "game",
  		message : ["discardChip", "yellowChip.jpg", number, userr]
  	});
    document.getElementById("yellowChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountOne").innerHTML)-number);
    document.getElementById("redChipCountOne").style.color = "white";
    document.getElementById("blueChipCountOne").style.color = "white";
    document.getElementById("greenChipCountOne").style.color = "white";
    document.getElementById("yellowChipCountOne").style.color = "white";
  } else if (document.getElementById("yellowChipCountOne").style.color == "yellow") {
    var ad = JSON.parse(document.getElementById("yellowChipCountOne").innerHTML);
    var number = 0;
    number = (function ask() {
      var n = prompt('Enter how many to transfer:');
      return isNaN(n) || +n > (ad) || +n < (0) ? ask() : n;
    }());
    temp = number;
    temp = JSON.parse(temp);
    document.getElementById("yellowChipCountOne").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountOne").innerHTML)-number);
    document.getElementById("redChipCountOne").style.color = "white";
    document.getElementById("blueChipCountOne").style.color = "white";
    document.getElementById("greenChipCountOne").style.color = "white";
    document.getElementById("playTwoName").style.background = "grey";
    document.getElementById("playThreeName").style.background = "grey";
    document.getElementById("playFourName").style.background = "grey";
  }
});

document.getElementById("playOneName").addEventListener("click", function() {
  if (userr == turnUser) {
    if (document.getElementById("playOneName").style.background == "white") {
      pubnub.publish({
    		channel : "game",
    		message : ["newTurn", userr]
    	});
      document.getElementById("turnPlateOne").style.display = "none";
      document.getElementById("turnPlateOne").style.display = "block";
      segment = "waiting";
      inStack = [false, false, false, false, ""];
      turnUser = document.getElementById("playOneUserName").innerHTML;
      document.getElementById("playOneName").style.background = "black";
      document.getElementById("playTwoName").style.background = "black";
      document.getElementById("playThreeName").style.background = "black";
      document.getElementById("playFourName").style.background = "black";
    }
  }
});

document.getElementById("playTwoName").addEventListener("click", function() {
  if (userr == turnUser) {
    if (document.getElementById("playTwoName").style.background == "grey") {
      if (document.getElementById("redChipCountOne").style.color == "yellow") {
        pubnub.publish({
      		channel : "game",
      		message : ["transferChip", "redChip.jpg", temp, userr, document.getElementById("playTwoUserName").innerHTML]
      	});
        document.getElementById("redChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountTwo").innerHTML)+temp);
        document.getElementById("playTwoName").style.background = "black";
        document.getElementById("playThreeName").style.background = "black";
        document.getElementById("playFourName").style.background = "black";
        document.getElementById("redChipCountOne").style.color = "white";
      } else if (document.getElementById("blueChipCountOne").style.color == "yellow") {
        pubnub.publish({
      		channel : "game",
      		message : ["transferChip", "blueChip.jpg", temp, userr, document.getElementById("playTwoUserName").innerHTML]
      	});
        document.getElementById("blueChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountTwo").innerHTML)+temp);
        document.getElementById("playTwoName").style.background = "black";
        document.getElementById("playThreeName").style.background = "black";
        document.getElementById("playFourName").style.background = "black";
        document.getElementById("blueChipCountOne").style.color = "white";
      } else if (document.getElementById("greenChipCountOne").style.color == "yellow") {
        pubnub.publish({
      		channel : "game",
      		message : ["transferChip", "greenChip.jpg", temp, userr, document.getElementById("playTwoUserName").innerHTML]
      	});
        document.getElementById("greenChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountTwo").innerHTML)+temp);
        document.getElementById("playTwoName").style.background = "black";
        document.getElementById("playThreeName").style.background = "black";
        document.getElementById("playFourName").style.background = "black";
        document.getElementById("greenChipCountOne").style.color = "white";
      } else if (document.getElementById("yellowChipCountOne").style.color == "yellow") {
        pubnub.publish({
      		channel : "game",
      		message : ["transferChip", "yellowChip.jpg", temp, userr, document.getElementById("playTwoUserName").innerHTML]
      	});
        document.getElementById("yellowChipCountTwo").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountTwo").innerHTML)+temp);
        document.getElementById("playTwoName").style.background = "black";
        document.getElementById("playThreeName").style.background = "black";
        document.getElementById("playFourName").style.background = "black";
        document.getElementById("yellowChipCountOne").style.color = "white";
      }
    } else if (document.getElementById("playTwoName").style.background == "white") {
      pubnub.publish({
    		channel : "game",
    		message : ["newTurn", document.getElementById("playTwoUserName").innerHTML]
    	});
      inStack = [false, false, false, false, ""];
      turnUser = document.getElementById("playTwoUserName").innerHTML;
      document.getElementById("turnPlateOne").style.display = "none";
      document.getElementById("turnPlateTwo").style.display = "block";
      segment = "waiting";
      document.getElementById("playOneName").style.background = "black";
      document.getElementById("playTwoName").style.background = "black";
      document.getElementById("playThreeName").style.background = "black";
      document.getElementById("playFourName").style.background = "black";
    }
  }
});

document.getElementById("playThreeName").addEventListener("click", function() {
  if (userr == turnUser) {
    if (document.getElementById("playThreeName").style.background == "grey") {
      if (document.getElementById("redChipCountOne").style.color == "yellow") {
        pubnub.publish({
      		channel : "game",
      		message : ["transferChip", "redChip.jpg", temp, userr, document.getElementById("playThreeUserName").innerHTML]
      	});
        document.getElementById("redChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountThree").innerHTML)+temp);
        document.getElementById("playTwoName").style.background = "black";
        document.getElementById("playThreeName").style.background = "black";
        document.getElementById("playFourName").style.background = "black";
        document.getElementById("redChipCountOne").style.color = "white";
      } else if (document.getElementById("blueChipCountOne").style.color == "yellow") {
        pubnub.publish({
      		channel : "game",
      		message : ["transferChip", "blueChip.jpg", temp, userr, document.getElementById("playThreeUserName").innerHTML]
      	});
        document.getElementById("blueChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountThree").innerHTML)+temp);
        document.getElementById("playTwoName").style.background = "black";
        document.getElementById("playThreeName").style.background = "black";
        document.getElementById("playFourName").style.background = "black";
        document.getElementById("blueChipCountOne").style.color = "white";
      } else if (document.getElementById("greenChipCountOne").style.color == "yellow") {
        pubnub.publish({
      		channel : "game",
      		message : ["transferChip", "greenChip.jpg", temp, userr, document.getElementById("playThreeUserName").innerHTML]
      	});
        document.getElementById("greenChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountThree").innerHTML)+temp);
        document.getElementById("playTwoName").style.background = "black";
        document.getElementById("playThreeName").style.background = "black";
        document.getElementById("playFourName").style.background = "black";
        document.getElementById("greenChipCountOne").style.color = "white";
      } else if (document.getElementById("yellowChipCountOne").style.color == "yellow") {
        pubnub.publish({
      		channel : "game",
      		message : ["transferChip", "yellowChip.jpg", temp, userr, document.getElementById("playThreeUserName").innerHTML]
      	});
        document.getElementById("yellowChipCountThree").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountThree").innerHTML)+temp);
        document.getElementById("playTwoName").style.background = "black";
        document.getElementById("playThreeName").style.background = "black";
        document.getElementById("playFourName").style.background = "black";
        document.getElementById("yellowChipCountOne").style.color = "white";
      }
    } else if (document.getElementById("playThreeName").style.background == "white") {
      pubnub.publish({
    		channel : "game",
    		message : ["newTurn", document.getElementById("playThreeUserName").innerHTML]
    	});
      inStack = [false, false, false, false, ""];
      turnUser = document.getElementById("playThreeUserName").innerHTML;
      document.getElementById("turnPlateOne").style.display = "none";
      document.getElementById("turnPlateThree").style.display = "block";
      segment = "waiting";
      document.getElementById("playOneName").style.background = "black";
      document.getElementById("playTwoName").style.background = "black";
      document.getElementById("playThreeName").style.background = "black";
      document.getElementById("playFourName").style.background = "black";
    }
  }
});

document.getElementById("playFourName").addEventListener("click", function() {
  if (userr == turnUser) {
    if (document.getElementById("playFourName").style.background == "grey") {
      if (document.getElementById("redChipCountOne").style.color == "yellow") {
        pubnub.publish({
      		channel : "game",
      		message : ["transferChip", "redChip.jpg", temp, userr, document.getElementById("playFourUserName").innerHTML]
      	});
        document.getElementById("redChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("redChipCountFour").innerHTML)+temp);
        document.getElementById("playTwoName").style.background = "black";
        document.getElementById("playThreeName").style.background = "black";
        document.getElementById("playFourName").style.background = "black";
        document.getElementById("redChipCountOne").style.color = "white";
      } else if (document.getElementById("blueChipCountOne").style.color == "yellow") {
        pubnub.publish({
      		channel : "game",
      		message : ["transferChip", "blueChip.jpg", temp, userr, document.getElementById("playFourUserName").innerHTML]
      	});
        document.getElementById("blueChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("blueChipCountFour").innerHTML)+temp);
        document.getElementById("playTwoName").style.background = "black";
        document.getElementById("playThreeName").style.background = "black";
        document.getElementById("playFourName").style.background = "black";
        document.getElementById("blueChipCountOne").style.color = "white";
      } else if (document.getElementById("greenChipCountOne").style.color == "yellow") {
        pubnub.publish({
      		channel : "game",
      		message : ["transferChip", "greenChip.jpg", temp, userr, document.getElementById("playFourUserName").innerHTML]
      	});
        document.getElementById("greenChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("greenChipCountFour").innerHTML)+temp);
        document.getElementById("playTwoName").style.background = "black";
        document.getElementById("playThreeName").style.background = "black";
        document.getElementById("playFourName").style.background = "black";
        document.getElementById("greenChipCountOne").style.color = "white";
      } else if (document.getElementById("yellowChipCountOne").style.color == "yellow") {
        pubnub.publish({
      		channel : "game",
      		message : ["transferChip", "yellowChip.jpg", temp, userr, document.getElementById("playFourUserName").innerHTML]
      	});
        document.getElementById("yellowChipCountFour").innerHTML = JSON.stringify(JSON.parse(document.getElementById("yellowChipCountFour").innerHTML)+temp);
        document.getElementById("playTwoName").style.background = "black";
        document.getElementById("playThreeName").style.background = "black";
        document.getElementById("playFourName").style.background = "black";
        document.getElementById("yellowChipCountOne").style.color = "white";
      }
    } else if (document.getElementById("playFourName").style.background == "white") {
      pubnub.publish({
    		channel : "game",
    		message : ["newTurn", document.getElementById("playFourUserName").innerHTML]
    	});
      inStack = [false, false, false, false, ""];
      turnUser = document.getElementById("playFourUserName").innerHTML;
      document.getElementById("turnPlateOne").style.display = "none";
      document.getElementById("turnPlateFour").style.display = "block";
      segment = "waiting";
      document.getElementById("playOneName").style.background = "black";
      document.getElementById("playTwoName").style.background = "black";
      document.getElementById("playThreeName").style.background = "black";
      document.getElementById("playFourName").style.background = "black";
    }
  }
});

document.getElementById("discard").addEventListener("click", function() {
  if (JSON.parse(document.getElementById("redChipCountOne").innerHTML)>0) {
    document.getElementById("redChipCountOne").style.color = "purple";
  }
  if (JSON.parse(document.getElementById("blueChipCountOne").innerHTML)>0) {
    document.getElementById("blueChipCountOne").style.color = "purple";
  }
  if (JSON.parse(document.getElementById("greenChipCountOne").innerHTML)>0) {
    document.getElementById("greenChipCountOne").style.color = "purple";
  }
  if (JSON.parse(document.getElementById("yellowChipCountOne").innerHTML)>0) {
    document.getElementById("yellowChipCountOne").style.color = "purple";
  }
  if (document.getElementById("playOneName").style.color == "red") {
    document.getElementById("redChipCountOne").style.color = "white";
  } else if (document.getElementById("playOneName").style.color == "blue") {
    document.getElementById("blueChipCountOne").style.color = "white";
  } else if (document.getElementById("playOneName").style.color == "green") {
    document.getElementById("greenChipCountOne").style.color = "white";
  } else if (document.getElementById("playOneName").style.color == "yellow") {
    document.getElementById("yellowChipCountOne").style.color = "white";
  }
});

document.getElementById("trade").addEventListener("click", function() {
  if (JSON.parse(document.getElementById("redChipCountOne").innerHTML)>0) {
    document.getElementById("redChipCountOne").style.color = "yellow";
  }
  if (JSON.parse(document.getElementById("blueChipCountOne").innerHTML)>0) {
    document.getElementById("blueChipCountOne").style.color = "yellow";
  }
  if (JSON.parse(document.getElementById("greenChipCountOne").innerHTML)>0) {
    document.getElementById("greenChipCountOne").style.color = "yellow";
  }
  if (JSON.parse(document.getElementById("yellowChipCountOne").innerHTML)>0) {
    document.getElementById("yellowChipCountOne").style.color = "yellow";
  }
  if (document.getElementById("playOneName").style.color == "red") {
    document.getElementById("redChipCountOne").style.color = "white";
  } else if (document.getElementById("playOneName").style.color == "blue") {
    document.getElementById("blueChipCountOne").style.color = "white";
  } else if (document.getElementById("playOneName").style.color == "green") {
    document.getElementById("greenChipCountOne").style.color = "white";
  } else if (document.getElementById("playOneName").style.color == "yellow") {
    document.getElementById("yellowChipCountOne").style.color = "white";
  }
});

document.getElementById("done").addEventListener("click", function() {
  segment = "turnChoose";
  if (inStack[0] == false) {
    if (document.getElementById("playOneName").style.color == "red") {
      document.getElementById("playOneName").style.background = "white";
    } else if (document.getElementById("playTwoName").style.color == "red") {
      document.getElementById("playTwoName").style.background = "white";
    } else if (document.getElementById("playThreeName").style.color == "red") {
      document.getElementById("playThreeName").style.background = "white";
    } else if (document.getElementById("playFourName").style.color == "red") {
      document.getElementById("playFourName").style.background = "white";
    }
  }
  if (inStack[1] == false) {
    if (document.getElementById("playOneName").style.color == "blue") {
      document.getElementById("playOneName").style.background = "white";
    } else if (document.getElementById("playTwoName").style.color == "blue") {
      document.getElementById("playTwoName").style.background = "white";
    } else if (document.getElementById("playThreeName").style.color == "blue") {
      document.getElementById("playThreeName").style.background = "white";
    } else if (document.getElementById("playFourName").style.color == "blue") {
      document.getElementById("playFourName").style.background = "white";
    }
  }
  if (inStack[2] == false) {
    if (document.getElementById("playOneName").style.color == "green") {
      document.getElementById("playOneName").style.background = "white";
    } else if (document.getElementById("playTwoName").style.color == "green") {
      document.getElementById("playTwoName").style.background = "white";
    } else if (document.getElementById("playThreeName").style.color == "green") {
      document.getElementById("playThreeName").style.background = "white";
    } else if (document.getElementById("playFourName").style.color == "green") {
      document.getElementById("playFourName").style.background = "white";
    }
  }
  if (inStack[3] == false) {
    if (document.getElementById("playOneName").style.color == "yellow") {
      document.getElementById("playOneName").style.background = "white";
    } else if (document.getElementById("playTwoName").style.color == "yellow") {
      document.getElementById("playTwoName").style.background = "white";
    } else if (document.getElementById("playThreeName").style.color == "yellow") {
      document.getElementById("playThreeName").style.background = "white";
    } else if (document.getElementById("playFourName").style.color == "yellow") {
      document.getElementById("playFourName").style.background = "white";
    }
  }
  if (inStack[0] == true && inStack[1] == true && inStack[2] == true && inStack[3] == true) {
    if (document.getElementById("playOneName").style.color == inStack[4]) {
      document.getElementById("playOneName").style.background = "white";
    } else if (document.getElementById("playTwoName").style.color == inStack[4]) {
      document.getElementById("playTwoName").style.background = "white";
    } else if (document.getElementById("playThreeName").style.color == inStack[4]) {
      document.getElementById("playThreeName").style.background = "white";
    } else if (document.getElementById("playFourName").style.color == inStack[4]) {
      document.getElementById("playFourName").style.background = "white";
    }
  }
  document.getElementById("discard").style.display = "none";
  document.getElementById("trade").style.display = "none";
  document.getElementById("done").style.display = "none";
  document.getElementById("redChipCountOne").style.color = "white";
  document.getElementById("blueChipCountOne").style.color = "white";
  document.getElementById("greenChipCountOne").style.color = "white";
  document.getElementById("yellowChipCountOne").style.color = "white";
});

document.getElementById("chipOne").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipOne").src).includes("redChip.jpg") || (document.getElementById("chipOne").src).includes("blueChip.jpg") || (document.getElementById("chipOne").src).includes("greenChip.jpg") || (document.getElementById("chipOne").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipOne").src).includes("redChip.jpg")) {
        place = 1;
        stackChip();
      } else if ((document.getElementById("chipOne").src).includes("blueChip.jpg")) {
        place = 1;
        stackChip();
      } else if ((document.getElementById("chipOne").src).includes("greenChip.jpg")) {
        place = 1;
        stackChip();
      } else if ((document.getElementById("chipOne").src).includes("yellowChip.jpg")) {
        place = 1;
        stackChip();
      }
    } else {
      place = 1;
      placeChip();
    }
  }
});

document.getElementById("chipTwo").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipTwo").src).includes("redChip.jpg") || (document.getElementById("chipTwo").src).includes("blueChip.jpg") || (document.getElementById("chipTwo").src).includes("greenChip.jpg") || (document.getElementById("chipTwo").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipTwo").src).includes("redChip.jpg")) {
        place = 2;
        stackChip();
      } else if ((document.getElementById("chipTwo").src).includes("blueChip.jpg")) {
        place = 2;
        stackChip();
      } else if ((document.getElementById("chipTwo").src).includes("greenChip.jpg")) {
        place = 2;
        stackChip();
      } else if ((document.getElementById("chipTwo").src).includes("yellowChip.jpg")) {
        place = 2;
        stackChip();
      }
    } else {
      place = 2;
      placeChip();
    }
  }
});

document.getElementById("chipThree").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipThree").src).includes("redChip.jpg") || (document.getElementById("chipThree").src).includes("blueChip.jpg") || (document.getElementById("chipThree").src).includes("greenChip.jpg") || (document.getElementById("chipThree").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipThree").src).includes("redChip.jpg")) {
        place = 3;
        stackChip();
      } else if ((document.getElementById("chipThree").src).includes("blueChip.jpg")) {
        place = 3;
        stackChip();
      } else if ((document.getElementById("chipThree").src).includes("greenChip.jpg")) {
        place = 3;
        stackChip();
      } else if ((document.getElementById("chipThree").src).includes("yellowChip.jpg")) {
        place = 3;
        stackChip();
      }
    } else {
      place = 3;
      placeChip();
    }
  }
});

document.getElementById("chipFour").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipFour").src).includes("redChip.jpg") || (document.getElementById("chipFour").src).includes("blueChip.jpg") || (document.getElementById("chipFour").src).includes("greenChip.jpg") || (document.getElementById("chipFour").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipFour").src).includes("redChip.jpg")) {
        place = 4;
        stackChip();
      } else if ((document.getElementById("chipFour").src).includes("blueChip.jpg")) {
        place = 4;
        stackChip();
      } else if ((document.getElementById("chipFour").src).includes("greenChip.jpg")) {
        place = 4;
        stackChip();
      } else if ((document.getElementById("chipFour").src).includes("yellowChip.jpg")) {
        place = 4;
        stackChip();
      }
    } else {
      place = 4;
      placeChip();
    }
  }
});

document.getElementById("chipFive").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipFive").src).includes("redChip.jpg") || (document.getElementById("chipFive").src).includes("blueChip.jpg") || (document.getElementById("chipFive").src).includes("greenChip.jpg") || (document.getElementById("chipFive").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipFive").src).includes("redChip.jpg")) {
        place = 5;
        stackChip();
      } else if ((document.getElementById("chipFive").src).includes("blueChip.jpg")) {
        place = 5;
        stackChip();
      } else if ((document.getElementById("chipFive").src).includes("greenChip.jpg")) {
        place = 5;
        stackChip();
      } else if ((document.getElementById("chipFive").src).includes("yellowChip.jpg")) {
        place = 5;
        stackChip();
      }
    } else {
      place = 5;
      placeChip();
    }
  }
});

document.getElementById("chipSix").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipSix").src).includes("redChip.jpg") || (document.getElementById("chipSix").src).includes("blueChip.jpg") || (document.getElementById("chipSix").src).includes("greenChip.jpg") || (document.getElementById("chipSix").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipSix").src).includes("redChip.jpg")) {
        place = 6;
        stackChip();
      } else if ((document.getElementById("chipSix").src).includes("blueChip.jpg")) {
        place = 6;
        stackChip();
      } else if ((document.getElementById("chipSix").src).includes("greenChip.jpg")) {
        place = 6;
        stackChip();
      } else if ((document.getElementById("chipSix").src).includes("yellowChip.jpg")) {
        place = 6;
        stackChip();
      }
    } else {
      place = 6;
      placeChip();
    }
  }
});

document.getElementById("chipSeven").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipSeven").src).includes("redChip.jpg") || (document.getElementById("chipSeven").src).includes("blueChip.jpg") || (document.getElementById("chipSeven").src).includes("greenChip.jpg") || (document.getElementById("chipSeven").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipSeven").src).includes("redChip.jpg")) {
        place = 7;
        stackChip();
      } else if ((document.getElementById("chipSeven").src).includes("blueChip.jpg")) {
        place = 7;
        stackChip();
      } else if ((document.getElementById("chipSeven").src).includes("greenChip.jpg")) {
        place = 7;
        stackChip();
      } else if ((document.getElementById("chipSeven").src).includes("yellowChip.jpg")) {
        place = 7;
        stackChip();
      }
    } else {
      place = 7;
      placeChip();
    }
  }
});

document.getElementById("chipEight").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipEight").src).includes("redChip.jpg") || (document.getElementById("chipEight").src).includes("blueChip.jpg") || (document.getElementById("chipEight").src).includes("greenChip.jpg") || (document.getElementById("chipEight").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipEight").src).includes("redChip.jpg")) {
        place = 8;
        stackChip();
      } else if ((document.getElementById("chipEight").src).includes("blueChip.jpg")) {
        place = 8;
        stackChip();
      } else if ((document.getElementById("chipEight").src).includes("greenChip.jpg")) {
        place = 8;
        stackChip();
      } else if ((document.getElementById("chipEight").src).includes("yellowChip.jpg")) {
        place = 8;
        stackChip();
      }
    } else {
      place = 8;
      placeChip();
    }
  }
});

document.getElementById("chipNine").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipNine").src).includes("redChip.jpg") || (document.getElementById("chipNine").src).includes("blueChip.jpg") || (document.getElementById("chipNine").src).includes("greenChip.jpg") || (document.getElementById("chipNine").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipNine").src).includes("redChip.jpg")) {
        place = 9;
        stackChip();
      } else if ((document.getElementById("chipNine").src).includes("blueChip.jpg")) {
        place = 9;
        stackChip();
      } else if ((document.getElementById("chipNine").src).includes("greenChip.jpg")) {
        place = 9;
        stackChip();
      } else if ((document.getElementById("chipNine").src).includes("yellowChip.jpg")) {
        place = 9;
        stackChip();
      }
    } else {
      place = 9;
      placeChip();
    }
  }
});

document.getElementById("chipTen").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipTen").src).includes("redChip.jpg") || (document.getElementById("chipTen").src).includes("blueChip.jpg") || (document.getElementById("chipTen").src).includes("greenChip.jpg") || (document.getElementById("chipTen").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipTen").src).includes("redChip.jpg")) {
        place = 10;
        stackChip();
      } else if ((document.getElementById("chipTen").src).includes("blueChip.jpg")) {
        place = 10;
        stackChip();
      } else if ((document.getElementById("chipTen").src).includes("greenChip.jpg")) {
        place = 10;
        stackChip();
      } else if ((document.getElementById("chipTen").src).includes("yellowChip.jpg")) {
        place = 10;
        stackChip();
      }
    } else {
      place = 10;
      placeChip();
    }
  }
});

document.getElementById("chipEleven").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipEleven").src).includes("redChip.jpg") || (document.getElementById("chipEleven").src).includes("blueChip.jpg") || (document.getElementById("chipEleven").src).includes("greenChip.jpg") || (document.getElementById("chipEleven").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipEleven").src).includes("redChip.jpg")) {
        place = 11;
        stackChip();
      } else if ((document.getElementById("chipEleven").src).includes("blueChip.jpg")) {
        place = 11;
        stackChip();
      } else if ((document.getElementById("chipEleven").src).includes("greenChip.jpg")) {
        place = 11;
        stackChip();
      } else if ((document.getElementById("chipEleven").src).includes("yellowChip.jpg")) {
        place = 11;
        stackChip();
      }
    } else {
      place = 11;
      placeChip();
    }
  }
});

document.getElementById("chipTwelve").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipTwelve").src).includes("redChip.jpg") || (document.getElementById("chipTwelve").src).includes("blueChip.jpg") || (document.getElementById("chipTwelve").src).includes("greenChip.jpg") || (document.getElementById("chipTwelve").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipTwelve").src).includes("redChip.jpg")) {
        place = 12;
        stackChip();
      } else if ((document.getElementById("chipTwelve").src).includes("blueChip.jpg")) {
        place = 12;
        stackChip();
      } else if ((document.getElementById("chipTwelve").src).includes("greenChip.jpg")) {
        place = 12;
        stackChip();
      } else if ((document.getElementById("chipTwelve").src).includes("yellowChip.jpg")) {
        place = 12;
        stackChip();
      }
    } else {
      place = 12;
      placeChip();
    }
  }
});

document.getElementById("chipThirteen").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipThirteen").src).includes("redChip.jpg") || (document.getElementById("chipThirteen").src).includes("blueChip.jpg") || (document.getElementById("chipThirteen").src).includes("greenChip.jpg") || (document.getElementById("chipThirteen").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipThirteen").src).includes("redChip.jpg")) {
        place = 13;
        stackChip();
      } else if ((document.getElementById("chipThirteen").src).includes("blueChip.jpg")) {
        place = 13;
        stackChip();
      } else if ((document.getElementById("chipThirteen").src).includes("greenChip.jpg")) {
        place = 13;
        stackChip();
      } else if ((document.getElementById("chipThirteen").src).includes("yellowChip.jpg")) {
        place = 13;
        stackChip();
      }
    } else {
      place = 13;
      placeChip();
    }
  }
});

document.getElementById("chipFourteen").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipFourteen").src).includes("redChip.jpg") || (document.getElementById("chipFourteen").src).includes("blueChip.jpg") || (document.getElementById("chipFourteen").src).includes("greenChip.jpg") || (document.getElementById("chipFourteen").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipFourteen").src).includes("redChip.jpg")) {
        place = 14;
        stackChip();
      } else if ((document.getElementById("chipFourteen").src).includes("blueChip.jpg")) {
        place = 14;
        stackChip();
      } else if ((document.getElementById("chipFourteen").src).includes("greenChip.jpg")) {
        place = 14;
        stackChip();
      } else if ((document.getElementById("chipFourteen").src).includes("yellowChip.jpg")) {
        place = 14;
        stackChip();
      }
    } else {
      place = 14;
      placeChip();
    }
  }
});

document.getElementById("chipFifteen").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipFifteen").src).includes("redChip.jpg") || (document.getElementById("chichipFifteenpOne").src).includes("blueChip.jpg") || (document.getElementById("chipFifteen").src).includes("greenChip.jpg") || (document.getElementById("chipFifteen").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipFifteen").src).includes("redChip.jpg")) {
        place = 15;
        stackChip();
      } else if ((document.getElementById("chipFifteen").src).includes("blueChip.jpg")) {
        place = 15;
        stackChip();
      } else if ((document.getElementById("chipFifteen").src).includes("greenChip.jpg")) {
        place = 15;
        stackChip();
      } else if ((document.getElementById("chipFifteen").src).includes("yellowChip.jpg")) {
        place = 15;
        stackChip();
      }
    } else {
      place = 15;
      placeChip();
    }
  }
});

document.getElementById("chipSixteen").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipSixteen").src).includes("redChip.jpg") || (document.getElementById("chipSixteen").src).includes("blueChip.jpg") || (document.getElementById("chipSixteen").src).includes("greenChip.jpg") || (document.getElementById("chipSixteen").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipSixteen").src).includes("redChip.jpg")) {
        place = 16;
        stackChip();
      } else if ((document.getElementById("chipSixteen").src).includes("blueChip.jpg")) {
        place = 16;
        stackChip();
      } else if ((document.getElementById("chipSixteen").src).includes("greenChip.jpg")) {
        place = 16;
        stackChip();
      } else if ((document.getElementById("chipSixteen").src).includes("yellowChip.jpg")) {
        place = 16;
        stackChip();
      }
    } else {
      place = 16;
      placeChip();
    }
  }
});

document.getElementById("chipSeventeen").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipSeventeen").src).includes("redChip.jpg") || (document.getElementById("chipSeventeen").src).includes("blueChip.jpg") || (document.getElementById("chipSeventeen").src).includes("greenChip.jpg") || (document.getElementById("chipSeventeen").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipSeventeen").src).includes("redChip.jpg")) {
        place = 17;
        stackChip();
      } else if ((document.getElementById("chipSeventeen").src).includes("blueChip.jpg")) {
        place = 17;
        stackChip();
      } else if ((document.getElementById("chipSeventeen").src).includes("greenChip.jpg")) {
        place = 17;
        stackChip();
      } else if ((document.getElementById("chipSeventeen").src).includes("yellowChip.jpg")) {
        place = 17;
        stackChip();
      }
    } else {
      place = 17;
      placeChip();
    }
  }
});

document.getElementById("chipEighteen").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipEighteen").src).includes("redChip.jpg") || (document.getElementById("chipEighteen").src).includes("blueChip.jpg") || (document.getElementById("chipEighteen").src).includes("greenChip.jpg") || (document.getElementById("chipEighteen").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipEighteen").src).includes("redChip.jpg")) {
        place = 18;
        stackChip();
      } else if ((document.getElementById("chipEighteen").src).includes("blueChip.jpg")) {
        place = 18;
        stackChip();
      } else if ((document.getElementById("chipEighteen").src).includes("greenChip.jpg")) {
        place = 18;
        stackChip();
      } else if ((document.getElementById("chipEighteen").src).includes("yellowChip.jpg")) {
        place = 18;
        stackChip();
      }
    } else {
      place = 18;
      placeChip();
    }
  }
});

document.getElementById("chipNineteen").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipNineteen").src).includes("redChip.jpg") || (document.getElementById("chipNineteen").src).includes("blueChip.jpg") || (document.getElementById("chipNineteen").src).includes("greenChip.jpg") || (document.getElementById("chipNineteen").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipNineteen").src).includes("redChip.jpg")) {
        place = 19;
        stackChip();
      } else if ((document.getElementById("chipNineteen").src).includes("blueChip.jpg")) {
        place = 19;
        stackChip();
      } else if ((document.getElementById("chipNineteen").src).includes("greenChip.jpg")) {
        place = 19;
        stackChip();
      } else if ((document.getElementById("chipNineteen").src).includes("yellowChip.jpg")) {
        place = 19;
        stackChip();
      }
    } else {
      place = 19;
      placeChip();
    }
  }
});

document.getElementById("chipTwenty").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipTwenty").src).includes("redChip.jpg") || (document.getElementById("chipTwenty").src).includes("blueChip.jpg") || (document.getElementById("chipTwenty").src).includes("greenChip.jpg") || (document.getElementById("chipTwenty").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipTwenty").src).includes("redChip.jpg")) {
        place = 20;
        stackChip();
      } else if ((document.getElementById("chipTwenty").src).includes("blueChip.jpg")) {
        place = 20;
        stackChip();
      } else if ((document.getElementById("chipTwenty").src).includes("greenChip.jpg")) {
        place = 20;
        stackChip();
      } else if ((document.getElementById("chipTwenty").src).includes("yellowChip.jpg")) {
        place = 20;
        stackChip();
      }
    } else {
      place = 20;
      placeChip();
    }
  }
});

document.getElementById("chipTwentyone").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipTwentyone").src).includes("redChip.jpg") || (document.getElementById("chipTwentyone").src).includes("blueChip.jpg") || (document.getElementById("chipTwentyone").src).includes("greenChip.jpg") || (document.getElementById("chipTwentyone").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipTwentyone").src).includes("redChip.jpg")) {
        place = 21;
        stackChip();
      } else if ((document.getElementById("chipTwentyone").src).includes("blueChip.jpg")) {
        place = 21;
        stackChip();
      } else if ((document.getElementById("chipTwentyone").src).includes("greenChip.jpg")) {
        place = 21;
        stackChip();
      } else if ((document.getElementById("chipTwentyone").src).includes("yellowChip.jpg")) {
        place = 21;
        stackChip();
      }
    } else {
      place = 21;
      placeChip();
    }
  }
});

document.getElementById("chipTwentytwo").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipTwentytwo").src).includes("redChip.jpg") || (document.getElementById("chipTwentytwo").src).includes("blueChip.jpg") || (document.getElementById("chipTwentytwo").src).includes("greenChip.jpg") || (document.getElementById("chipTwentytwo").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipTwentytwo").src).includes("redChip.jpg")) {
        place = 22;
        stackChip();
      } else if ((document.getElementById("chipTwentytwo").src).includes("blueChip.jpg")) {
        place = 22;
        stackChip();
      } else if ((document.getElementById("chipTwentytwo").src).includes("greenChip.jpg")) {
        place = 22;
        stackChip();
      } else if ((document.getElementById("chipTwentytwo").src).includes("yellowChip.jpg")) {
        place = 22;
        stackChip();
      }
    } else {
      place = 22;
      placeChip();
    }
  }
});

document.getElementById("chipTwentythree").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipTwentythree").src).includes("redChip.jpg") || (document.getElementById("chipTwentythree").src).includes("blueChip.jpg") || (document.getElementById("chipTwentythree").src).includes("greenChip.jpg") || (document.getElementById("chipTwentythree").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipTwentythree").src).includes("redChip.jpg")) {
        place = 23;
        stackChip();
      } else if ((document.getElementById("chipTwentythree").src).includes("blueChip.jpg")) {
        place = 23;
        stackChip();
      } else if ((document.getElementById("chipTwentythree").src).includes("greenChip.jpg")) {
        place = 23;
        stackChip();
      } else if ((document.getElementById("chipTwentythree").src).includes("yellowChip.jpg")) {
        place = 23;
        stackChip();
      }
    } else {
      place = 23;
      placeChip();
    }
  }
});

document.getElementById("chipTwentyfour").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipTwentyfour").src).includes("redChip.jpg") || (document.getElementById("chipTwentyfour").src).includes("blueChip.jpg") || (document.getElementById("chipTwentyfour").src).includes("greenChip.jpg") || (document.getElementById("chipTwentyfour").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipTwentyfour").src).includes("redChip.jpg")) {
        place = 24;
        stackChip();
      } else if ((document.getElementById("chipTwentyfour").src).includes("blueChip.jpg")) {
        place = 24;
        stackChip();
      } else if ((document.getElementById("chipTwentyfour").src).includes("greenChip.jpg")) {
        place = 24;
        stackChip();
      } else if ((document.getElementById("chipTwentyfour").src).includes("yellowChip.jpg")) {
        place = 24;
        stackChip();
      }
    } else {
      place = 24;
      placeChip();
    }
  }
});

document.getElementById("chipTwentyfive").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipTwentyfive").src).includes("redChip.jpg") || (document.getElementById("chipTwentyfive").src).includes("blueChip.jpg") || (document.getElementById("chipTwentyfive").src).includes("greenChip.jpg") || (document.getElementById("chipTwentyfive").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipTwentyfive").src).includes("redChip.jpg")) {
        place = 25;
        stackChip();
      } else if ((document.getElementById("chipTwentyfive").src).includes("blueChip.jpg")) {
        place = 25;
        stackChip();
      } else if ((document.getElementById("chipTwentyfive").src).includes("greenChip.jpg")) {
        place = 25;
        stackChip();
      } else if ((document.getElementById("chipTwentyfive").src).includes("yellowChip.jpg")) {
        place = 25;
        stackChip();
      }
    } else {
      place = 25;
      placeChip();
    }
  }
});

document.getElementById("chipTwentysix").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipTwentysix").src).includes("redChip.jpg") || (document.getElementById("chipTwentysix").src).includes("blueChip.jpg") || (document.getElementById("chipTwentysix").src).includes("greenChip.jpg") || (document.getElementById("chipTwentysix").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipTwentysix").src).includes("redChip.jpg")) {
        place = 26;
        stackChip();
      } else if ((document.getElementById("chipTwentysix").src).includes("blueChip.jpg")) {
        place = 26;
        stackChip();
      } else if ((document.getElementById("chipTwentysix").src).includes("greenChip.jpg")) {
        place = 26;
        stackChip();
      } else if ((document.getElementById("chipTwentysix").src).includes("yellowChip.jpg")) {
        place = 26;
        stackChip();
      }
    } else {
      place = 26;
      placeChip();
    }
  }
});

document.getElementById("chipTwentyseven").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipTwentyseven").src).includes("redChip.jpg") || (document.getElementById("chipTwentyseven").src).includes("blueChip.jpg") || (document.getElementById("chipTwentyseven").src).includes("greenChip.jpg") || (document.getElementById("chipTwentyseven").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipTwentyseven").src).includes("redChip.jpg")) {
        place = 27;
        stackChip();
      } else if ((document.getElementById("chipTwentyseven").src).includes("blueChip.jpg")) {
        place = 27;
        stackChip();
      } else if ((document.getElementById("chipTwentyseven").src).includes("greenChip.jpg")) {
        place = 27;
        stackChip();
      } else if ((document.getElementById("chipTwentyseven").src).includes("yellowChip.jpg")) {
        place = 27;
        stackChip();
      }
    } else {
      place = 27;
      placeChip();
    }
  }
});

document.getElementById("chipTwentyeight").addEventListener("click", function() {
  if (turnUser == userr && segment == "placement") {
    if ((document.getElementById("chipTwentyeight").src).includes("redChip.jpg") || (document.getElementById("chipTwentyeight").src).includes("blueChip.jpg") || (document.getElementById("chipTwentyeight").src).includes("greenChip.jpg") || (document.getElementById("chipTwentyeight").src).includes("yellowChip.jpg")) {
      if ((document.getElementById("chipTwentyeight").src).includes("redChip.jpg")) {
        place = 28;
        stackChip();
      } else if ((document.getElementById("chipTwentyeight").src).includes("blueChip.jpg")) {
        place = 28;
        stackChip();
      } else if ((document.getElementById("chchipTwentyeightipOne").src).includes("greenChip.jpg")) {
        place = 28;
        stackChip();
      } else if ((document.getElementById("chipTwentyeight").src).includes("yellowChip.jpg")) {
        place = 28;
        stackChip();
      }
    } else {
      place = 28;
      placeChip();
    }
  }
});
