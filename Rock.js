function random() {
  var x = Math.floor(Math.random()*10)
  if(x < 3 || x === 3) {
    z = "1"
  }
  if(x > 3 && x < 7) {
    z = "2"
  }
  if(x > 6 && x < 10) {
    z = "3"
  }
  if(x === 10) {
    z = "4"
  }
 if(y === "1" && x === "1") {
  alert("You tied. You both picked rock.");
}
    if(y === "2" && z === "2") {
       alert("You tied. You both picked paper");
    }
    if(y === "3" && z === "3") { 
      alert("You tied. You both picked scissors");
    }
    if(z === "4") { 
      alert("You lost. The computer picked nuclear bomb.");
    }
    if(y === "1" && z === "2") {
      alert("You lost. You picked rock and the computer picked paper.");
    }
  if(y === "1" && z === "3") { 
      alert("You win. You picked rock and the computer picked scissors");
  }
  if(y === "2" && z === "1") {
    alert("You win. You picked paper and the computer picked rock.");
  }
  if(y === "2" && z === "3") {
    alert("You lose. You picked paper and the computer picked scissors");
  }
  if(y === "3" && z === "1") {
    alert("You lose. You picked scissors and the computer picked rock.");
  }
  if(y === "3" && z === "2") {
    alert("You win. You picked scissors and the computer picked paper.");
  }
}
function rock() {
  y = "1"
}
function paper() {
  y = "2"
}
function scissors() {
  y = "3"
