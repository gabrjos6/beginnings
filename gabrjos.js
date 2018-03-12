var t = prompt("What precentage did you get (only list number)"); 
if(t === "100") {
alert("You got an A+!");
}
if(t > "92" && t < "100") {
alert("your grade is an A");
}
if(t === "92" || t < "92" && t > "89") {
alert("You got an A-");
}
if(t > "88" && t < "90") {
alert("You got a B+");
}
