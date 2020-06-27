var css= document.querySelector("h3");
var css2= document.querySelector(".properties");
var button = document.querySelector(".color1");
var button2 = document.querySelector(".color2");
var body = document.getElementById("body");
var randomButton = document.querySelector(".random");
/*var rightButton = document.querySelector(".right");*/


body.onload = function(){
				body.style.background = "linear-gradient(to right, "+ button.value +  ", " + button2.value +")";
				css.textContent= body.style.background + ";" ;
}

function process()

					{
						body.style.background = "linear-gradient(to right, "+ button.value +  ", "+ button2.value +")";
						css.textContent= body.style.background + ";" ;
					}
					
					
function random()

{	

var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);
var a = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var c = Math.floor(Math.random() * 256);


	
	var gradient1 = "rgb(" + x +  ", " + y +  ", " + z + ")";
	var gradient2 = "rgb(" + a + ", " + b + ", " + c + ")";

	body.style.background = "linear-gradient(to right, "+  gradient1 +  ", " + gradient2 +")";
	css2.textContent= body.style.background + ";" ;

}

/*function right()

{   
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	
	var grad = "rgb(" + x + "," + y + "," + z +")";
	
	body.style.background = "linear-gradient(to right, "+ button.value + "," + grad + ")";
	
}*/


button.addEventListener("input", process);
					
button2.addEventListener("input", process);

randomButton.addEventListener("click", random);

/*rightButton.addEventListener("click", right);*/
