var result = 0;

function command(num){
	if (result == 0){
		result = num;
	}
	if !(result == 0){
		result = num +
	}
	var rightNumber = num;
	result = num;
	document.getElementById("result").value = result;
}

function plus(){
	calculate();
	operate = 1;
	calcul = 1;
}

function equal(){
	calculate();
	operate= 1;
	num = 0;
	result = 0;
	numshow = "0";
}

function calculate(){
	numshow = Number(document.calculator.numScreen.value);
	switch(calcul){
		case 1:result=num+numshow;
	}
}