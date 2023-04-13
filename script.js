function calculateBMI() {
	const weight = parseFloat(document.getElementById("weight").value);
	const height = parseFloat(document.getElementById("height").value);

	const bmi = weight / Math.pow(height / 100, 2);
	document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(1);

	if (bmi < 18.5) {
		document.getElementById("result").classList.add("underweight");
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		document.getElementById("result").classList.add("normal");
		document.getElementById("result").innerHTML += "<br>which means You are Normal weight.";
	} else if (bmi >= 25 && bmi <= 29.9) {
		document.getElementById("result").classList.add("overweight");
		document.getElementById("result").innerHTML += "<br>which means You are Overweight.";
	} else {
		document.getElementById("result").classList.add("obesity");
		document.getElementById("result").innerHTML += "<br>which means You are Obesity.";
	}
	return false;
}