
var dice=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
function choosePick(){
  var num= Math.floor(Math.random()*6);
  var num1= Math.floor(Math.random()*6);
  var img1=document.getElementById("im1");
  var img2=document.getElementById("im2");
img1.setAttribute("src",dice[num]);
img2.setAttribute("src",dice[num1]);
return [num,num1];

}

function winner(num,num1){
var heading=document.querySelector("h1");
if(num>num1)
heading.innerHTML="Player 1 Wins";
else if(num<num1)
heading.innerHTML="Player 2 Wins";
else
heading.innerHTML="No winner";
}

 var button= document.querySelector("button");
 button.addEventListener("click",function(){
   var num=choosePick();
   winner(num[0],num[1]);
 })
