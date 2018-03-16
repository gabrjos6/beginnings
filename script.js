function hackPentagon() {
  var n = prompt("Name");
  var r = prompt("Reasoning");
  alert(n + " has sucessfully hacked the Pentagon.");
  alert('Their reasoning was ' + r + '.');
}

function grapefruit(name, favFruit) {
  if(favFruit != "grapefruit" || favFruit != "Grapefruit") {
    alert(name + " does not like grapefruit.");
  } else {
    alert(name + " likes " + favFruit + " instead.");
  }
}
