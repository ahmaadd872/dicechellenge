var randomnumber1 = Math.floor((Math.random())*6)+1;

var randomimage1="dice"+randomnumber1+".png"; 

var randomsrc="images/"+randomimage1;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsrc);

var randomnumber2 = Math.floor((Math.random())*6)+1;
var randomimage2="dice"+randomnumber2+".png";
var randomsrc="images/"+randomimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomsrc);


if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").textContent="Player 1 Wins";
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").textContent="Player 2 Wins";
}
else{
    document.querySelector("h1").textContent="Draw";
}

