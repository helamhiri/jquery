

	var tt=document.getElementById('par');
function font(){
	var x = document.getElementById("list").value;
	tt.style.fontFamily=x;
}
function sizet(){
	var x = document.getElementById("list1").value;
	tt.style.fontSize= x;
}



$("#a").click(function() {
	if (tt.style.fontStyle=="bold"){
    tt.style.fontWeight="normal";  
	}else {
	tt.style.fontWeight="bold";	
	}
});

function star() {
	
	if (tt.style.textDecoration =="underline"){
    tt.style.textDecoration ="none";  
	}else {
	tt.style.textDecoration ="underline";	
	}
	
	
}

function inc() {
	
	if (tt.style.fontStyle=="italic"){
    tt.style.fontStyle="normal";  
	}else {
	tt.style.fontStyle="italic";	
	}
	
}
