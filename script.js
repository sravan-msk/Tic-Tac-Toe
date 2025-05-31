/** in this game 2 players are playing they are player 1 is O and player 2 is X */

let turnO = true;

let boxes = document.querySelectorAll(".box");
let newButton = document.querySelector(".new");
let resetbutton = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

/**game winninng patterns are :  */
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/**In this foreach loop decides the players turns O or X turn */
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true; /**it turn offs the buttons after clicking once */
    checkWinner(); /**checkwinner() function checks the win the game  */
  });
});

//checks the winner


function checkWinner(){
  for(patterns of winningPatterns){
    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        console.log(`winner is : ${pos1Val}`);
        disableButtons();
        showWiner(pos1Val);
      }
    }
  }
}

//showing winner

const showWiner =(winer)=>{
  msgContainer.style.display = "block";
  msg.innerText = `Congratulation winner is : ${winer}`;
}

//after winning one person disable the buttons

const disableButtons = ()=>{
  for(box of boxes){
    box.disabled = true;
  }
}

//reset buttons enabling

const resetButton = ()=>{
  enablesButtons();
  msgContainer.style.display = "none";
}

const enablesButtons = () =>{
  for(box of boxes){
    box.innerText ="";
    box.disabled = false;
    turnO= true;
  }
}

resetbutton.addEventListener('click',()=>{
  resetButton();
})
newButton.addEventListener('click',()=>{
  resetButton();
})