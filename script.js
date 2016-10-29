function calculator() {

	var fundamental = document.getElementById('fundamental').value;
	var programming = document.getElementById('programming').value;
	var lab = document.getElementById('lab').value;
	var physics = document.getElementById('physics').value;
	var math = document.getElementById('math').value;
	var english = document.getElementById('english').value;

	var array = [fundamental, programming, lab, physics, math, english];

	var length = array.length;

	for(var i = 0; i < length; i++)
		if(array[i] == "") {
			alert('Please fill all input');
			return;
		}

	for(var i = 0; i < length; i++)
		if(array[i] < 2.0) {
			document.getElementById('result').innerHTML = "Your have failed!";
			return;
		}

	total = (fundamental * 3.0) + (programming * 3.0) + (lab * 1.5) + (physics * 3.0) + (math * 3.0) + (english * 3.0);

	result = total / 16.5;

	document.getElementById('result').innerHTML = "Your Total CGPA is " + result.toFixed(2);
}

function modeChange() {

	var day = document.getElementById('daymode');
var night = document.getElementById('nightmode');

day.onclick = function() {
	var className = day.id;
	document.body.className = className;
}

night.onclick = function() {
	var className = night.id;
	document.body.className = className;
}

}

modeChange();