var result = 0; //set a default value

var judge = 0; //judge users whether type two or more sign(+-*/)

function command(num){
	if (result == 0){
		result = num;
	} //change default result to num
	else{
		result = result + [num];
	} //change result to string
	document.getElementById("result").value = result;  //out put/display the result
	judge = 1; //when judge=1 users can tpye sign(+-*/)
}

function sign(num){
	if (result == 0){
		alert("error!");
	} //users can not type sign(+-*/) as the first thing
	else if(judge == 0){
		alert("error!");
	} //users can not continuously type two or more sign(+-*/)
	else{
		if(num == 1){
		result = result + ["+"];
	    }
	    if(num == 2){
		result = result + ["-"];
	    }
	    if(num == 3){
		result = result + ["*"];
	    }
	    if(num == 4){
		result = result + ["/"];
	    }
	}
	document.getElementById("result").value = result; //out put/display the result
	judge = 0; //when judge=0 users can not tpye sign(+-*/)
}

function equal(){
	result = eval(result); //run function-evaluation 
	document.getElementById("result").value = result; //out put/display the result
}

function clean(){
	result = 0; //clean the result
	document.getElementById("result").value = result; //out put/display the result
}