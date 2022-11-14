

// ----product image js--
var productimg  = document.getElementById('product-img');
var smallimg  = document.getElementsByClassName('small-img');
smallimg(0).onclick = function()
{
	productimg.src = smallimg[0].src;
}
smallimg(1).onclick = function()
{
	productimg.src = smallimg[1].src;
}
smallimg(2).onclick = function()
{
	productimg.src = smallimg[2].src;
}
smallimg(3).onclick = function()
{
	productimg.src = smallimg[3].src; 
}


window.onload=function(){
    var minusBtn = document.getElementById("minus"),
        plusBtn = document.getElementById("plus"),
        numberPlace = document.getElementById("numberPlace"),
        number = 0, /// number value
        min = 0, /// min number
        max = 30; /// max number
        
    minusBtn.onclick = function(){
        if (number>min){
           number = number-1; /// Minus 1 of the number
           numberPlace.innerText = number ; /// Display the value in place of the number
           
        }
        if(number == min) {        
            numberPlace.style.color= "red";
            setTimeout(function(){numberPlace.style.color= "black"},500)
        }
        else {
          numberPlace.style.color="black";            
           }
		}
	}

