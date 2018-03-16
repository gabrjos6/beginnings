var t = prompt("What precentage did you get (only list number (ie 100)"); 
if(t > 100 && t < 201) {
  alert("You got an A+!");
}
if(t > 92 && t < 100) {
  alert("your grade is an A");
}
if(t === 92 || t < 92 && t > 89) {
  alert("You got an A-");
}
if(t > 88 && t < 90) {
  alert("You got a B+");
}
if(t > 82 && t < 87) {
  alert("You got a B");
}
if(t > 79 && t < 83) {
  alert("You got a B-");
}
if(t > 76 && t < 80) {
  alert("You got a C+");
}
if(t > 72 && t < 77) {
  alert("You got a C");
}
if(t > 69 && t < 73) {
  alert("You got a C-");
}
if(t > 66 && t < 70) {
  alert("You got a D+");
}
if(t > 62 && t < 67) {
  alert("You got a D");
}
if(t > 59 && t < 63) { 
  alert("You got a D-"); 
}
if(t > 0 && t <60) {
  alert("You got an F");
}
if(isNaN(t) == true) { //This says: HAY! IS (t) A NUMBER??? if it is not a number, do this. You can change "==true" to "==false" if you want. BUT THAT MAKES NOO SENSE!
  alert("Sorry, your input did not match a number 1-200. Try checking to make sure it is in numerical form without a precentage sign");
} // I also changed the wording on line 42.
