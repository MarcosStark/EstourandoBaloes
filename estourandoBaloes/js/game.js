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

(function (){

   document.querySelector("#timer").innerHTML =  localStorage.getItem("gameTime");
   
})();

