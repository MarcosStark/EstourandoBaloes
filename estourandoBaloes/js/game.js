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

    var id_balao = e.id;

    document.getElementById(id_balao).setAttribute("onclick", "");
    document.getElementById(id_balao).src = "css/images/small_blue_balloon_burst.png";

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

function gameOver(){
  
    alert("Fim de jogo! Você não conseguiu estourar todos os balões!"); 

}

function stopGame(){
    clearTimeout(timer_id);
}
