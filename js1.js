function change(name,l){
	var a=document.getElementById(name).getElementsByClassName("books");
	var i;
	for(i=0;i<a.length;i++){
		console.log(a[i].id);
		
		if(a[i].id===l){
			a[i].style.display="block";
		}else{
			a[i].style.display="none";
		}
	}
	
}


	
var modal = document.getElementById('id01');

// 鼠标点击模型外区域关闭登录框
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function log( name, ps ,m){
	if(m===0){
	if(name.value=='123'&&ps.value=='123'){
	
	document.getElementById("log1").style.display="none";
	document.getElementById("log2").style.display="none";
	document.getElementById('id01').style.display="none";	
	document.getElementsByClassName('log11')[0].style.display="block";	
    document.getElementsByClassName("log11")[2].innerHTML="<h3>welcome 123 <h3>";
	document.getElementsByClassName("log11")[2].style.display="inline";
	document.getElementsByClassName("log11")[1].style.display="block";
		//alert(document.getElementsByClassName("log11")[1].textContent);
	}else{
		document.getElementById("w1").innerHTML="用户名或密码不正确";
		//document.getElementById("w1").style.
	}
	}else if(m===1){
		if(name.value=='123'&&ps.value=='123'){
		document.getElementById("log1").style.display="none";
	document.getElementById("log2").style.display="none";
	document.getElementById('id01').style.display="none";	
	document.getElementsByClassName('log22')[0].style.display="block";	
    document.getElementsByClassName("log22")[2].innerHTML="<h3>welcome 123 <h3>";
	document.getElementsByClassName("log22")[2].style.display="inline";
	document.getElementsByClassName("log22")[1].style.display="block";
	}else{
		document.getElementById("w2").innerHTML="用户名或密码不正确";
		//document.getElementById("w1").style.
	}
	}
}


function qq(){
	document.getElementsByClassName("container")[0].style.display="none";
	document.getElementById("container1").style.display="block";
}
function wx(){
	document.getElementsByClassName("container")[0].style.display="none";
	document.getElementById("container2").style.display="block";
}

function log1(){
	document.getElementById("id01").style.display="block";
	document.getElementsByClassName("container")[0].style.display="block";
	document.getElementsByClassName("container")[1].style.display="none";
	document.getElementById("container1").style.display="none";
	document.getElementById("container2").style.display="none";
}


function exit(){
	document.getElementById("log1").style.display="block";
	document.getElementById("log2").style.display="block";
	for(var i=0;i<document.getElementsByClassName('log11').length;i++)
	document.getElementsByClassName('log11')[i].style.display="none";	
	for(var i=0;i<document.getElementsByClassName('log22').length;i++)
	document.getElementsByClassName('log22')[i].style.display="none";	
    
}


function loggov(){
	document.getElementById("id01").style.display="block";
	document.getElementsByClassName("container")[0].style.display="none";
	document.getElementsByClassName("container")[1].style.display="block";
	document.getElementById("container1").style.display="none";
	document.getElementById("container2").style.display="none";
	
}


function usr(){
	window.location.href ="usr.html";
}

function gov(){
	window.location.href ="gov.html";
}