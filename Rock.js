function random() {
  var x = Math.floor(Math.random()*10);
  var conf = confirm('setInterval?');
  if(conf == false) {
    alert(x);
  } else if (conf == true) {
    setInterval(function() {document.getElementsByTagName('h1').innerHTML = x;}, 2000);
  }
}
