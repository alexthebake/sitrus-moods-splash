var header = document.getElementsByClassName("header")[0];
document.addEventListener("scroll", function(event) {
  if (window.scrollY > 0) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
});

setTimeout(function() {
  var twistables = document.getElementsByClassName("twistable");
  for (var i = 0; i < twistables.length; i++) {
    var twistable = twistables[i];
    twistable.classList.add("twistable--twist");
  }
}, 100);
