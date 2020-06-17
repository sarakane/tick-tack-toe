//Business logic 

HTMLTableDataCellElement.checkIfWinner(function) {
  if ((pos[0] != empty) && (pos[1] == pos[0]) && (pos[2] == pos[1])){
    return winner
  }
  if((pos[3] != empty) && (pos[4] == pos[3]) && (pos[5] == pos[4])){
    return winner
  }
  if((pos[6] != empty) && (pos[7] == pos[6]) && (pos[8] == pos[7])){
    return winner
  }
  if((pos[0] != empty) && (pos[3] == pos[1]) && (pos[6] == pos[3])){
    return winner
  }
  if((pos[1] != empty) && (pos[4] == pos[1]) && (pos[7] == pos[4])){
    return winner
  }
  if((pos[2] != empty) && (pos[5] == pos[2]) && (pos[8] == pos[5])){
    return winner
  }
  if((pos[0] != empty) && (pos[4] == pos[0]) && (pos[8] == pos[4])){
    return winner
  }
  if((pos[6] != empty) && (pos[4] == pos[6]) && (pos[2] == pos[4])){
    return winner
  }
};

//User interface logic
$(document).ready(function(){
  $('button#startButton').submit(function(event) {
  event.preventDefault();
  
  });

});