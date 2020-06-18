//Business logic 

function checkIfWinner() {
  if ($("#dataCell0").hasClass(image) &&  $("#dataCell1").hasClass(image) && $("#dataCell2").hasClass(image)) {
    return true(winner);
  } else if ($("#dataCell3").hasClass(image) &&  $("#dataCell4").hasClass(image) && $("#dataCell5").hasClass(image)) {
    return true(winner);
  } else if($("#dataCell6").hasClass(image) &&  $("#dataCell7").hasClass(image) && $("#dataCell8").hasClass(image)){
    return true(winner);
  } else if($("#dataCell0").hasClass(image) &&  $("#dataCell3").hasClass(image) && $("#dataCell6").hasClass(image)){
    return true(winner);
  } else if($("#dataCell1").hasClass(image) &&  $("#dataCell3").hasClass(image) && $("#dataCell7").hasClass(image)){
    return true(winner);
  } else if($("#dataCell2").hasClass(image) &&  $("#dataCell5").hasClass(image) && $("#dataCell8").hasClass(image)){
    return true(winner);
  } else if($("#dataCell0").hasClass(image) &&  $("#dataCell4").hasClass(image) && $("#dataCell8").hasClass(image)){
    return true(winner);
  } else if($("#dataCell6").hasClass(image) &&  $("#dataCell4").hasClass(image) && $("#dataCell2").hasClass(image)){
    return true(winner);
  } else return false
}

function winner (player) {
  if (player1) {
    $("#outcome1").show();
  }
  if (player2) {
    $("#outcome2").show();
  }
  if (noPlayer) {
    $("#outcome3").show();
  }
}

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
      $("#"+id+" .xGif").show();
      $("#player1Turn").hide();
      $("#player2Turn").show();
      //checkIfWinner(player1)
      swapTurn(oTurn);
    } else {
      $("#"+id+" .oGif").show();
      $("#player2Turn").hide();
      $("#player1Turn").show();
      //checkIfWinner(player2)
      xTurn = swapTurn(xTurn);
    }
    checkIfWinner(function() {
      
    });
  });  

});

// function Player () {
  // const player = 
// }