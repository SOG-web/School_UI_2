function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(function () {
  $('[data-toggle="popover"]').popover();
});

// var link = document.getElementById("db").getAttribute("href");
// console.log(document.getElementById("db").href);
// console.log(link);

// if (screen.width < 650) {
//   console.log(screen.width);
// } else {
// }

// window.onload = function () {
//   var link = document.getElementById("db").getAttribute("href");
//   console.log(document.getElementById("db").getAttribute("href"));
// };
$(".db").on("click", function (e) {
  console.log(e.target.href); // logs https://www.test.com/#test
  console.log(e.target.hash); // logs #test
});
