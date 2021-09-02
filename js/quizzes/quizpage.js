//get the required elements
const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const quiz_box = document.querySelector(".quiz-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const option_list = document.querySelector(".option-list");
const time_sec = quiz_box.querySelector(".timer .timer-sec");
const time_line = quiz_box.querySelector("header .time-line");
const next_btn = quiz_box.querySelector(".next-button");

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
  start_time(15);
  start_timeline(0);
};

let ques_count = 0,
  ques_num = 1,
  time_count,
  max_time = 15,
  line_width = 0;

//on clicking next button go to next question
next_btn.onclick = () => {
  if (ques_count < quiz_content.length - 1) {
    ques_count++;
    showQuizContent(ques_count);
    ques_num++;
    quesCounter(ques_num);
    clearInterval(time_count);
    start_time(max_time);
    clearInterval(line_count);
    start_timeline(line_width);
    next_btn.style.display = "none";
  } else {
    console.log("quiz completed");
  }
};

//function to get questions and options
function showQuizContent(count) {
  const que_text = document.querySelector(".question");

  let que_tag =
    "<span>" +
    quiz_content[count].number +
    ". " +
    quiz_content[count].question +
    "</span>";

  let option_tag =
    '<div class="option"><span>' +
    quiz_content[count].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    quiz_content[count].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    quiz_content[count].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    quiz_content[count].options[3] +
    "</span></div>";

  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  const option = option_list.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

let tick_icon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let cross_icon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//function to determine correct answer
function optionSelected(answer) {
  clearInterval(time_count);
  clearInterval(line_count);
  let given_ans = answer.textContent;
  let correct_ans = quiz_content[ques_count].answer;
  let total_ops = option_list.children.length;

  if (given_ans === correct_ans) {
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tick_icon);
    console.log("corectAnswer");
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", cross_icon);
    console.log("wrong");

    //if given answer is incorrect, show the correct answer
    for (let i = 0; i < total_ops; i++) {
      if (option_list.children[i].textContent == correct_ans) {
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tick_icon);
      }
    }
  }
  //disable options after a option is selected
  for (let i = 0; i < total_ops; i++) {
    option_list.children[i].classList.add("disabled");
  }
  next_btn.style.display = "block";
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

//function to handle time counter
function start_time(time) {
  time_count = setInterval(timer, 1000);
  function timer() {
    time_sec.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(time_count);
      time_sec.textContent = "0";
    }
  }
}

//function to handle time line
function start_timeline(time) {
  line_count = setInterval(timer, 33);
  function timer() {
    time += 1;
    time_line.style.width = time + "px";
    if (time > 479) {
      clearInterval(line_count);
    }
  }
}
