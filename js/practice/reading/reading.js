const toggleBtn = document.querySelector(".answer-button button");
const answerDiv = document.querySelector(".answers");

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