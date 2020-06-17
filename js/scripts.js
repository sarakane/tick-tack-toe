//Business logic 

// HTMLTableDataCellElement.checkIfWinner(function() {
//   let box0 = $("#dataCell0");
//   let box1 = $("#dataCell1");
//   let box2 = $("#dataCell2");
//   let box3 = $("#dataCell3");
//   let box4 = $("#dataCell4");
//   let box5 = $("#dataCell5");
//   let box6 = $("#dataCell6");
//   let box7 = $("#dataCell7");
//   let box8 = $("#dataCell8");
  

//     if ((box0 != empty) && (box1 == box0) && (box2 == box1)) {
//       return (winner);
//     };
//     if((box3 != empty) && (box4 == box3) && (box5 == box4)) {
//       return (winner);
//     };
//     if((box6 != empty) && (box7 == box6) && (box8 == box7)){
//       return (winner);
//     };
//     if((box0 != empty) && (box3 == box1) && (box6 == box3)){
//       return (winner);
//     };
//     if((box1 != empty) && (box3 == box1) && (box7 == box4)){
//       return (winner);
//     };
//     if((box2 != empty) && (box5 == box2) && (box8 == box5)){
//       return (winner);
//     };
//     if((box0 != empty) && (box4 == box0) && (box8 == box4)){
//       return (winner);
//     };
//     if((box6 != empty) && (box4 == pos[6]) && (box2 == box4)){
//       return (winner);
//     };
// });

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


const X_Class = "X"
const O_Class = "O"
const cellElements = document.querySelectorAll('[data-cell]');
let circleTurn

cellElements.forEach(cell => {
  cell.addEventListener('click', cellclick, {once: true})
  console.log("cell clicked");
})

function cellclick(e){
  const cell = e.target;
  const currentClass = circleTurn ? O_Class : XO_Class
  placeMark(cell, currentClass)
  swapTurn()
}



function playGame() {
  const player1 = new Player('X');
  const player2 = new Player('O');
  let turn = player1;
  /* while(!gameover()) {
    wait for player whose turn it is to select open space and submit
    then switch turns

    turn = swapTurn(turn);
  }
  */
}

// $("div#endTurn").submit(function nextTurn(){
//   switch(Player)
// }); 

function swapTurn(turn) {
  // if (turn === 'X')
  //   return 'O'
  // } else {
  //   return 'X'
  circleTurn = !circleTurn
}

function gameOver(){
  //check  if board is full or player has won
  return true;
}

//Player Business Logic
function Player(mark) {
  this.mark = mark;
}

Player.prototype.mark = function() {
  return this.mark;
}

//User interface logic
$(document).ready(function(){
  // attachContactListeners(cellclick)
  $(".cell").click(function(event) {
    console.log(event.target);
  });  

});