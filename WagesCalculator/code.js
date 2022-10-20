var btn = document.getElementById("btn1");
btn.addEventListener("click", myFunction);
function myFunction() {
var normalhours = Number(document.getElementById("normalhours").value);
var normalrate = Number(document.getElementById("normalrate").value);
var overtimerate = Number(document.getElementById("overtimerate").value);
var hoursworked = Number(document.getElementById("hoursworked").value);
var final;
if (hoursworked > normalhours) {
final = (hoursworked - normalhours) * overtimerate + (normalhours * normalrate);
} else {
final = normalhours * normalrate;
}
document.getElementById("output").innerHTML = "$" + final;

}