let b = false;
function lottery5() {
   if(!b) {
      var i = prompt("How many tickets do you want?");
   } else {
      alert(`You bought ${i} tickets.`)
   }
   
  for(var a = 0; a < i; a++) {
     lottery5();
     b = true;
  }
}
