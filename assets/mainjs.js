
// let togglebutton = document.getElementById("toggle-button");
// let aside = document.querySelector("aside");
// let section = document.querySelector("section");


// togglebutton.onclick = function(){
// 	aside.style.width = aside.style.width == "0px" ? "280px" : "0px";
//         section.style.paddingLeft= aside.style.width == "0px" ? "10px" : "290px";
// }





// var dropbtn = document.getElementsByClassName("dropbtn");

// for(let x = 0 ; x < dropbtn.length ; x++){
// 	dropbtn[x].onclick = function(){
// 		let childdiv = this.nextElementSibling;
// 		childdiv.style.display=="block" ? childdiv.style.display = "none" : childdiv.style.display = "block";	
// 	}
// }



  let toggle = document.getElementById('toggle-button');
  let mainnavigation = document.getElementById('mainnavigation');

  function match(x){
	if(x.matches){
		//alert("match")
	}else{
		mainnavigation.style.display = "block"
	}
}

var x = window.matchMedia("(max-width: 801px)");
match(x);
x.addListener(match);


  toggle.onclick = function(){
  mainnavigation.style.display = mainnavigation.style.display == "block"  ? "none" : "block";
  }


	let projectimgbtn = document.getElementsByClassName('projectimgbtn');

	function showimagebutton(x){
		projectimgbtn[x].style.display = "block";
	}

	function hideimagebutton(x){
		projectimgbtn[x].style.display = "none";
	}

