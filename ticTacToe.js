let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let container = document.querySelector(".msg-container");
let para = document.querySelector("#win");

let turnO = true;

const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const resetGame = () => {
    turnO = true;
    enableBoxes();
    container.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=> {
        if (turnO){
            box.style.color = "#581908";
            box.innerText = "O";
            turnO = false;
        }else{
            box.style.color = "#983628"
            box.innerText = "X";
            turnO = true;
        }
        box.disbabled = true;
        checkWinner();
    })
})

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    para.innerText = `Congratulation, the winner is ${winner}`;
    container.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for (let patterns of winningPattern){
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);