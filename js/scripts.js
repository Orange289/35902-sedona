var link = document.querySelector(".open-search");
var popup = document.querySelector(".search-form");
var form = popup.querySelector("form");
var adQty = document.querySelector("[name=adults-qty]");
var kQty = document.querySelector("[name=kids-qty]");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal-content-show");
});
form.addEventListener("submit", function(event) {
 event.preventDefault();
 if ((!adQty.value && !kQty.value) || (adQty.value == "0" && kQty.value == "0") || (adQty.value == "0" && !kQty.value) || (!adQty.value && kQty.value == "0")) {
    event.preventDefault();
    console.log("Нужно ввести количество взрослых и/или детей");
    alert("Нужно ввести количество взрослых и/или детей");
 }
});
window.addEventListener("keydown", function(event) {
 if (event.keyCode == 27) {
   if (popup.classList.contains("modal-content-show")) {
     popup.classList.remove("modal-content-show");
   }
 }
});
