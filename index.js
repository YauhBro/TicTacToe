let symbol=""
let countsymb=0
let i=0
let winner=0 //1=win, 0=looser
let arrPosition=[""]
let endgame=false
let start=0


function acqSymb(){
    if(countsymb==0){
        symbol="X"
        countsymb=1
        return symbol
    }
    if(countsymb==1){
        symbol="O"
        countsymb=2
        return symbol
    }
    if(countsymb==2){
        symbol="X"
        countsymb=1
        return symbol
    }
}

function rowWinner(){


function row(symbol){ //i is always 0, recursevly inspect all the lines and find the solution
        let j=0
        let counter=0
        for(j=0;counter<3;j=j+3){
            counter=counter+1
            if(arrPosition[j]==symbol && arrPosition[j+1]==symbol && arrPosition[j+2]==symbol){
                winner=1
                return winner
            }
        }
}
winner=row("O")
if(winner==1){
    alert("O is the winner")
    return winner
}
winner=row("X")
if(winner==1){
    alert("X is the winner")
return winner
}

}

function reset(){
    for(i=0;i<9;i++){
        currPos=i+1
        symbol="a"+currPos
        arrPosition[i]=""
        document.getElementById(symbol).value=" "
    }
    countsymb=0
    winner=0
    endgame=false
}


function colWinner(){
    function col(symbol){
        let j=0;
        let counter=0
   for(j=0;counter<3;j++){
    counter=counter+1
    if(arrPosition[j]==symbol && arrPosition[j+3]==symbol && arrPosition[j+6]==symbol){
        winner=1
        return winner
   }
    }
}
    winner=col("X")
    if(winner==1){
    alert("X win")
    return winner
    }
    winner=col("O")
    if(winner==1){
    alert("O win")
    return winner
    }
}

 function diagWinner(){
    function diag(symbol){
    if(arrPosition[0]==symbol && arrPosition[4]==symbol && arrPosition[8]==symbol){
            winner=1
            return winner

    }

    if(arrPosition[2]==symbol && arrPosition[4]==symbol && arrPosition[6]==symbol){
        winner=1
        return winner
    }
    winner=0
    return winner
 }
 winner=diag("O")
 if(winner==1){
    alert("The winner is O")
 return winner
 } 
 winner=diag("X")
 if(winner==1){
    alert("The winner is X")
    return winner
 }
 winner=0
 return winner
}


function checkSolution(){
    winner=rowWinner()
    if(winner==1){
        endgame=true
    return winner
    }
    winner=colWinner()
    if(winner==1){
        endgame=true
        return winner
        }
        winner=diagWinner()
        if(winner==1){
            endgame=true
            return winner
            }
            winner=0
            return winner
}
function nowinner(){
    let i=0;
    let counter=0
    for(i=0;i<9;i++){
        if(arrPosition[i]!="")
            counter=counter+1
    }
    if(counter==9){
        alert("Draw")
        return true
    }
    else
    return false
}



 function setSymb(i){
    let symb=acqSymb();
    let id="a"+i
    arrPosition[i-1]=symb
    document.getElementById(id).value=symb
    winner=checkSolution()
    if(start!=0){
    if(endgame==true || nowinner()==true){
    reset()
    }
}
    start=1
}