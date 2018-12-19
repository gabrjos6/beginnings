var elementCreate = () => {
  var getId = v => {
    return document.getElementById(v)
  }
  var p = document.createElement("span")
  p.id = 'createdElement';
  p.innerHTML = 'boi u should learn how to deal with the DOM in javascript its worth it thats how i made all me text games'
  document.body.appendChild(p)
}
