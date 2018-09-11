
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

    function genValues(){

        randomNum=Math.floor(Math.random() * 31) + 50;
        rubyVal=Math.floor(Math.random() * 2) + 5;
        saphireVal=Math.floor(Math.random() * 8) + 5;
        yellowDVal=Math.floor(Math.random() * 14) + 5;
        diamondVal=Math.floor(Math.random() * 19) + 5;
        console.log("random number: "+randomNum);
        console.log("saphireVal "+rubyVal);
        console.log("yellow diamond:  "+yellowDVal);
        console.log("diamond val "+diamondVal);



    }

    genValues();


}