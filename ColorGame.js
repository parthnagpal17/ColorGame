var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var display = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
display.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#resetButton");

var ez = document.querySelector("#ez");
var hrd = document.querySelector("#hrd");

ez.addEventListener("click", function() {
    this.classList.add("selected");
    hrd.classList.remove("selected");
    colors = generateRandomColors(3);
    h1.style.backgroundColor = "#232323";

    for(var i = 0; i < 3; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        if (clickedColor === pickedColor) {
            changeColors2();
        }
    })
}

    for(var i = 3; i < 6; i++) {
    squares[i].style.backgroundColor = "#232323";
    squares[i].addEventListener("click", function(){
        if (messageDisplay.textContent === "Try Again!"){
            messageDisplay.textContent = "Try Again!";
        }
        if(messageDisplay.textContent === "Correct!") {
            messageDisplay.textContent = "Correct!";
            }
        else {
            messageDisplay.textContent = "";
        }
    });

    }

    pickedColor = pickColor();
    display.textContent = pickedColor;
    messageDisplay.textContent = "";


});

function ezz() {
    // this.classList.add("selected");
    // hrd.classList.remove("selected");
    colors = generateRandomColors(3);
    h1.style.backgroundColor = "#232323";
    reset.textContent = "New Colors";

    for(var i = 0; i < 3; i++) {
    squares[i].style.backgroundColor = colors[i];}

    for(var i = 3; i < 6; i++) {
    squares[i].style.backgroundColor = "#232323";
    squares[i].addEventListener("click", function(){
        if (messageDisplay.textContent === "Try Again!"){
            messageDisplay.textContent = "Try Again!";
        } else {
            messageDisplay.textContent = "";
            }

    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors();
        h1.style.backgroundColor = pickedColor;
        reset.textContent = "Play Again";
    } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
    }

    });

    }
    pickedColor = pickColor();
    display.textContent = pickedColor;
    messageDisplay.textContent = "";

}

hrd.addEventListener("click", function() {
    this.classList.add("selected");
    ez.classList.remove("selected");
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "#232323";
    display.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors();
            h1.style.backgroundColor = pickedColor;
            reset.textContent = "Play Again";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })

}

});

function hrdd() {
    // this.classList.add("selected");
    // ez.classList.remove("selected");
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "#232323";
    display.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    reset.textContent = "New Colors";

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors();
            h1.style.backgroundColor = pickedColor;
            reset.textContent = "Play Again";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });

}

}



reset.addEventListener("click", function() {
    // if (ez.classList.includes("selected")){
    //     ezz();
    // } else if (hrd.classList.includes("selected")) {
    //     hrdd();
    // } else {

        if(ez.classList.contains("selected") === true) {
            ezz();
        } else {colors = generateRandomColors(6);
        for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        pickedColor = pickColor();
        h1.style.backgroundColor = "#232323";
        display.textContent = pickedColor;
        messageDisplay.textContent = "";
        reset.textContent = "New Colors";
}

    // }

}

});


for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor ) {
            messageDisplay.textContent = "Correct!";
            changeColors();
            h1.style.backgroundColor = pickedColor;
            reset.textContent = "Play Again";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })

}

function changeColors() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}
function changeColors2() {
    for (var i = 0; i < 3; i++) {
        squares[i].style.backgroundColor = "blue";

    for (var i = 3; i < 6; i++) {
        squares[i].style.backgroundColor = "#232323";
    }
    }
}

function pickColor() {
    var x = Math.floor(Math.random()*colors.length);
    var y = colors[x];
    return y;
}


function pickColor2() {
    var x = Math.floor(Math.random()*256);
    return x;
}

function formColor() {
    var r = pickColor2();
    var g = pickColor2();
    var b = pickColor2();
    var color = "rgb("+r+", " + g + ", " + b+")";
    return color;
}


function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push(formColor());
    }
    return arr;

}



