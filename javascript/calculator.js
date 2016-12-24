var button = document.getElementsByClassName("button");
//generat digit on screen
function generatDigit(currentElement){
    var screen = document.getElementById("screen");
    var screenValue = currentElement.innerHTML;
	screen.value += screenValue;
}

for(var i = 0; i < button.length; i++){
	button[i].addEventListener("click", function(){
		generatDigit(this);
	});
}

function getResult(){
	var screen = document.getElementById("screen").value;
	document.getElementById("screen").value = eval(screen);
	
}

document.getElementsByClassName("button-equal")[0].addEventListener("click", getResult);

function clearDigit(){
	var screen = document.getElementById("screen").value;
	document.getElementById("screen").value = screen.slice(0, screen.length - 1);
}
document.getElementsByClassName("button-clear")[0].addEventListener("click", clearDigit);