var data = [
    "This is intro",
    "This is Tences",
    "This is Synonyms",
    "This is Nouns",
    "This is Verbs",
    "This is Adjectives"
];

function showContent(n) {
    var element = document.getElementById("info-paragraph");
    element.innerHTML = data[n];
}

function openNav() {
    document.getElementById("menu").style.width = "220px";
}

function closeNav() {
    document.getElementById("menu").style.width = "0";
}