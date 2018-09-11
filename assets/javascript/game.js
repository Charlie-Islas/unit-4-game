
window.onload=function(){

    var gameOver=false;
    var wins=0;
    var defeats=0;
    var rubyVal=0;
    var saphireVal=0;
    var yellowDVal=0;
    var diamondVal=0;
    var randomNum=0;
    var userScore=0;
    var roundWin=false;
    $("#loseAlert").hide();
    $("#winAlert").hide();
   

    //function to generate random numbers for all the crystals and the game's goal
    function genValues(){

        roundWin=false;
        userScore=0;   
     
         //aqui me quede, intentando resetear la variable booleana para que me deje volver a jugar
        $("#currentScore").html(userScore);
        randomNum=Math.floor(Math.random() * 101) + 19;
        $("#randomNum").html(randomNum);

        rubyVal=Math.floor(Math.random()*11) + 1;
        saphireVal=Math.floor(Math.random() * 11) + 1;
        yellowDVal=Math.floor(Math.random() * 11) + 1;
        diamondVal=Math.floor(Math.random() * 11) + 1;

        console.log(rubyVal);
        console.log(saphireVal);
        console.log(yellowDVal);
        console.log(diamondVal);
        checkValues();

    }

    //function to validate that all the crystals have a different value
    function checkValues(){

        if(rubyVal!==saphireVal&&rubyVal!==yellowDVal&&rubyVal!==diamondVal&&saphireVal!==yellowDVal&&saphireVal!==diamondVal&&yellowDVal!==diamondVal){
            clickCrystals();
            hideAlert=true;            
        }
        else{ genValues(); }

    }

    function clickCrystals(){

        if(!gameOver){

            $("#ruby").on("click", function(){
                if(!roundWin){
                userScore+=rubyVal;
                $("#currentScore").html(userScore);
                checkWin();}
            });

            $("#saphire").on("click", function(){
                if(!roundWin){
                userScore+=saphireVal;
                $("#currentScore").html(userScore);
                checkWin();}
            });

            $("#yellowDiamond").on("click", function(){
                if(!roundWin){
                userScore+=yellowDVal;
                $("#currentScore").html(userScore);
                checkWin();}
            });

            $("#diamond").on("click", function(){
                if(!roundWin){
                userScore+=diamondVal;
                $("#currentScore").html(userScore);
                checkWin();}
            });

        }
        
        


    }

    function checkWin(){

        $("#currentScore").html(userScore);

        if(userScore===randomNum){
            $("#currentScore").html(userScore);
            wins++;
            $("#wins").html(wins);
            gameOver=true;
            roundWin=true;
            $("#winAlert").show();

            document.onkeyup = function (event) {

                $("#winAlert").hide();
                if(userScore!=0){
                genValues();}
        
                

            } 
        }

        else if(userScore>randomNum){


            $("#currentScore").html(userScore);
            defeats++;
            $("#defeats").html(defeats);
            gameOver=true;
            roundWin=true;
            $("#loseAlert").show();

            
           
                document.onkeyup = function (event) {

            
                    $("#loseAlert").hide();
                    if(userScore!=0){
                    genValues();}
                    
                    

                }
            
        }
    

    }

    genValues();


}