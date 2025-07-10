 alert("welcome to external js");


 function myResult(fname, lname, email){

 	return "My name is " + fname + " " + lname + " and my email is " + email ;
 }

 let fulname = myResult("Emeka", "Okoro", "emeka123@gmail.com");
 document.getElementById("food").innerHTML = fulname;

 document.getElementById("food").style.marginleft ="20px";
 document.getElementById("food").style.fontsize ="20px";
 document.getElementById("food").style.fontweight ="bold";
 document.getElementById("food").style.marginTop ="15px";
 document.getElementById("food").style.color ="purple";


 function myAnswer(){
 	let x = 12;
 	let y = 8;
 	let z = x + y ;

 	document.getElementById("number").innerHTML = " the sum of x and y is equal to " + z;
 }