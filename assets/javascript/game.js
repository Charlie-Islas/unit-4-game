
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
    var proceed=false;

    function genValues(){

        randomNum=Math.floor(Math.random() * 101) + 19;
        $("#randomNum").html(randomNum);

        rubyVal=Math.floor(Math.random()*11) + 1;
        saphireVal=Math.floor(Math.random() * 11) + 1;
        yellowDVal=Math.floor(Math.random() * 11) + 1;
        diamondVal=Math.floor(Math.random() * 11) + 1;
        checkValues();

    }

    //function to validate that all the crystals have a different value
    function checkValues(){

        if(rubyVal!==saphireVal&&rubyVal!==yellowDVal&&rubyVal!==diamondVal&&saphireVal!==yellowDVal&&saphireVal!==diamondVal&&yellowDVal!==diamondVal){
            clickCrystals();
        }
        else{genValues();}

    }

    function clickCrystals(){

        if(!gameOver){

            $("#ruby").on("click", function(){
                userScore+=rubyVal;
                $("#currentScore").html(userScore);
            });

            $("#saphire").on("click", function(){
                userScore+=saphireVal;
                $("#currentScore").html(userScore);
            });

            $("#yellowDiamond").on("click", function(){
                userScore+=yellowDVal;
                $("#currentScore").html(userScore);
            });

            $("#diamond").on("click", function(){
                userScore+=diamondVal;
                $("#currentScore").html(userScore);
            });

        }
    }

    genValues();


}