import "./styles.css";
var imgObj = null;
document.getElementById("anime").innerHTML =
  "So Enjoy and Welcome to Wasseypur.";

bullet.onclick = function () {
  document.getElementById("bullet").style.transformOrigin = "250 250";

  let height = gun.clientHeight - bullet.clientHeight;
  let width = 300;
  let start = Date.now();

  let timer = setInterval(function () {
    let timePassed = Date.now() - start + 3000;

    bullet.style.left = timePassed / 10 + "px";

    if (timePassed > 7000) clearInterval(timer);
    document.getElementById("anime").innerHTML = timePassed;
  }, 10);
};
