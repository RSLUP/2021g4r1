function checkScore() {
    var check15 = document.getElementById("15").value;
    var check16 = document.getElementById("16").value;
    var check22 = document.getElementById("22").value;
    var check26 = document.getElementById("26").value;
    var check27 = document.getElementById("27").value;
    var check31 = document.getElementById("31").value;
    var check35 = document.getElementById("35").value;
    var check37 = document.getElementById("37").value;
    var check41 = document.getElementById("41").value;
    var check44 = document.getElementById("44").value;
    var check45 = document.getElementById("45").value;
    var check46 = document.getElementById("46").value;
    // var check51 = document.getElementById("51").value;
    // var check53 = document.getElementById("53").value;
    // var check55 = document.getElementById("55").value;
    var check64 = document.getElementById("64").value;
    var check73 = document.getElementById("73").value;
    var check74 = document.getElementById("74").value;


    var score = 0;

    var increment = 100 / 15;
    var correct = 0;
    if(check15 == 'A' || check15 == 'a' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check16 == 'T' || check16 == 't' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check22 == 'T' || check22 == 't' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check26 == 'T' || check26 == 't' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check27 == 'S' || check27 == 's' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check31 == 'R' || check31 == 'r' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check35 == 'A' || check35 == 'a' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check37 == 'D' || check37 == 'd' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check41 == 'R' || check41 == 'r' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    if(check44 == 'B' || check44 == 'b' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }
    if(check45 == 'I' || check45 == 'i' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }
    if(check46 == 'T' || check46 == 't' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }
    if(check64 == 'M' || check64 == 'm' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }
    if(check73 == 'T' || check73 == 't' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }
    if(check74 == 'A' || check74 == 'a' ){
        score += increment;
        correct++
        //alert(Math.ceil(score))
    }

    //alert(score)
    //alert(Math.ceil(score))
    // document.getElementById("score").innerHTML = correct;
    document.getElementById("score").innerHTML = correct + "/15";

}