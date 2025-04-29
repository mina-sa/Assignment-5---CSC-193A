/*function showAlert() {
    alert("Hello, world!");
}*/

function biggerText() {
    let textArea = document.getElementById("userText");
    textArea.style.fontSize = "24pt";
}

function changeStyle() {
    alert("Style changed!");

    let textArea = document.getElementById("userText");
    let fancyRadio = document.getElementById("fancy");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function upCase() {
    let textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();

    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0 && words[words.length - 1] !== "") {
            words[words.length - 1] += " Moo";
        }
        sentences[i] = words.join(" ");
    }

    textArea.value = sentences.join(". ");
}

window.onload = function () {
    document.getElementById("userText").style.fontWeight = "bold"; // default bold
    document.getElementById("biggerButton").onclick = biggerText;
    document.getElementById("fancy").onchange = changeStyle;
    document.getElementById("boring").onchange = changeStyle;
    document.getElementById("mooButton").onclick = upCase;
};
