var x=Math.floor(Math.random()*6+1);
var imagesource="images/dice"+x+".png";
var y=document.querySelectorAll("img")[0];
y.setAttribute("src", imagesource);


var m=Math.floor(Math.random()*6+1);
var imagesource1="images/dice"+m+".png";
var n=document.querySelectorAll("img")[1];
n.setAttribute("src", imagesource1);

if(x>m)
{
document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(m>x)
{
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else
{
  document.querySelector("h1").innerHTML="Draw";
}
