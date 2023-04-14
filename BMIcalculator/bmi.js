var standard_button = document.getElementById("standard-btn");
var metric_button = document.getElementById("metric-btn");

standard_button.addEventListener('click', when_std_btn_clicked);
when_std_btn_clicked();

function when_std_btn_clicked() {
    document.getElementById("metric-tab").style.display = 'none'; //hide the metric tab
    document.getElementById("standard-tab").style.display = 'block';
    document.getElementById("standard-btn").style.setProperty('background-color', 'lightgreen');
    document.getElementById("metric-btn").style.setProperty('background-color', 'gray');
    //show the standard tab
}

metric_button.addEventListener('click', when_met_btn_clicked);

function when_met_btn_clicked() {
    document.getElementById("metric-tab").style.display = 'block'; //hide the standard tab
    document.getElementById("standard-tab").style.display = 'none';
    document.getElementById("standard-btn").style.setProperty('background-color', 'gray');
    document.getElementById("metric-btn").style.setProperty('background-color', 'mediumpurple');
    //show the metric tab
}

document.querySelector("#standard-tab button").onclick = function () {
    var foot = Number(document.getElementById("foot").value);
    var inch = Number(document.getElementById("inch").value);
    var pound = Number(document.getElementById("pound").value);
    var bmi = pound / (foot*12+inch)**2 * 703;
    document.querySelector("#standard-tab p").innerHTML = explain(bmi);
}

document.querySelector("#metric-tab button").onclick = function () {
    var cm = Number(document.getElementById("cm").value);
    var kg = Number(document.getElementById("kg").value);
    var bmi = kg / (cm*0.01)**2;
    document.querySelector("#metric-tab p").innerHTML = explain(bmi);
}

function explain(bmi) {
    var result = "Your BMI is " + bmi.toFixed(1);
    if (bmi < 18.5) {
        result += "(Underweight)."
    } else if (bmi < 24.9) {
        result += "(Normal weight.)"
    } else if (bmi < 29.9) {
        result += "(Overweight.)"
    } else {
        result += "(Obesity.)"
    }
    return result;
}