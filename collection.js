
var productcontainer = document.getElementById("product");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup", function (event) {
  var enteredvalue = event.target.value.toUpperCase();
  for (var count = 0; count < productlist.length; count++) {
    var productname = productlist[count]
      .querySelector("p")
      .textContent.toUpperCase();
    if (!productname.includes(enteredvalue)) {
      productlist[count].style.display = "none";
    } else {
      productlist[count].style.display = "block";
    }
  }
});
