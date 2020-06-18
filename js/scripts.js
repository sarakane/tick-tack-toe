//Business logic 
function checkIfWinner1() {
  if ($("#dataCell0").hasClass("markedX") &&  $("#dataCell1").hasClass("markedX") && $("#dataCell2").hasClass("markedX")) {
    return true;
  } else if ($("#dataCell3").hasClass("markedX") &&  $("#dataCell4").hasClass("markedX") && $("#dataCell5").hasClass("markedX")) {
    return true;
  } else if($("#dataCell6").hasClass("markedX") &&  $("#dataCell7").hasClass("markedX") && $("#dataCell8").hasClass("markedX")){
    return true;
  } else if($("#dataCell0").hasClass("markedX") &&  $("#dataCell3").hasClass("markedX") && $("#dataCell6").hasClass("markedX")){
    return true;
  } else if($("#dataCell1").hasClass("markedX") &&  $("#dataCell3").hasClass("markedX") && $("#dataCell7").hasClass("markedX")){
    return true;
  } else if($("#dataCell2").hasClass("markedX") &&  $("#dataCell5").hasClass("markedX") && $("#dataCell8").hasClass("markedX")){
    return true;
  } else if($("#dataCell0").hasClass("markedX") &&  $("#dataCell4").hasClass("markedX") && $("#dataCell8").hasClass("markedX")){
    return true;
  } else if($("#dataCell6").hasClass("markedX") &&  $("#dataCell4").hasClass("markedX") && $("#dataCell2").hasClass("markedX")){
    return true;
//else if($("#dataCell0").hasClass(marked) &&  $("#dataCell1").hasClass(marked) && $("#dataCell2").hasClass(marked) && $("#dataCell3").hasClass(marked) &&  $("#dataCell4").hasClass(marked) && $("#dataCell5").hasClass(marked) && $("#dataCell6").hasClass(marked) &&  $("#dataCell7").hasClass(marked) && $("#dataCell8").hasClass(marked)){
    //return ("#outcome3");
  } else {
    return false;
  }
}

function checkIfWinner2() {
  if ($("#dataCell0").hasClass("markedO") &&  $("#dataCell1").hasClass("markedO") && $("#dataCell2").hasClass("markedO")) {
    return true;
  } else if ($("#dataCell3").hasClass("markedO") &&  $("#dataCell4").hasClass("markedO") && $("#dataCell5").hasClass("markedO")) {
    return true;
  } else if($("#dataCell6").hasClass("markedO") &&  $("#dataCell7").hasClass("markedO") && $("#dataCell8").hasClass("markedO")){
    return true;
  } else if($("#dataCell0").hasClass("markedO") &&  $("#dataCell3").hasClass("markedO") && $("#dataCell6").hasClass("markedO")){
    return true;
  } else if($("#dataCell1").hasClass("markedO") &&  $("#dataCell3").hasClass("markedO") && $("#dataCell7").hasClass("markedO")){
    return true;
  } else if($("#dataCell2").hasClass("markedO") &&  $("#dataCell5").hasClass("markedO") && $("#dataCell8").hasClass("markedO")){
    return true;
  } else if($("#dataCell0").hasClass("markedO") &&  $("#dataCell4").hasClass("markedO") && $("#dataCell8").hasClass("markedO")){
    return true;
  } else if($("#dataCell6").hasClass("markedO") &&  $("#dataCell4").hasClass("markedO") && $("#dataCell2").hasClass("markedO")){
    return true;
//else 
  } else {
    return false;
  }
}

function checkIfTie() {
/*   if($("#dataCell0").hasClass("markedX") &&  $("#dataCell1").hasClass("markedX") && $("#dataCell2").hasClass("markedX") && $("#dataCell3").hasClass("markedX") &&  $("#dataCell4").hasClass("markedX") && $("#dataCell5").hasClass("markedX") && $("#dataCell6").hasClass("markedX") &&  $("#dataCell7").hasClass("markedX") && $("#dataCell8").hasClass("markedX")){
    return true;
  }
  else if ($("#dataCell0").hasClass("markedO") &&  $("#dataCell").hasClass("markedO") && $("#dataCell2").hasClass("markedO") && $("#dataCell3").hasClass("markedO") &&  $("#dataCell4").hasClass("markedO") && $("#dataCell5").hasClass("markedO") && $("#dataCell6").hasClass("markedO") &&  $("#dataCell7").hasClass("markedO") && $("#dataCell8").hasClass("markedO")) {
    return true;
  } else {
    return false;
  } */
  if($("#dataCell0").hasClass("marked") &&  $("#dataCell1").hasClass("marked") && $("#dataCell2").hasClass("marked") && $("#dataCell3").hasClass("marked") &&  $("#dataCell4").hasClass("marked") && $("#dataCell5").hasClass("marked") && $("#dataCell6").hasClass("marked") &&  $("#dataCell7").hasClass("marked") && $("#dataCell8").hasClass("marked")){
    return true;
  }else {
    return false;
  }
}


function winner(player) {
  if (player === "player1") {
    $(".container").hide();
    $(".win-message").show();
    $("#outcome1").show();
    return true;
  }
  if (player === "player2") {
    $(".container").hide();
    $(".win-message").show();
    $("#outcome2").show();
    return true;
  }
}

  
  
  //if (noPlayer) {
    //$("#outcome3").show();


// $("div#endTurn").submit(function nextTurn(){
//   switch(Player)
// }); 

function swapTurn(turn) {
  // if (turn === 'X')
  //   return 'O'
  // } else {
  //   return 'X'
  return turn = !turn;
}

//Player Business Logic
function Player(mark) {
  this.mark = mark;
}

Player.prototype.mark = function() {
  return this.mark;
}

let xTurn = true;
//User interface logic
$(document).ready(function(){
$("#player2Turn").hide();
  //attachEventListeners(cellclick)
  $("button").on("click", function(event) {
    //event.preventDefault();
    let id = event.target.getAttribute("id");
    let player1 = 'X'
    let player2 = 'O'
    if (xTurn) {
      $("#"+id).addClass("marked markedX");
      $("#"+id+" .xGif").show();
      $("#player1Turn").hide();
      $("#player2Turn").show();
      if(checkIfTie()) {
        $(".container").hide();
        $(".win-message").show();
        $("#outcome3").show();
      }
      if (checkIfWinner1()) {
        winner("player1");
      }
      xTurn = swapTurn(xTurn);
    } else {
      $("#"+id).addClass("marked markedO");
      $("#"+id+" .oGif").show();
      $("#player2Turn").hide();
      $("#player1Turn").show();
      if(checkIfTie()) {
        $(".container").hide();
        $(".win-message").show();
        $("#outcome3").show();
      }
      if (checkIfWinner2()) {
        winner("player2")
      }
      xTurn = swapTurn(xTurn);
    }

  });  

});