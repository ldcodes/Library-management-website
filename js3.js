// JavaScript Document

function begin(){
	
	for(var i=1;i<document.getElementById("right").childNodes.length;i++)
		if(document.getElementById("right").childNodes[i].tagName==="div")
		document.getElementById("right").childNodes[i].style.display="none";
}




function change(name1){
	var a=new Array();
	a[0]="information";
	a[1]="zhuce";
	a[2]="zhuxiao";
	//console.log(name1);
	for(i=0;i<3;i++)
		if(a[i]==name1)
			document.getElementById(a[i]).style.display="block";
	    else
			document.getElementById(a[i]).style.display="none";
			
		
}






function table(name){
	console.log(document.getElementById("hhh").textContent);
	if(document.getElementById("hhh").textContent=="修改信息"){
		
		var m=getC(document.getElementById(name).childNodes);
	     var t=getC(m[1].childNodes);
          var c1=getC(t[1].childNodes);
			
		   c=c1[2].childNodes;
		//test(c);
			
			c[3].contentEditable="true";
		    c=c1[4].childNodes;
		
			c[3].contentEditable="true";
		
		
		document.getElementById("hhh").innerHTML="提交修改";
		
	}else if(document.getElementById("hhh").textContent=="提交修改"){
		var mm=getC(document.getElementById(name).childNodes);
	     var tt=getC(mm[1].childNodes);
	     
		var cc1=getC(tt[1].childNodes);
		
			 cc=cc1[4].childNodes;
			 //test(cc);
			cc[3].contentEditable="false";
		    cc=cc1[2].childNodes;
		
			cc[3].contentEditable="false";
		
		document.getElementById("hhh").innerHTML="修改信息";
		
	}
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

function test(a){
	console.log("test begin");
	for(i=0;i<a.length;i++){
		console.log("this is "+i+"  tag  "+a[i].tagName+a.length+a[i].textContent);
	}
}

function search(){
	var a=document.getElementById("searchbook1").value;
	var m=getC(document.getElementById("booktable1").childNodes);
    //console.log(t.length);
	var t=getC(m[1].childNodes);
	// for(i=0;i<t.length;i++){
		 
	//	  console.log(""+i+"m length is"+m.length+t[i].tagName);
		//  for(j=0;j<m.length;j++)
		//	  console.log("  "+m[j].tagName);
 
		
	switch (a){
		case "1":
		var c=getC(t[2].childNodes);
			c[9].innerHTML="此书值得一读";
		    c[7].innerHTML="3";
			c[5].innerHTML="a";
			c[3].innerHTML="1";
		    c=t[4].childNodes;
			document.getElementById("wanning1").innerHTML="";
			t[2].style.visibility="visible";
			t[0].style.visibility="visible";
		    t[4].style.visibility="hidden";
		
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
			document.getElementById("wanning1").innerHTML="";
			
			t[4].style.visibility="visible";
			t[0].style.visibility="visible";
			t[2].style.visibility="visible";
			
			break;
		case "3":
			var c=getC(t[2].childNodes);
		    c[7].innerHTML="0";
			c[5].innerHTML="abc";
			c[3].innerHTML="3";
			c[9].innerHTML="这书太抢手了";
		    c=t[4].childNodes;
			document.getElementById("wanning1").innerHTML="";
			t[2].style.visibility="visible";
			t[0].style.visibility="visible";
		    t[4].style.visibility="hidden";
			
			break;
			default:
			document.getElementById("wanning1").innerHTML="此书不存在";
			t[0].style.visibility="hidden";
			t[4].style.visibility="hidden";
			t[2].style.visibility="hidden";
			
			 
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
	console.log("bbbb");
	if(document.getElementById("7").value!=document.getElementById("8").value)
		document.getElementById("ti").innerHTML="两次输入的密码不同";
	else document.getElementById("ti1").innerHTML="注销成功";	
		
}

function increase(){
	var m=document.getElementById("booktable").childNodes;
	var t=m[1].childNodes;
		var l=up();
	console.log(l+"  "+t.length);
	if(document.getElementById("op").textContent=="增加书目"){
   
	var table = document.getElementById("booktable");    
    oneRow = table.insertRow();
    cell1= oneRow.insertCell();
    cell2=oneRow.insertCell();  
	  cell3=oneRow.insertCell();  
	  cell4=oneRow.insertCell(); 
	  cell5=oneRow.insertCell();  
	  cell6=oneRow.insertCell(); 
	
	
	 cell1.style.background="#328aa4 url(tr_back.gif) repeat-x";
	cell1.style.color="#fff";
    cell1.style. border="1px solid #fff";
	 cell1.style.height="21px";
	cell1.style.textAlign="left";

	cell1.innerHTML =l;
	cell2.contentEditable="true";
	cell3.contentEditable="true";
	cell4.contentEditable="true";
	cell5.contentEditable="false";
		cell5.innerHTML="0";
		
		cell2.innerHTML="无";
		cell3.innerHTML="无";
		cell4.innerHTML="-1";
	cell6.contentEditable="false";
		cell6.innerHTML="<a onClick='del(l);'>删除</a>";
	document.getElementById("op").innerHTML="提交";
	
		
		oneRow.id=l;
		
	}else if(document.getElementById("op").textContent=="提交"){
		
		fff=1;
	flag=0;
	for(i=0;i<t.length;i++){
		//console.log(i+"t[i] length "+t[i].childNodes.length);
		if(t[i].childNodes.length!=0&&t[i].style.display!="none"){
		
		var nk=t[i].childNodes;
		if(nk.length!=0){
		
		if(nk[1].childNodes.length!=0){
			
			if(l!=fff){
				
				fff++;
				
			}else{
				
					var j=t[i].childNodes;
					var e=new Array;
				    ee=0;
						console.log(fff+"okasdasd"+l);
				
				
						for(p=0;p<j.length;p++){
							if(j[p].childNodes[0]!=undefined){
								e[ee]=p;
								ee++;
								console.log(p+" j[p] "+j[p].childNodes[0].textContent);
							if(j[p].childNodes[0].textContent==""){
				                   flag=1; 
								console.log(j.length+"p is "+p);
								document.getElementById("wanning").innerHTML="请完整填写书目信息";
								return;
							} 
						}
						}
						
						if(parseInt(j[e[3]].childNodes[0].textContent)<=0){
			                  document.getElementById("wanning").innerHTML="图书数量不能小于1";
			                    flag=2; 
							console.log("图书数量"+j[e[3]].childNodes[0].textContent);
							   return;
							} 
				            if(parseFloat(j[e[3]].childNodes[0].textContent)%1!=0){
								console.log("图书数量"+j[e[3]].childNodes[0].textContent);
			                document.getElementById("wanning").innerHTML="图书数量必须为整数";
		                     flag=3; 
							return;
							}
						
						if(flag==0) {
			     document.getElementById("op").innerHTML="增加书目";
			      document.getElementById("wanning").innerHTML="";
			     j[3].contentEditable="false";
			    j[1].contentEditable="false";
			      j[2].contentEditable="false";
						
							console.log("as as as "+ j[2].childNodes[0].textContent);	
							console.log( "as as as "+ j[2].childNodes[0].textContent);	
							console.log( "as as as "+ j[1].childNodes[0].textContent);	
							return;
		                  }
						
			//if
				
			}//else
		}
		}
		}
	}
		
	
		
	
		
		
		
	}
	
}

function up(){
	var m=getC(document.getElementById("booktable").children);
	var t=m[0].childNodes;
	
	aaa=1;
	for(i=2;i<t.length;i++){
		if(t[i].childNodes.length!=0&&t[i].style.display!="none"){
		var n=t[i].childNodes;
		if(n.length!=0){
		if(n[3].childNodes.length!=0){
			for(p=0;p<n.length;p++)
				if(n[p].childNodes[0]!=undefined){
					console.log("this is "+aaa+" "+n[p].childNodes[0].textContent);
			if(n[p].childNodes[0].textContent==""){
				
				//aaa++;
				console.log(n.length+"the last aaa"+aaa);
				//return aaa;
			}
			}
			
			aaa++;
				
			
		}
		}
		}
	}
	console.log("thexxxx last aaa"+aaa);
	return aaa;
}

function del(num){
	//console.log("in");
	var m=getC(document.getElementById("booktable").children);

	
	var t=m[0].childNodes;

	
	aaa=1;
	for(i=2;i<t.length;i++){
		if(t[i].childNodes.length!=0&&t[i].style.display!="none"){
		var n=t[i].childNodes;
		if(n.length!=0){
		if(n[1].childNodes.length!=0){
			if(num!=aaa){
				//console.log("in");
			//var k=n[1].childNodes;
				aaa++;
				
			}else{
				break;
			}
		}
		}
		}
	}
	
	num=aaa;

	console.log("num is "+num);
	//t[num*2].style.display="none";
	
	mm=1;
	for(i=2;i<t.length;i++){
		if(t[i].childNodes.length!=0&&t[i].style.display!="none"){
		var n=t[i].childNodes;
		if(n.length!=0){
		if(n[1].childNodes.length!=0){
			if(num!=mm){
				//console.log("in");
			var k=n[1].childNodes;
				console.log("kkk"+k[0].textContent+" "+mm);
			   // k[0].innerHTML=mm;
				k[0].textContent=mm;
				mm++;
			}else{
				console.log("out");
				t[i].style.display="none";
				num=-1;
			}
		}
		}
		}
	}
	
	/*m.childnodes.length=0
	m[0].childNodes.length=12
	t.length=12
	
	t[0/2/4/6/8/10].childNodes.lent=13 tr
	t[1/3/5/7/9/11].childNodes.length=0
	
	n[1/3/4/7/9/11].childNodes.length=1 
	n[0/2/4/6/8/10/12].childNodes.length=0
	
	t 是行, t[i].childennodes is the 单元格
	
	
	*/
	//console.log(t[0].children.length);
	//test(t[1]);
	//t[2].children[0].innerHTML="10";
	//console.log(t[2].children[2]);
	//t[num].style.display="none";

	

}


