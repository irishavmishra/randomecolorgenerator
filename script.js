let btn = document.querySelector(".btn");

let body = document.body;

function randomeColorGenerator(){
    const red = parseInt(Math.random()*255);
    const green = parseInt(Math.random()*255);
    const blue = parseInt(Math.random()*255);
    const randomeColor = `rgb(${red},${green},${blue})`
    return randomeColor;
};

let rgbColor = document.querySelector(".rgb-color span")

btn.addEventListener("click",()=>{
    const randomeColor = randomeColorGenerator()
    body.style.backgroundColor = randomeColor
    rgbColor.textContent = randomeColor

});


