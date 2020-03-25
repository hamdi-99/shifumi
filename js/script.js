function rockfunction() {
    var u = "ROCK" ;
    var a = Math.floor(Math.random() * Math.floor(3));
    if (a===0)
        draw("ROCK",u);
    else if(a===1)
        loose("PAPER",u);
    else
        win("SCISSORS",u);
}

function scissorsfunction() {
    var u = "SCISSORS";
    var a = Math.floor(Math.random() * Math.floor(3));
    if (a===0)
        loose("ROCK",u);
    else if(a===1)
        win("PAPER",u);
    else
        draw("SCISSORS",u);
}

function paperfunction(){
    var u ="PAPER";
    var a = Math.floor(Math.random() * Math.floor(3));
    if (a===0)
        win("ROCK",u);
    else if(a===1)
        draw("PAPER",u);
    else
        loose("SCISSORS",u);
}

function win(n , k) {
    var score=document.getElementById("score") ;
    var ch = score.innerHTML ;
    //alert(ch.substring(ch.indexOf(":")+1,ch.length));
    score.innerHTML=(parseInt(ch.substring(0,ch.indexOf(":"))) +1) + ":" + (ch.substring(ch.indexOf(":")+1,ch.length)) ;
    var text=document.getElementById("text");
    text.innerHTML= k +" beats "+ n +" . you Win ! ";
    var sc = document.getElementById("mysc") ;
    var sc1 = document.getElementById("cpsc") ;
    if((sc.className !== "scwin")&&(sc1.className !== "scloss")) {
        sc.setAttribute("class" ,"scwin");
        sc1.setAttribute("class" ,"scloss");
    }
}

function draw(n , k) {
    var text=document.getElementById("text");
    text.innerHTML= "You both played "+ k + ". Draw ! ";
    var sc = document.getElementById("mysc") ;
    var sc1 = document.getElementById("cpsc") ;
    if((sc.className !== "sc")&&(sc1.className !== "sc")) {
        sc.setAttribute("class" ,"sc");
        sc1.setAttribute("class" ,"sc");
    }
}

function loose(n , k){
    var score=document.getElementById("score") ;
    var ch = score.innerHTML ;
    //alert(ch.substring(ch.indexOf(":")+1,ch.length));
    score.innerHTML=(ch.substring(0,ch.indexOf(":")))  + ":" + (parseInt((ch.substring(ch.indexOf(":")+1,ch.length)))+1) ;
    var text=document.getElementById("text");
    text.innerHTML= n +" beats "+ k +" . you loose ! &#128531 ";
    var sc = document.getElementById("mysc") ;
    var sc1 = document.getElementById("cpsc") ;
    if((sc.className !== "scloss")&&(sc1.className !== "scwin")) {
        sc.setAttribute("class" ,"scloss");
        sc1.setAttribute("class" ,"scwin");
    }
}