function openBurgerMenu() {
  var x = document.getElementById("burgerMenuIcon");
  var y = document.getElementById("burgerMenu");
  if (x.style.display === "none") {
    y.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function closeBurgerMenu() {
  var x = document.getElementById("burgerMenuIcon");
  var y = document.getElementById("burgerMenu");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}
