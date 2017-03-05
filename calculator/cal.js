var result = 0; //set a default value

var judge = 0; //judge users whether type two or more sign(+-*/)

var equalJudge = 0; //judege users whether be able to use equalSign

function command(num){
	if(result === 0){
		if(num === 10){
			result = 0;
		} //if input 00, output 0
		else if(num === 0){
			result = 0;
		} //if input 0, output 0
		else{
			result = [num];
		} //else output the num
	}
	else if(num === 10 ){
		result = result +["00"];
	} //add doule zero
	else{
	    result = result + [num];//change result to string
    } //add number
	document.getElementById("result").value = result;  //out put/display the result
	judge = 1; //when judge=1 users can tpye sign(+-*/)
}

function sign(num){	
	if(judge == 0){
	} //users can not continuously type two or more sign(+-*/)
	else{
		result = document.getElementById("result").value;
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
	equalJudge = 1; //when equalJudge=0 users can use equalSign
}

function point(){
	result = document.getElementById("result").value;
	if(result.indexOf(".") > -1){
	} //can not exist two or more point
	else if(result == 0){
		result = ["0."]
	} //output 0. otherwise will output "."only
	else{
			result = result + ["."]
	}
	document.getElementById("result").value = result; //out put/display the result
}

function equal(){
	if(equalJudge == 0){
	}
	else{
        result = [eval(result)]; //run function-evaluation 
	    document.getElementById("result").value = result; //out put/display the result
	    result = 0;
	    equalJudge = 0;		
	}
	
}

function clean(){
	result = 0; //clean the result
	document.getElementById("result").value = result; //out put/display the result
}

window.onload = function(){
	var windowScreen = document.documentElement;
	var mainContainer_div = document.getElementById("mainContainer")
	var mainContainer_left = (windowScreen.clientWidth - mainContainer_div.clientWidth)/2 + "px";
	var mainContainer_top = (windowScreen.clientHeight - mainContainer_div.clientHeight)/2 +"px";
	mainContainer_div.style.left = mainContainer_left;
	mainContainer_div.style.top = mainContainer_top;
}