if(window.innerHeight/window.innerWidth >= 1){
  document.getElementById("vidClass1").style.width = "100vw";
  document.getElementById("magazineCover").style.width = "75vw";
  var all = document.getElementsByClassName('Heading1');
  for (var i = 0; i < all.length; i++) {
    all[i].style.fontSize = "30px";
  }
  var all = document.getElementsByClassName('Heading3');
  for (var i = 0; i < all.length; i++) {
    all[i].style.fontSize = "20px";
  }

  var all = document.getElementsByClassName('Heading2');
  for (var i = 0; i < all.length; i++) {
    all[i].style.fontSize = "25px";
  }

  var all = document.getElementsByClassName('redLink');
  for (var i = 0; i < all.length; i++) {
    all[i].style.fontSize = "20px";
    all[i].style.padding = "10px";
    all[i].style.marginTop = "2px";
  }
  document.getElementById('topGridSection').appendChild(document.getElementById('title'));
  document.getElementById('bottomGridSection').appendChild(document.getElementById('magazineCover1'));

}
else {
  document.getElementById("vidClass1").style.height = "100vh";
  document.getElementById("magazineCover").style.height = "100vh";
}
