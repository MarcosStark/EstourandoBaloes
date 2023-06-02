var qtd_baloes = 80;
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

    document.querySelector("#whole-balloons").innerHTML = qtd_baloes;
    document.querySelector("#popped-balloons").innerHTML = 0;
    createBalloons(qtd_baloes);

})();

function createBalloons(qtd_baloes) {

    for(var i = 1; i <= qtd_baloes; i++){
    var balloon = document.createElement("img"); // Cria o elemento img na div do id "cenario"
    balloon.src = "css/images/balao_azul_pequeno.png";
    document.getElementById("game").appendChild(balloon);
    
    }
}
