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
    question: "Someone whose job is to make bread, cakes is a/an ______.",
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
    answer: "aisle",
    options: ["stage", "aisle", "scenery", "corridor"],
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
    question: "Carol _____ hard for her exam last week.",
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
    question: "He ___ for you at 7 in the evening next Sunday.",
    answer: "will be waiting",
    options: [
      "was waiting",
      "will be waiting",
      "were waiting",
      "had been waited",
    ],
  },
];

let nouns = [
  {
    number: 1,
    question: " Will ___ please give me your pen?",
    answer: "you",
    options: ["he", "you", "she", "them"],
  },

  {
    number: 2,
    question:
      " ___ didn’t take our children to the park as ___ were at school.",
    answer: "we / they",
    options: ["us / they", "we / them", "we / they", "her / our"],
  },
  {
    number: 3,
    question: "Diehard is the ____________ movie I've ever seen.",
    answer: "most exciting",
    options: [
      "most exciteable",
      "most exciting",
      "most excited",
      "most excites",
    ],
  },
  {
    number: 4,
    question:
      "The little girl looked adorable in the ________ costume. All she needs now is a broomstick!",
    answer: "witch's",
    options: ["witches", "witch's", "witchs'", "witches'"],
  },
  {
    number: 5,
    question: "Do you have _______ money?",
    answer: "some",
    options: ["a", "both ", "some", "any"],
  },
];

let passive = [
  {
    number: 1,
    question: "Everything ___ before you came.",
    answer: "had been done",
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
    question: "By the time we came to the bookshop all books ____.",
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

let prepos = [
  {
    number: 1,
    question: "Listen! I think there is someone ______ the front door.",
    answer: "at",
    options: ["on", "at", "in", "with"],
  },

  {
    number: 2,
    question: "We are giving him a surprise party ______ his birthday.",
    answer: "on",
    options: ["in", "at", "on", "with"],
  },
  {
    number: 3,
    question: "Can’t you come ______ your bicycle?",
    answer: "by",
    options: ["in", "with", "on", "by"],
  },
  {
    number: 4,
    question: "He will stay here ______ Monday.",
    answer: "till",
    options: ["till", "by", "at", "to"],
  },
  {
    number: 5,
    question: "Have you seen the new bridge they’ve built ______ the river?",
    answer: "over",
    options: ["over", "between", "at", "under"],
  },
];

let conjunc = [
  {
    number: 1,
    question: "The bus stopped __________ the man got off.",
    answer: "and",
    options: ["and", "but", "or", "so"],
  },

  {
    number: 2,
    question:
      "I wanted to buy a newspaper __________ didn't have enough money.",
    answer: "but",
    options: ["so", "either", "but", "neither"],
  },
  {
    number: 3,
    question:
      "I have a lot of homework to do now __________ I can't go to the cinema with you.",
    answer: "so",
    options: ["as", "so", "and", "either"],
  },
  {
    number: 4,
    question: "I'll have a look ___ I've finished this essay.",
    answer: "after",
    options: ["after", "until", "although", "but"],
  },
  {
    number: 5,
    question: "Will you visit the pyramids ___ you go to Egypt this year?",
    answer: "if",
    options: ["since", "if", "because", "whereas"],
  },
];

let verbs = [
  {
    number: 1,
    question: "When I was young I wanted to ___ a vet.",
    answer: "be",
    options: ["was", "be", "am", "is"],
  },

  {
    number: 2,
    question: "The window was already ___ when I got here.",
    answer: "broken",
    options: ["breaking", "broken", "break", "broke"],
  },
  {
    number: 3,
    question: "I have been _______ to bake a perfect cake since morning.",
    answer: "trying",
    options: ["tried", "try", "trying", "tries"],
  },
  {
    number: 4,
    question: "I don’t know how the money I kept in my wallet got _______.",
    answer: "stolen",
    options: ["stole", "steal", "stealed", "stolen"],
  },
  {
    number: 5,
    question: "I will not be able to ________ my project on time.",
    answer: "complete",
    options: ["completed", "completing", "complete", "completes"],
  },
];

let indirect = [
  {
    number: 1,
    question: '"Mary says “I clean my room every day". Mary says that ___ .',
    answer: "she cleans her room every day",
    options: [
      "she cleans my room every day",
      "I clean her room every day",
      "she cleaned her room every day",
      "she cleans her room every day",
    ],
  },

  {
    number: 2,
    question: '"He said, “I do not want to see this film". He said that ___ .',
    answer: "he did not want to see that film",
    options: [
      "he doesn’t want to see a film",
      "he did not want to see that film",
      "he wanted to see that film",
      "he didn’t want to see this film",
    ],
  },
  {
    number: 3,
    question:
      '"Alice is told: “Clean your teeth twice a day!". Alice is told ___ .',
    answer: "to clean her teeth twice a day",
    options: [
      "to clean her teeth twice a day",
      "clean your teeth twice a day",
      "clean her teeth twice a day",
      "if she cleans her teeth twice a day",
    ],
  },
  {
    number: 4,
    question: '"I spoke to Jane last week," she said. She said ___ .',
    answer: "she had spoken to Jane a week before",
    options: [
      "I had spoken to Jane a week before",
      "she had spoken to Jane last week",
      "she had spoken to Jane a week before",
      "she spoke to Jane a week before",
    ],
  },
  {
    number: 5,
    question: "The police officer asked us ___ .",
    answer: "where we were going",
    options: [
      "are we going that way",
      "if could we stop at the traffic light",
      "where we were going",
      "whether we speak English",
    ],
  },
];

let mix1 = [
  {
    number: 1,
    question: '"Don’t wait for me, Ann," said Tom. Tom told Ann ___ .',
    answer: "not to wait for him",
    options: [
      "to wait for him",
      "if she waited for him",
      "not to wait for him",
      "don’t wait for him",
    ],
  },

  {
    number: 2,
    question:
      "The sports competitions which ___ on Sunday ___ by a lot of people.",
    answer: "will be held / will be visited",
    options: [
      "was held / will visit",
      "have been held / have visited",
      "will be held / will be visited",
      "are held / will be visited",
    ],
  },
  {
    number: 3,
    question: "I ___ already ___ the doctor about it, but she couldn’t ___ me.",
    answer: "have / seen / help",
    options: [
      "have / seen / help",
      "will / have seen / help",
      "had / seen / had helped",
      "has / seen / helped",
    ],
  },
  {
    number: 4,
    question: "Who’s the man ______ the funny hat?",
    answer: "in",
    options: ["from", "in", "at", "to"],
  },
  {
    number: 5,
    question: "What are the ______ sports in Turkey?",
    answer: "most popular",
    options: ["as interesting", "better than", "most popular", "interested"],
  },
];

let mix2 = [
  {
    number: 1,
    question: "Would you like ______ of this cake?",
    answer: "some",
    options: ["some", "few", "a few", "little"],
  },

  {
    number: 2,
    question: "He ___ us the firm ___ wool since 1935.",
    answer: "told / has been exporting",
    options: [
      "told / had been exporting",
      "tells / would export",
      "told / has been exporting",
      "will be told / exports",
    ],
  },
  {
    number: 3,
    question: "You can’t use this textbook now. It ___ by your friend.",
    answer: "has been taken",
    options: ["were taken", "had taken", "took", "has been taken"],
  },
  {
    number: 4,
    question: 'She said, "I lost the key of my room." She said that ___ .',
    answer: "she had lost the key of her room",
    options: [
      "she lost the key of my room",
      "she lost the key of the room",
      "I had lost the key of my room",
      "she had lost the key of her room",
    ],
  },
  {
    number: 5,
    question: "A dictionary has information ______ words.",
    answer: "about",
    options: ["in", "at", "about", "to"],
  },
];

let mix3 = [
  {
    number: 1,
    question:
      "Heroes ___ by people because they served their people and their country.",
    answer: "are remembered",
    options: [
      "is remembered",
      "are remembered",
      "had been remembered",
      "would be remembered",
    ],
  },

  {
    number: 2,
    question: "You can have these books. ______ are too hard for me.",
    answer: "They",
    options: ["There", "Its", "It", "They"],
  },
  {
    number: 3,
    question:
      '"Whose birthday is it?" said Jane. Jane asked whose birthday ___ .',
    answer: "it was",
    options: ["it had been", "is it", "it is", "it was"],
  },
  {
    number: 4,
    question:
      "The pupils ___ the sentences yet, the teacher ___ the blackboard.",
    answer: "had not written / cleaned",
    options: [
      "has not written / will clean",
      "had not written / cleaned",
      "did not write / cleans",
      "had not written / had cleaned",
    ],
  },
  {
    number: 5,
    question: "When do you take ______ your wrist watch?",
    answer: "off",
    options: ["of", "off", "on", "out"],
  },
];

let mix4 = [
  {
    number: 1,
    question: "Our village lies ______ two high mountains.",
    answer: "between",
    options: ["in", "between", "among", "over"],
  },

  {
    number: 2,
    question: "When he ___ to the station the train already ___ .",
    answer: "came / had left",
    options: [
      "came / had left",
      "had come / left",
      "came / leaves",
      "comes / left",
    ],
  },
  {
    number: 3,
    question:
      "Last Monday I received a telegram ___ by my sister on the 1st of May.",
    answer: "sent",
    options: ["had sent", "sending", "was sent", "sent"],
  },
  {
    number: 4,
    question: "We are late. The teacher will get angry with ______ .",
    answer: "us",
    options: ["us", "I", "we", "they"],
  },
  {
    number: 5,
    question: '"Where did they spend the vacation?" Tom said ___ .',
    answer: "they had spent it at the seaside",
    options: [
      "they came back",
      "they were young",
      "they left for an hour",
      "they had spent it at the seaside",
    ],
  },
];

var keys = {
  key1: vocab,
  key2: tenses,
  key3: nouns,
  key4: passive,
  key5: prepos,
  key6: conjunc,
  key7: verbs,
  key8: indirect,
  key9: mix1,
  key10: mix2,
  key11: mix3,
  key12: mix4,
};

function loadVocab() {
  localStorage.clear();
  quiz_content = keys.key1;
  localStorage.setItem("quizType", JSON.stringify(vocab));
}

function loadGram() {
  localStorage.clear();
  quiz_content = keys.key2;
  localStorage.setItem("quizType", JSON.stringify(tenses));
}

function loadNouns() {
  localStorage.clear();
  quiz_content = keys.key3;
  localStorage.setItem("quizType", JSON.stringify(nouns));
}

function loadPassive() {
  localStorage.clear();
  quiz_content = keys.key4;
  localStorage.setItem("quizType", JSON.stringify(passive));
}

function loadPrepos() {
  localStorage.clear();
  quiz_content = keys.key5;
  localStorage.setItem("quizType", JSON.stringify(prepos));
}

function loadConjunc() {
  localStorage.clear();
  quiz_content = keys.key6;
  localStorage.setItem("quizType", JSON.stringify(conjunc));
}

function loadVerbs() {
  localStorage.clear();
  quiz_content = keys.key7;
  localStorage.setItem("quizType", JSON.stringify(verbs));
}

function loadIndirect() {
  localStorage.clear();
  quiz_content = keys.key8;
  localStorage.setItem("quizType", JSON.stringify(indirect));
}

function loadMix1() {
  localStorage.clear();
  quiz_content = keys.key9;
  localStorage.setItem("quizType", JSON.stringify(mix1));
}

function loadMix2() {
  localStorage.clear();
  quiz_content = keys.key10;
  localStorage.setItem("quizType", JSON.stringify(mix2));
}

function loadMix3() {
  localStorage.clear();
  quiz_content = keys.key11;
  localStorage.setItem("quizType", JSON.stringify(mix3));
}

function loadMix4() {
  localStorage.clear();
  quiz_content = keys.key12;
  localStorage.setItem("quizType", JSON.stringify(mix4));
}
