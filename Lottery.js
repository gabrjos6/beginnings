var m = 0;
function Lottery() {
   m = m + 2;
    var t = Math.round(Math.random()*120000001) 
    if(t ==="25924331") {
        alert("YOU WIN!!!!! !!!!! !!!!!"); 
    }
    if(t < 25924331 || t > 25924331) {
        alert("You lose :( "); 
    }
  function MONEY() {
    alert(m);
  }
  function start() {
    var m = 0;
  }
}

