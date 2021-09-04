const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

const quiz_box = document.querySelector(".quiz-box");

start_btn.onclick = () => { //Show info box when click Start Quiz Button
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = () => {  //Hide info box when click Start Quiz Button
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = () => {  //Hide info box and show the Quiz BOX
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    questionCounter(1);
}

let question_count = 0;
let question_counter = 1;

let userScore = 0;

const next_btn = quiz_box.querySelector('.next-button');
const result_box = document.querySelector('.result-box');
const restart_quiz = result_box.querySelector('.buttons .restart');
const quit_quiz = result_box.querySelector('.buttons .quit');

next_btn.onclick = () => {
    if (question_count < questions.length - 1) {
        question_count++;
        showQuestions(question_count);
        question_counter++;
        questionCounter(question_counter);
        next_btn.style.display = "none";
    } else {
        console.log("Quiz Completed");
        showResultBox();
    }
}

const option_list = document.querySelector(".option-list");

const showQuestions = (count) => {
    const question_text = document.querySelector(".question");

    let question_tag = "<span>"+ questions[count].number+ ". "+ questions[count].question+"</span>"
    question_text.innerHTML = question_tag;

    let option_tag = '<div class="option"><span>'+ questions[count].options[0]+'</span></div>'
        + '<div class="option"><span>'+ questions[count].options[1]+'</span></div>'
        + '<div class="option"><span>'+ questions[count].options[2]+'</span></div>'
        + '<div class="option"><span>' + questions[count].options[3] + '</span></div>';
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");

    for (let i=0 ; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

const optionSelected = (answer) => {
    let userAnswer = answer.textContent;
    let corectAnswer = questions[question_count].answer;
    let allOptions = option_list.children.length;

    if (userAnswer == corectAnswer) {
        answer.classList.add("correct")
        // console.log("corectAnswer");
        answer.insertAdjacentHTML("beforeend", tickIcon);
        userScore++;

    } else {
        answer.classList.add("incorrect")
        answer.insertAdjacentHTML("beforeend", crossIcon);
        
        for (let i=0 ; i < allOptions; i++){
            if (option_list.children[i].textContent == corectAnswer) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }

    }

    for (let i = 0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
    
}

const questionCounter = index => {
    const question_counter = quiz_box.querySelector(".total-questions");
    let totalQuestionsTag = "<span><p>" + index + "</p> of<p>" + questions.length + "</p>Questions</span>";
    question_counter.innerHTML = totalQuestionsTag;
}


const showResultBox = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");

    const scoreText = result_box.querySelector(".score");
    let scoreTag;

    if (userScore > 3) {
        scoreTag = '<span>Congratulations!. You got<p>'+ userScore +'</p> out of <p>'+ questions.length  +'</p>Correct</span>';
    } else if(userScore > 1){
        scoreTag = '<span>You got<p>'+ userScore +'</p> out of <p>'+ questions.length  +'</p>Correct</span>';
    } else {
        scoreTag = '<span>Try again! You got only<p>'+ userScore +'</p> out of <p>'+ questions.length  +'</p>Correct</span>';
    }
    scoreText.innerHTML = scoreTag;

}

quit_quiz.onclick = () => {
    window.location.reload();
}

restart_quiz.onclick = () => {

    result_box.classList.remove("activeResult");
    quiz_box.classList.add("activeQuiz");


    question_count = 0;
    question_counter = 1;
    userScore = 0;

    showQuestions(question_count);
    questionCounter(question_counter);
    next_btn.style.display = "none";
}