var b = 0;
b++;

// -------------------------------------------------------------------------------------

function dragStart1(event) {
    event.dataTransfer.setData("choice1", event.target.id); //Brave - Courageous
}

function dragStart2(event) {
    event.dataTransfer.setData("choice2", event.target.id); //About - Approximately
}

function dragStart3(event) {
    event.dataTransfer.setData("choice3", event.target.id); //Immediate - Instant
}

function dragStart4(event) {
    event.dataTransfer.setData("choice4", event.target.id); //Deserted - Abandoned
}

function dragStart5(event) {
    event.dataTransfer.setData("choice5", event.target.id); //Fortunate - Lucky
}

// -------------------------------------------------------------------------------------

function allowDrop1(event) {
    event.preventDefault();
}

function allowDrop2(event) {
    event.preventDefault();
}

function allowDrop3(event) {
    event.preventDefault();
}

function allowDrop4(event) {
    event.preventDefault();
}

function allowDrop5(event) {
    event.preventDefault();
}

// -------------------------------------------------------------------------------------

function box1(event) {
    var data = event.dataTransfer.getData("choice2");
    event.target.appendChild(document.getElementById(data));
    score.innerHTML = b++;
    place1.innerHTML = "About";
}

function box2(event) {
    var data = event.dataTransfer.getData("choice1");
    event.target.appendChild(document.getElementById(data));
    score.innerHTML = b++;
    place2.innerHTML = "Brave";
}

function box3(event) {
    var data = event.dataTransfer.getData("choice4");
    event.target.appendChild(document.getElementById(data));
    score.innerHTML = b++;
    place3.innerHTML = "Deserted";
}

function box4(event) {
    var data = event.dataTransfer.getData("choice5");
    event.target.appendChild(document.getElementById(data));
    score.innerHTML = b++;
    place4.innerHTML = "Fortunate";
}

function box5(event) {
    var data = event.dataTransfer.getData("choice3");
    event.target.appendChild(document.getElementById(data));
    score.innerHTML = b++;
    place5.innerHTML = "Immediate";
}

// -------------------------------------------------------------------------------------

function item1(event) {
    event.preventDefault();
}

function item2(event) {
    event.preventDefault();
}

function item3(event) {
    event.preventDefault();

}

function item4(event) {
    event.preventDefault();
}

function item5(event) {
    event.preventDefault();
}

// -------------------------------------------------------------------------------------

function submitQuizz() {
    if (b > 5) {
        msg.innerHTML = "Congratulations!";
    }
}
