
function calc()
{
	var ber = new Bereg();
	ber.name = getBerName(0);
	document.getElementById("Result").innerHTML = ber.name; 
}

function getBerName(RandFlag)
{
	ber_name = readDate();
	return (ber_name);
}