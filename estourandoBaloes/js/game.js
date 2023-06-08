var qtd_balloons = 72;
var timer_id = null;

function start(){
    let dificultity = document.querySelector("#dificultity").value;
    time(dificultity);
}



function time(value){

    let gameTime;

    if(value == 1){

        gameTime = 90;

    } else if(value == 2){

        gameTime = 60;

    } else {

        gameTime = 30;
    }

    localStorage.setItem("gameTime", gameTime);
 
}

(function(){

    document.querySelector("#timer").innerHTML =  localStorage.getItem("gameTime");

    document.querySelector("#whole-balloons").innerHTML = qtd_balloons;
    document.querySelector("#popped-balloons").innerHTML = 0;
    createBalloons(qtd_balloons);
    timeCount(localStorage.getItem("gameTime"));

})();

function createBalloons(qtd_balloons) {

    for(var i = 1; i <= qtd_balloons; i++){
    var balloon = document.createElement("img"); // Cria o elemento img na div do id "cenario"
    balloon.src = "css/images/small_blue_balloon.png";
    balloon.style.margin = "8px";
    balloon.id = 'b' + i;
    balloon.onclick = function(){popBalloons(this);};
    document.querySelector("#balloons").appendChild(balloon);
    
    }
}

function popBalloons(e){

    var id_balloon = e.id;

    document.getElementById(id_balloon).setAttribute("onclick", "");
    document.getElementById(id_balloon).src = "css/images/small_blue_balloon_burst.png";

    return score(-1);
}


function timeCount(time){

    time = time - 1;

    if(time == -1){
        stopGame();
        gameOver();
        return false;
    }

    document.getElementById("timer").innerHTML = time;

    timer_id = setTimeout("timeCount("+time+")", 1000);
}

function score(scr){
    
    var whole_balloons = document.getElementById("whole-balloons").innerHTML;
    var popped_balloons = document.getElementById("popped-balloons").innerHTML;

    whole_balloons = parseInt(whole_balloons);
    popped_balloons = parseInt(popped_balloons);
    
    whole_balloons = whole_balloons + scr;
    popped_balloons = popped_balloons - scr;

    document.getElementById("whole-balloons").innerHTML = whole_balloons;
    document.getElementById("popped-balloons").innerHTML = popped_balloons;
}

function gameOver(){
  
    alert("Fim de jogo! Você não conseguiu estourar todos os balões!"); 

}

function stopGame(){
    clearTimeout(timer_id);
}
