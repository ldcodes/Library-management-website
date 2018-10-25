// JavaScript Document
function begin(){
	
	for(var i=1;i<document.getElementById("right").childNodes.length;i++)
		if(document.getElementById("right").childNodes[i].tagName==="div")
		document.getElementById("right").childNodes[i].style.display="none";
}

function change(name1,name2){
	
	for(var i=0;i<document.getElementById(name2).childNodes.length;i++)
		
		if(document.getElementById(name2).childNodes[i].tagName=="DIV")
		   if(document.getElementById(name2).childNodes[i].id===name1)
			document.getElementById(name2).childNodes[i].style.display="block";
	    else 
			document.getElementById(name2).childNodes[i].style.display="none";
     //alert(document.getElementById(name2).childNodes[i].id);
}

function ex(name){
	if(name=="first1"){
		document.getElementById("first1").style.display="block";
		document.getElementById("sceond").style.display="none";
		
	}else{
		document.getElementById("sceond").style.display="block";
		document.getElementById("first1").style.display="none";
		var a=document.getElementById("sceond").childNodes;
		for(i=0;i<a.length;i++)
			// console.log
			if(a[i].tagName=="DIV"){
				//alert(a[i].id+name);
				if(a[i].id==name)
					a[i].style.display="block";
				else{a[i].style.display="none";
				}
				//console.log(a[i].style.display+i);	
			}
				
	}
}

function test(a){
	console.log("test begin");
	for(i=0;i<a.length;i++){
		console.log("this is "+i+"  tag  "+a[i].tagName+a.length+a[i].textContent);
	}
}
function getC( v){
	var b=new Array(),k=0;
	for(i=0;i<v.length;i++){
		if(v[i].tagName=="undefined"){
			
			continue;}else{
				b[k++]=v[i];
			}
	
	
   }
	return b;
}
function search(){
	var a=document.getElementById("searchbook").value;
	var m=getC(document.getElementById("booktable12").childNodes);
    //console.log(t.length);
	var t=getC(m[1].childNodes);
	// for(i=0;i<t.length;i++){
		 
	//	  console.log(""+i+"m length is"+m.length+t[i].tagName);
		//  for(j=0;j<m.length;j++)
		//	  console.log("  "+m[j].tagName);
 
		
	switch (a){
		case "1":
		var c=t[2].childNodes;
			test(c);
			c[9].innerHTML="此书值得一读";
		    c[7].innerHTML="3";
			c[5].innerHTML="a";
			c[3].innerHTML="1";
		    c=t[4].childNodes;
			document.getElementById("wanning").innerHTML="";
			t[2].style.visibility="visible";
			t[0].style.visibility="visible";
		    t[4].style.visibility="hidden";
			document.getElementById("gass").style.visibility="hidden";
			document.getElementById("cc").style.display="block";
			break;
			
		case "2":
			var c=getC(t[2].childNodes);
		    c[3].innerHTML="2";
			c[5].innerHTML="b";
			c[7].innerHTML="3";
			c[9].innerHTML="内容一般吧";
			c=t[4].childNodes;
			c[3].innerHTML="2";
			c[5].innerHTML="c";
			c[7].innerHTML="4";
			c[9].innerHTML="很不错的一本书";
			document.getElementById("wanning").innerHTML="";
			document.getElementById("cc").style.display="block";
			t[4].style.visibility="visible";
			t[0].style.visibility="visible";
			t[2].style.visibility="visible";
			document.getElementById("gass").style.visibility="hidden";
			break;
		case "3":
			var c=getC(t[2].childNodes);
		    c[7].innerHTML="0";
			c[5].innerHTML="abc";
			c[3].innerHTML="3";
			c[9].innerHTML="这书太抢手了";
		    c=t[4].childNodes;
			document.getElementById("wanning").innerHTML="";
			t[2].style.visibility="visible";
			t[0].style.visibility="visible";
		    t[4].style.visibility="hidden";
			document.getElementById("gass").style.visibility="visible";
			document.getElementById("cc").style.display="none";
			break;
			default:
			document.getElementById("wanning").innerHTML="此书不存在";
			t[0].style.visibility="hidden";
			t[4].style.visibility="hidden";
			t[2].style.visibility="hidden";
			document.getElementById("gass").style.visibility="hidden";
			document.getElementById("cc").style.display="none";
			 
	}
}

function searchbook(name){
	var m=getC(document.getElementById("booktable1").childNodes);
  
	var t=getC(m[1].childNodes);
	var a=name.value;
	switch(a){
		case "1":
	
		var c=getC(t[2].childNodes);
		    c[7].innerHTML="3";
			c[5].innerHTML="a";
			c[3].innerHTML="1";
		    c=t[4].childNodes;
			document.getElementById("bookwanning").innerHTML="";
			t[2].style.visibility="visible";
			t[0].style.visibility="visible";
		    t[4].style.visibility="hidden";
			break;
			case "2":
			var c=getC(t[2].childNodes);
		    c[3].innerHTML="2";
			c[5].innerHTML="b";
			c[7].innerHTML="3";
			c=t[4].childNodes;
			c[3].innerHTML="2";
			c[5].innerHTML="c";
			c[7].innerHTML="4";
			document.getElementById("wanning").innerHTML="";
			t[4].style.visibility="visible";
			t[0].style.visibility="visible";
			t[2].style.visibility="visible";
			break;
			default:
			document.getElementById("wanning").innerHTML="此书不存在";
			t[0].style.visibility="hidden";
			t[4].style.visibility="hidden";
			t[2].style.visibility="hidden";
			}
}

function book(){
  var a=document.getElementById("searchbook1").value;
	var m=getC(document.getElementById("booktable1").childNodes);
    //console.log(t.length);
	var t=getC(m[1].childNodes);
	switch (a){
		case "1":
		var c=getC(t[2].childNodes);
		    c[7].innerHTML="否";
			c[9].innerHTML="";
			c[5].innerHTML="a";
			c[3].innerHTML="1";
		    c=t[4].childNodes;
			document.getElementById("wanning").innerHTML="";
			t[2].style.visibility="visible";
			t[0].style.visibility="visible";
		    t[4].style.visibility="hidden";
			document.getElementById("tui").style.visibility="hidden";
			document.getElementById("cc1").style.display="none";
			document.getElementById("wanning1").style.display="none";
			break;
			
		case "2":
			var c=getC(t[2].childNodes);
		    c[3].innerHTML="2";
			c[5].innerHTML="b";
			c[7].innerHTML="否";
			c[9].innerHTML="";
			c=t[4].childNodes;
			c[3].innerHTML="2";
			c[5].innerHTML="c";
			c[7].innerHTML="否";
			document.getElementById("wanning").innerHTML="";
			document.getElementById("cc1").style.display="none";
			t[4].style.visibility="visible";
			t[0].style.visibility="visible";
			t[2].style.visibility="visible";
			document.getElementById("tui").style.visibility="hidden";
			document.getElementById("wanning1").style.display="none";
			break;
		case "3":
			var c=getC(t[2].childNodes);
		    c[7].innerHTML="是";
			c[5].innerHTML="abc";
			c[3].innerHTML="3";
			c[9].innerHTML="2018.02.1";
		    c=t[4].childNodes;
			
			document.getElementById("wanning").innerHTML="";
			t[2].style.visibility="visible";
			t[0].style.visibility="visible";
		    t[4].style.visibility="hidden";
			document.getElementById("tui").style.display="block";
			document.getElementById("cc1").style.display="block";
			document.getElementById("wanning1").style.display="none";
			break;
			default:
			document.getElementById("wanning1").innerHTML="此书不存在";
			document.getElementById("wanning1").style.display="block";
			t[0].style.visibility="hidden";
			t[4].style.visibility="hidden";
			t[2].style.visibility="hidden";
			document.getElementById("tui").style.visibility="hidden";
			document.getElementById("cc1").style.display="none";
}
}


function a(){
	var a;
	if(document.getElementById("4").value!=document.getElementById("5").value){
		console.log(document.getElementById("4").value+" "+document.getElementById("5").value);
		document.getElementById("ti").innerHTML="两次输入的密码不同";}
	else if(document.getElementById("2").value.length!=1)
		//console.log(document.getElementById("2").value);
	//console.log(document.getElementById("2").value.length==1);
		document.getElementById("ti").innerHTML="手机号输入不合法";
	else document.getElementById("ti").innerHTML="注册成功";	
		
}

function b(){
	var a;
	if(document.getElementById("7").value!=document.getElementById("8").value)
		document.getElementById("ti").innerHTML="两次输入的密码不同";
	else document.getElementById("ti").innerHTML="注销成功";	
		
}


function x(){
	if(document.getElementById("xxx1").textContent=="修改信息"){
			document.getElementById("ww").innerHTML="";
		var c=document.getElementsByClassName("xc");
		for(i=0;i<c.length;i++)
			console.log(c[i].tagName);
		
		for(i=0;i<c.length;i++)
			if(c[i].tagName=="TD")
				c[i].contentEditable="true";
		document.getElementById("xxx1").textContent="提交";
	}else if(document.getElementById("xxx1").textContent=="提交"){
		var cc=document.getElementsByClassName("xc");
		
		for(i=0;i<cc.length;i++)
			if(cc[i].tagName=="TD")
				if(cc[i].textContent==""){
					document.getElementById("ww").innerHTML="内容不能为空";
					return ;
				}
					
		for(i=0;i<cc.length;i++)
			if(cc[i].tagName=="TD")
				cc[i].contentEditable="false";
		document.getElementById("ww").innerHTML="";
		document.getElementById("xxx1").textContent="修改信息";
	
}
}