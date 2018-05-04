function random() {
  var x = Math.floor(Math.random()*10);
  var conf = confirm('setInterval?');
  if(conf == false) {
    alert(x);
  } else if (conf == true) {
    setInterval(function() {alert(x)}, 5000);
  }
}
