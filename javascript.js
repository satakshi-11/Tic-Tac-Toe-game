let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgCon=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");
let turn0=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turn0){
        box.classList.add("O");
        box.classList.remove("X");
        box.innerText="O";
        turn0=false;
    }
    else{
        box.classList.add("X");
        box.classList.remove("O");
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;
    count++;

    let isWinner =checkwinner();

    if (isWinner) {
        disableboxes();
        showWinner(turn0 ? "X" : "O");
      } else if (count === 9) {
        gameDraw();
      }
  });
});
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgCon.classList.remove("hide");
  disableboxes();
};
const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
 msg.innerText=`Congratulations!Winner is ${winner}`;
 msgCon.classList.remove("hide");
 disableboxes();
}

const checkwinner = () => {
 
    for(let pattern of winPatterns){
        val1=boxes[pattern[0]].innerText;
        val2=boxes[pattern[1]].innerText;
        val3=boxes[pattern[2]].innerText;
        if(val1!="" && val2!="" && val3 != ""){
            if(val1===val2 && val2===val3){
                
                showWinner(val1);
                return true;
            }
        }
    }
}
const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgCon.classList.add("hide");
}
newgame.addEventListener("click",resetgame);
reset_btn.addEventListener("click",resetgame);
