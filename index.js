var len=document.querySelectorAll(".drum").length;

for(var i=0;i<len;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
var btninnerHTML=this.innerHTML;
makesound(btninnerHTML);
btnAnimation(btninnerHTML);
});
}

document.addEventListener("keypress",function (event){
var btninnerHTML=event.key;
makesound(btninnerHTML);
btnAnimation(btninnerHTML);
});

function makesound(key){
switch (key) {
case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
  case "a":
           var audio1 = new Audio('sounds/tom-2.mp3');
           audio1.play();
           break;
 case "s":
           var audio2 = new Audio('sounds/tom-3.mp3');
           audio2.play();
           break;
 case "d":
           var audio3=new Audio('sounds/tom-4.mp3');
           audio3.play();
           break;
 case "j":
          var audio4=new Audio('sounds/crash.mp3');
           audio4.play();
           break;
 case "k":
           var audio5=new Audio('sounds/kick-bass.mp3');
           audio5.play();
           break;
case "l":
          var audio6=new Audio('sounds/snare.mp3');
          audio6.play();
          break;
default:
console.log(key);
break;
}
}
function btnAnimation(key){
  var keypressed=document.querySelector("."+key);
keypressed.classList.add("pressed");
  setTimeout(function () {
  keypressed.classList.remove("pressed");
}, 100);
}
