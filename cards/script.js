var n = 0;
var number;
var p = 12;
var line = "AAKKQQJJttnn";
window.onload = function() {
  var generate = document.getElementsByClassName("non");
  while (generate.length != 0) {
    n = Math.floor(Math.random() * (p));
    number = Math.floor(Math.random() * (p))
    generate[n].classList.add(line[number]);
    generate[n].classList.remove("non");
    line = Remove(line, number, 1);
    //line = 	line.replace(line[number],'');
    p--;
  }
	n = 0;
	number = 0;
  var card = document.getElementsByClassName("card");
  for (let i = 0; i < card.length; i++) {
    card[i].onclick = qwe;
  }
};

function qwe() {
  n++;
  this.className += " active";
  if (n == 2) {
    var ri = document.getElementsByClassName("active");
    if (this.className != number.className) {
      var timerId = setTimeout(func, 500, this, number);
      //	number.className -="active";
    }

    n = 0;
  }
  number = this;
  if (document.getElementsByClassName("active").length == 12)
    alert("U win!")
};

function func(el1, el2) {
  el1.classList.remove("active");
  el2.classList.remove("active");

}

function Remove(str, startIndex, count) {
  return str.substr(0, startIndex) + str.substr(startIndex + count);
}
