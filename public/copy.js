function copyToClipboard(text) {
	var temp = document.createElement("INPUT");
	temp.setAttribute("value", text);
	document.body.appendChild(temp);
	temp.select();
	document.execCommand("copy");
	document.body.removeChild(temp);
}