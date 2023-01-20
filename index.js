var numberOfDrumBotton = document.querySelectorAll(".drum").length
var audio = new Audio("sounds/tom-1.mp3")

for(i=0; i< numberOfDrumBotton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    this.style.color = "white";
    audio.play();
});
}

//or
// document.querySelectorAll(".drum")[i].addEventListener("click", respondClick);
// function respondClick(){
//     console.log("I got click");
// }


