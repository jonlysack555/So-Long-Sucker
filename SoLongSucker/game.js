var userr = JSON.parse(localStorage.getItem("gameArray"))[0][0];
var username = JSON.parse(localStorage.getItem("gameArray"))[0][1];
var gameArray = JSON.parse(localStorage.getItem("gameArray"));

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

function playChip() {

}

function capture() {

}

function transfer() {

}

function discard() {

}

function choosePlay() {

}

function die() {

}

function win() {

}
