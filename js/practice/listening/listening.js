const toggleBtn = document.querySelector(".answer-button button");
const answerDiv = document.querySelector(".answers");

const toggleBtn2 = document.querySelector(".dialog-button button");
const dialoguesDiv = document.querySelector(".listening-text");

// toggleBtn.addEventListener('click', () => {
//     if (answerDiv.style.display === 'none') {
//         answerDiv.style.display = "block";
//         toggleBtn.innerHTML = "Hide Answers"
//     } else {
//         answerDiv.style.display = "none";
//         toggleBtn.innerHTML = "Show Answers"
//     }
// });

toggleBtn.onclick = ()=> {
    if (answerDiv.style.display === 'none') {
        answerDiv.style.display = "block";
        toggleBtn.innerHTML = "Hide Answers"
    } else {
        answerDiv.style.display = "none";
        toggleBtn.innerHTML = "Show Answers"
    }
}

toggleBtn2.onclick = ()=> {
    if (dialoguesDiv.style.display === 'none') {
        dialoguesDiv.style.display = "block";
        toggleBtn2.innerHTML = "Hide Dialogues"
    } else {
        dialoguesDiv.style.display = "none";
        toggleBtn2.innerHTML = "Show Dialogues"
    }
}

