//get the required elements
const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const quiz_box = document.querySelector(".quiz-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

//on clicking start button go to infomation displaying box
start_btn.onclick = () => {
  info_box.classList.add("activeInfo");
};

//on clicking exit button go back to quiz start page
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
};

//on clicking continue button go to quiz displaying box
continue_btn.onclick = () => {
  //hide information displaying box
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  showQuizContent(0);
  quesCounter(1);
};

let ques_count = 0,
  ques_num = 1;

const next_btn = quiz_box.querySelector(".next-button");

//on clicking next button go to next question
next_btn.onclick = () => {
  if (ques_count < quiz_content.length - 1) {
    ques_count++;
    showQuizContent(ques_count);
    ques_num++;
    quesCounter(ques_num);
  } else {
    console.log("quiz completed");
  }
};

//function to get questions and options
function showQuizContent(count) {
  const que_text = document.querySelector(".question");
  const option_list = document.querySelector(".option-list");
  let que_tag =
    "<span>" +
    quiz_content[count].number +
    ". " +
    quiz_content[count].question +
    "</span>";

  let option_tag =
    '<div class="option"><span>' +
    quiz_content[count].options[0] +
    "</span> </div>" +
    '<div class="option"><span>' +
    quiz_content[count].options[1] +
    "</span> </div>" +
    '<div class="option"><span>' +
    quiz_content[count].options[2] +
    "</span> </div>" +
    '<div class="option"><span>' +
    quiz_content[count].options[3] +
    "</span> </div>";

  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  
}

//function to display questions count
function quesCounter(count) {
  const disp_ques_count = quiz_box.querySelector(".total-questions");
  let ques_count_tag =
    "<span><p>" +
    count +
    "</p>of<p>" +
    quiz_content.length +
    "</p>Questions</span>";

  disp_ques_count.innerHTML = ques_count_tag;
}
