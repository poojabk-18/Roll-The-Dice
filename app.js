let lastRotation = 0;
const number = document.getElementById("number");
const image = document.getElementById("image")
let rotationarr = ["360" , "-360"]
let audio = document.getElementById("audio")

function rolldie(){
    number.style.color = "brown"
    number.innerHTML = "Loading..."
    audio.src = "dice-142528.mp3";
    audio.play()
       let result = Math.floor(Math.random()*6+1)
   let rotation = rotate()
image.style. transform = `rotate(${rotation}deg)`
image.style.transition = "1.2s";
setTimeout(() => {
    if(result<=6){
        image.src = `dice-six-faces-${result}.png`
        number.innerHTML = result
        number.style.color = "#211a7eff"
    }
}, 1000);
}

function rotate(){
lastRotation += 360; // Add 360 each time
  return lastRotation;
}

function regame(){
    window.location.reload();
}