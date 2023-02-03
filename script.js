let isMouseDown = false;
let color = "black";
let buttons = document.querySelectorAll('.btn, .subbtn');
let sound = document.querySelector('.myAudio');
let sound2 = document.querySelector('.myAudio2');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function(){
        sound.currentTime = 0;
        sound.play();
    });
    button.addEventListener('mousedown', function(){
        sound2.currentTime = 0;
        sound2.play();
    });
});

function createBoard(size){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let square =  document.createElement("div");
        square.style.backgroundColor = "white";
        square.style.border = "1px solid #f5f6fa";
        square.addEventListener("mousedown",function(){
            isMouseDown = true;
            colorSquare(square);
        });
        square.addEventListener("mousemove",function(){
            if(isMouseDown){
                colorSquare(square);    
            };
        });
        square.addEventListener("mouseup",function(){
            isMouseDown = false;
        });

        board.insertAdjacentElement("beforeend", square);
    }
}

function changeSize(input) {
    if (input >= 2 && input <= 100 ) {
        createBoard(input);
        document.querySelector('.error').textContent = "";
    }
    else{
        document.querySelector('.error').textContent = "⚠️ Please enter a number between 2 and 100!";
    }
}

function changeColor(choice){
    color = choice;
}

function colorSquare(square){
    if(color === 'random'){
        square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else
        square.style.backgroundColor = color;
}

function resetBoard(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}


createBoard(16);