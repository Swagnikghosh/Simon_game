let gameseq=[];
let userseq=[];
let highestscore=0;
let btns=["yellow","red","blue","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
    
});
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let random=Math.floor(Math.random()*4);
    let randbtn=btns[random];
    let btn=document.querySelector(`.${randbtn}`);
    gameseq.push(randbtn);
    console.log(gameseq);
    flash(btn);

}
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
};
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000);
};

function checkans(idx){
    //console.log("current level :" ,level);
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
        
    } 
    else{
        h2.innerText=`game over press any key to continue your score is ${level-1}`;
       
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        if(level>highestscore){
            highestscore=level;
            document.querySelector('p').innerText=`highest score=${highestscore-1}`;
        }
        reset();
    }
}
function btnpress(){
    let btn=this;
    userflash(btn);
    let usercolor=btn.getAttribute("id");
    //console.log(usercolor);
   
    userseq.push(usercolor);
    checkans(userseq.length -1);
    

    
}

let btnns=document.querySelectorAll(".btn");
for(btn of btnns ){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}