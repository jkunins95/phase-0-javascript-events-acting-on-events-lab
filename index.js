// Your code here
document.addEventListener("keydown", function(event) {
    console.log(event);
});

/* 
document.addEventListener("keydown", function(event) {
    if(event.key === "ArrowLeft") {
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);

        dodger.style.left = `${left - 1}px`
    }
});
*/ //Callback function is getting complex

const dodger = document.getElementById("dodger");

// Move the dodger LEFT if statement returns true
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if(left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

// Event Listener
document.addEventListener("keydown", function(e) {
    if(e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

// Move the dodger RIGHT if statement returns true
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if(left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

// Event Listener
document.addEventListener("keydown", function(e) {
    if(e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

