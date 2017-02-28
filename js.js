   var life=1;
    function recentJobs(){
        var select = document.getElementById("positionM");
		var result = [];
        var option;
        for (var i=0, iLen=select.length; i<iLen; i++) {
        option = select[i];
 
            if (option.selected) {
                result.push(option.value);
            }
        }
        return result;
    }
	
	function beforeSubmit(){
	
	    var sk = document.getElementsByName("skills");
		var skString = [];
		for(i in sk){
		    if(sk[i].checked)
			skString.push(sk[i].value)
		}
		
		var ct = document.getElementsByName("cities");
		var ctString = [];
		for(i in ct){
		    if(ct[i].checked)
			ctString.push(ct[i].value)
		}
		
		var po = document.getElementById("position");
		var index = po.selectedIndex; 
		var poString = po.options[index].value;
		
		var words = document.getElementById("words").value

		alert("Your user name: " + document.getElementById("userName").value +
		"\r\n" +
		"Your current skills: " + skString +
		"\r\n" +
		"Cities expected: "+ ctString +
		"\r\n" +
		"Position expected: " + poString +
		"\r\n" +
		"Your recent jobs: " + recentJobs() +
		"\r\n" +
		"Your words: " + words +
		"\r");
		
	}

	function addLife(){
		document.getElementById("Lresult").value = life++;
	}

	
	
	