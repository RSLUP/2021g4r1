//array to pass question number, questions, options and correct answers

var quiz_content = [];
let vocab = [
  {
    number: 1,
    question: "  ______ is a kind of chair used by people who cannot walk.",
    answer: "wheel chair",
    options: ["wheel chair", "stool", "rocking chair", "armchair"],
  },

  {
    number: 2,
    question: " Someone whose job is to make bread, cakes is a/an ______.",
    answer: "baker",
    options: ["baker", "butcher", "barber", "dentist"],
  },
  {
    number: 3,
    question: "The seat which is put on the horse’s back is the ______",
    answer: "saddle",
    options: ["stirrup", "saddle", "reins", "jockey"],
  },
  {
    number: 4,
    question:
      "You walk along the ______ to get to your seat in a cinema or a theatre.",
    answer: "corridor",
    options: ["stage", "aisle", "scenery", " corridor"],
  },
  {
    number: 5,
    question: "The highest ______ of the mountain Everest is 8860 meters high.",
    answer: "peak",
    options: ["stream", "island", "peak", "boulder"],
  },
];

let tenses = [
  {
    number: 1,
    question: " Carol _____ hard for her exam last week",
    answer: "didn’t study",
    options: ["didn’t study", "isn’t studying", "don’t study", "aren’t study"],
  },

  {
    number: 2,
    question: "Last weekend I _____ some friends and we _____ a meal.",
    answer: "saw / had",
    options: ["see / having", "saw / have", "seeing / had", "saw / had"],
  },
  {
    number: 3,
    question: "Every morning Tessa _____ at 7.30.",
    answer: "gets up",
    options: ["is getting up", "got up", "get up", "gets up"],
  },
  {
    number: 4,
    question: "What time _____ lunch in general?",
    answer: "do you have",
    options: ["does you have", "do you have", "have you got", "are you having"],
  },
  {
    number: 5,
    question: " He’s worked there _____ many years, _____ 1988, I believe",
    answer: "for / since",
    options: [" since / ever", "for / ever", "for / since", "ever / never"],
  },
];

let nouns = [
  {
    number: 1,
    question: "Would you like _____ rice?",
    answer: "some",
    options: ["a", "some", "an", "any"],
  },

  {
    number: 2,
    question: "I waited _____ the bus-stop for ten minutes",
    answer: "at",
    options: ["in", "on", "at", "for"],
  },
  {
    number: 3,
    question: "Medicine should not be kept where it is ____ to children. ",
    answer: "unreachable",
    options: ["accessible ", "untouchable", "inaccessible", "unreachable"],
  },
  {
    number: 4,
    question:
      "When the king died the young prince became the new ruler of the ____ .",
    answer: "kingdom ",
    options: ["imperial ", "palace", "kingdom ", "government"],
  },
  {
    number: 5,
    question:
      "The corn fields in the valley were destroyed by the ____ after the storm. ",
    answer: "drought ",
    options: ["rain ", "drought ", "flood", "winds"],
  },
];

let passive = [
  {
    number: 1,
    question: "Everything ___ before you came.",
    answer: "was done",
    options: ["has done", "had been done", "was done", "is done"],
  },

  {
    number: 2,
    question: "You can’t use this textbook now. It ___ by your friend.",
    answer: "has been taken",
    options: ["were taken", " takes", "took", "has been taken"],
  },
  {
    number: 3,
    question: "Sometimes a lot of guests ___ to his birthday party.",
    answer: "are invited",
    options: ["had invited", "was invited", "are invited", "is inviting"],
  },
  {
    number: 4,
    question: "By the time we came to the bookshop all books ____",
    answer: "had been sold",
    options: ["is being sold", "are being sold", "had been sold", "were sold"],
  },
  {
    number: 5,
    question: "A liar ___ when he speaks the truth",
    answer: "isn’t believed",
    options: ["don’t believe", "isn’t believed", "believe", "believed"],
  },
];

var keys = {
  key1: vocab,
  key2: tenses,
  key3: nouns,
  key4: passive,
};

function loadVocab() {
  quiz_content = keys.key1;
  localStorage.setItem("quizType", JSON.stringify(vocab));
}

function loadGram() {
  quiz_content = keys.key2;
  localStorage.setItem("quizType", JSON.stringify(tenses));
}

function loadNouns() {
  quiz_content = keys.key3;
  localStorage.setItem("quizType", JSON.stringify(nouns));
}

function loadPassive() {
  quiz_content = keys.key4;
  localStorage.setItem("quizType", JSON.stringify(passive));
}
