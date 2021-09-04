function checkScore() {
    var check14 = document.getElementById("14").value;
    var check16 = document.getElementById("16").value;
    var check31 = document.getElementById("31").value;
    var check32 = document.getElementById("32").value;
    var check35 = document.getElementById("35").value;
    var check36 = document.getElementById("36").value;
    var check45 = document.getElementById("45").value;
    var check53 = document.getElementById("53").value;
    var check55 = document.getElementById("55").value;
    var check61 = document.getElementById("61").value;
    var check64 = document.getElementById("64").value;
    var check67 = document.getElementById("67").value;
    var check76 = document.getElementById("76").value;

    var score = 0;

    var increment = 100 / 13;
    var correct = 0;
    if(check14 == 'O' || check14 == 'o' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check16 == 'A' || check16 == 'a' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check31 == 'T' || check31 == 't' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check32 == 'E' || check32 == 'e' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check35 == 'I' || check35 == 'i' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check36 == 'F' || check36 == 'f' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check45 == 'L' || check45 == 'l' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check53 == 'A' || check53 == 'a' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check55 == 'A' || check55 == 'a' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check61 == 'A' || check61 == 'a' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }
    if(check64 == 'E' || check64 == 'e' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }
    if(check67 == 'O' || check67 == 'o' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }
    if(check76 == 'O' || check76 == 'o' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    //alert(score)
    //alert(Math.ceil(score))
    // document.getElementById("score").innerHTML = Math.ceil(score);
    document.getElementById("score").innerHTML = correct + "/13";

}