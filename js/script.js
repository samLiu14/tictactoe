var turns = 9;
var clickCounter = 0;
var gameEnd = false;
var ticToe = 0;

$("button").click(function() {
  clickCounter++;
  if (turns === 1) {
    $("p").text("no more turns!");
  } else {
    turns--;
    $("p").text(turns);
  }
});

function performLogic(x, y) {
  $(x).hide();
  if (clickCounter % 2 === 0) {
    $(y).text("o");
    ticToe = false;
  } else {
    $(y).text("x");
    ticToe = true;
  }
}

function winCheck(a, b, c) {
  var tileA = $("#" + a).text();
  var tileB = $("#" + b).text();
  var tileC = $("#" + c).text();
  if (tileA === "x" && tileB === "x" && tileC === "x") {
    $("p").text("something");
  }
  else if (a === "o" && b === "o" && c === "o") {
    $("p").text("something here as well");  
  }
  else {
    $("p").append("easy to say nobody won yet");
  }
}


$("#button1").click(function() {
  performLogic("#button1", "#tile1");

  winCheck("tile1", "tile2", "tile3");
});

$("#button2").click(function() {
  performLogic("#button2", "#tile2");

  winCheck("tileId1", "tileId2", "tileId3");
});

$("#button3").click(function() {
  performLogic("#button3", "#tile3");

  winCheck("tileId1", "tileId2", "tileId3");
});

$("#button4").click(function() {
  performLogic("#button4", "#tile4");

});

$("#button5").click(function() {
  performLogic("#button5", "#tile5");
});

$("#button6").click(function() {
  performLogic("#button6", "#tile6");
});

$("#button7").click(function() {
  performLogic("#button7", "#tile7");
});

$("#button8").click(function() {
  performLogic("#button8", "#tile8");
});

$("#button9").click(function() {
  performLogic("#button9", "#tile9");
});
