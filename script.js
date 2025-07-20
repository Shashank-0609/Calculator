const display = document.getElementById("display");
const del = document.getElementById("del");
const square = document.getElementById("square");
const calculator = document.getElementById("cal");
const leftButton = document.getElementById("left")
const rightButton = document.getElementById("right")

// used to display numbers and operators in display
function addToDisplay(button){
    display.innerText += button;
}
// used to clear the previous display
function clearDisplay(){
    display.innerText = "";
}
// used to give result when equals is pressed
function evaluateRes(){
    if(display.innerText === "" || display.innerText === "0"){
        display.innerHTML = "Error";
        // to remove error message in 1second
            setTimeout(() => {
                display.innerText = "";
            }, 1000);
    }
    else{
        
        try {
            display.innerText = eval(display.innerText);
        } catch (error) {
            display.innerText = "Error";
            // to remove error message in 1second
            setTimeout(() => {
                display.innerText = "";
            }, 1000);
        }
    }
}
// used to square any number
function squareRes(){
    display.innerText = Math.pow(eval(display.innerText),2);
}
// event listener used to delete a number,operation on the display
del.addEventListener("click",()=>{
    display.innerText = display.innerText.slice(0,-1);
});

function moveToLeft(){
    cal.classList.remove("calToRight");
    cal.classList.add("calToLeft");
}

function moveToRight(){
    cal.classList.remove("calToLeft");
    cal.classList.add("calToRight");
}

function moveToCenter(){
    cal.classList.remove("calToRight");
    cal.classList.remove("calToLeft");
}