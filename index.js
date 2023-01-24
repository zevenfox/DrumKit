var numberOfDrumBotton = document.querySelectorAll(".drum").length
var audio = new Audio("sounds/tom-1.mp3")

for(i=0; i< numberOfDrumBotton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttoninnerHTML)



    })
} 

document.addEventListener("keydown", function(event){
    playSound(event.key)
    buttonAnimation(event.key)
});

function playSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;
        default: console.log(key);
    }
}


function buttonAnimation(currentKey){
    var activeBotton = document.querySelector("." + currentKey)
    activeBotton.classList.add("pressed");
    setTimeout(function (){
        activeBotton.classList.remove("pressed")
    }, 100);
}


//or
// document.querySelectorAll(".drum")[i].addEventListener("click", respondClick);
// function respondClick(){
//     console.log("I got click");
// }


