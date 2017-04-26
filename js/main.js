//Get the buttons
var siB = document.getElementById("button1");
var pmB = document.getElementById("button2");
var trB = document.getElementById("button3");

//Get the arcade game title headers
var si = document.getElementById("si");
var pm = document.getElementById("pm");
var tr = document.getElementById("tr");

//Event listeners
//When button is hovered over, the game title is outlined
siB.addEventListener("mouseover", function() { si.style.outline = "3px solid black"; }, false);
siB.addEventListener("mouseout", function() { si.style.outline = "none"; }, false);
pmB.addEventListener("mouseover", function() { pm.style.outline = "3px solid black"; }, false);
pmB.addEventListener("mouseout", function() { pm.style.outline = "none"; }, false);
trB.addEventListener("mouseover", function() { tr.style.outline = "3px solid black"; }, false);
trB.addEventListener("mouseout", function() { tr.style.outline = "none"; }, false);