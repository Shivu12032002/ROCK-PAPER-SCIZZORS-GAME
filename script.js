let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const userscorepara = document.querySelector("#your-score");
const compscorepara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const gencompchoice=()=>{
    const options=['Rock','Paper','Scizzors'];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
});
});

const playgame=(userchoice)=>{ 
    let compchoice= gencompchoice();

    if(userchoice==compchoice){
        gamedraw();
    }
    else{
        let userwin=true;
    if(userchoice=="Rock"){
        userwin=compchoice==="Paper"?false:true;
    }
    else if(userchoice=="Paper"){
        userwin=compchoice==="Scizzors"?false:true;
    }
    else{
        userwin=compchoice==="Rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
}}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        msg.innerText=`You Win ! your ${userchoice} beats ${compchoice}`;
        console.log("you win");
        msg.style.backgroundColor="green";
        userscore++;
        userscorepara.innerText=userscore;
    }
    else{
        console.log("You Lose");
        msg.innerText=`You lose ! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        compscore++;
        compscorepara.innerText=compscore;
    }
}
const gamedraw=()=>{
    msg.innerText= "Game draw! play again";
    msg.style.backgroundColor="black";
}
