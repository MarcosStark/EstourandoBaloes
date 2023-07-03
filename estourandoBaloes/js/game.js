var qtd_balloons = 70;
var timer_id = null;
var time_end;
var time_restart;
var consolidated_score = 0;
var qtd_games = 1;
var teste2 = 0;

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
    
    time_restart = localStorage.getItem("gameTime");
    timeCount(time_restart);

    document.querySelector("#btn-restart").addEventListener("click", restart);

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

var teste = [];

function popBalloons(e){

    var id_balloon = e.id;

    if(time_end != -1){

        if(teste.indexOf(id_balloon) == -1){

            document.getElementById(id_balloon).src = "css/images/small_blue_balloon_burst.png";
            score(-1);
        } else {
            
        }

        teste[teste2] = id_balloon;            
        teste2 = teste2 + 1;
    }

}

function timeCount(time){

    if(time == -1){
        stopGame();
        gameOver();
        time_end = time;
        return false;
    }

    document.getElementById("timer").innerHTML = time;

    time = time - 1;

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

    consolidated_score =  popped_balloons;  
    
    victory(whole_balloons);
}

function gameOver(){
  
    document.getElementById("modal-defeat").style.display = "flex";
    consolidatedScore();
}

function victory(whole_balloons){
  
    if(whole_balloons == 0){
        
        document.getElementById("modal-victory").style.display = "flex";
        stopGame();
    }
}

function restart(){

    document.getElementById("modal-defeat").style.display = "none";
    document.getElementById("modal-victory").style.display = "none";

    for(i = 1; i <= 70; i++){

        let id_balloon = "b" + i;

            document.getElementById(id_balloon).src = "css/images/small_blue_balloon.png";
        }


    document.getElementById("whole-balloons").innerHTML = 70;
    document.getElementById("popped-balloons").innerHTML = 0;
    stopGame();  
    timeCount(time_restart);
    time_end = null;

    qtd_games = qtd_games + 1;
    console.log("01: ", qtd_games);
     
}

function stopGame(){

    clearTimeout(timer_id);
    consolidatedScore();
}

function consolidatedScore(){

    let score1 = document.getElementById("score1");
    let score2 = document.getElementById("score2");
    let score3 = document.getElementById("score3");
    let score4 = document.getElementById("score4");
    let score5 = document.getElementById("score5");

    let r1 = document.querySelector("#result-style1");
    let r2 = document.querySelector("#result-style2");
    let r3 = document.querySelector("#result-style3");
    let r4 = document.querySelector("#result-style4");
    let r5 = document.querySelector("#result-style5");

    switch(qtd_games){

        case 1:

            if(consolidated_score == 70){
        
                r1.style.backgroundColor = "gold";
                document.getElementById("score1").innerHTML = "VITÓRIA";
            } else {
                
                r1.style.backgroundColor = "gray";
                score1.innerHTML = consolidated_score;
            }
        break;

        case 2:
        
            if(consolidated_score == 70){

                r2.style.backgroundColor = "gold";
                document.getElementById("score2").innerHTML = "VITÓRIA";
            } else {
                
                r2.style.backgroundColor = "gray";
                score2.innerHTML = consolidated_score;
            }
            break;

        case 3:
        
        if(consolidated_score == 70){
       
            r3.style.backgroundColor = "gold";
            document.getElementById("score3").innerHTML = "VITÓRIA";
        } else {
            
            r3.style.backgroundColor = "gray";
            score3.innerHTML = consolidated_score;
        }
        break;

        case 4:
        
        if(consolidated_score == 70){
       
            r4.style.backgroundColor = "gold";
            document.getElementById("score4").innerHTML = "VITÓRIA";
        } else {
            
            r4.style.backgroundColor = "gray";
            score4.innerHTML = consolidated_score;
        }
        break;

        case 5:
        
        if(consolidated_score == 70){
       
            r5.style.backgroundColor = "gold";
            document.getElementById("score5").innerHTML = "VITÓRIA";
        } else {
            
            r5.style.backgroundColor = "gray";
            score5.innerHTML = consolidated_score;
        }
        break;

        default:
    };
}
