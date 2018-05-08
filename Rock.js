function random() {
  var x = Math.floor(Math.random()*10)
    alert(x)
  if(x < 3 || x = 3) {
    x = "1"
  }
  if(x > 3 && x < 7) {
    x = "2"
  }
  if(x > 6 && x < 10) {
    x = "3"
  }
  if(x === 10) {
    x = "4"
  }
  var y = prompt("Rock(1), Paper(2), or scissors(3)")
if(y === "1" && x === "1") {
  alert("You tied. You both picked rock.");
}
    if(y === 2 && x === 2) {
       alert("You tied. You both picked paper");
    }
    if(y === 3 && x === 3) { 
      alert("You tied. You both picked scissors");
    }
    if(x === 4) { 
      alert("You lost. The computer picked nuclear bomb.");
    }
    if(y === 1 && x === 2) {
      alert("You lost. You picked rock and the computer picked paper.");
    }
  if(y === 1 && x === 3) { 
      alert("You win. You picked rock and the computer picked scissors");
  }
  if(y === 2 && x === 1) {
    alert("You win. You picked paper and the computer picked rock.");
  }
  if(y === 2 && x === 3) {
    alert("You lose. You picked paper and the computer picked scissors");
  }
  if(y === 3 && x === 1) {
    alert("You lose. You picked scissors and the computer picked rock.");
  }
  if(y === 3 && x === 2) {
    alert("You win. You picked scissors and the computer picked paper.");
  }
  else {
    alert("sorry, we don't understand your input") 
  }
}
