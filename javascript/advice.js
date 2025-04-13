const adviceBox = document.createElement("div");
let adviceBtn = document.createElement("button");
let adviceDisplay = document.createElement("p");
const ark = document.getElementById("ark");

adviceBtn.innerHTML = "Click me!";

ark.append(adviceBox);
adviceBox.append(adviceBtn);

adviceBox.classList.add("adviceBox");
adviceBtn.classList.add("adviceBtn");

const advices = [
    "Sometimes you don't have to hide the bone, you can leave it out in the open",
    "Don't get stuck chasing your own tail",
    "A knock on the door doesn't always mean danger",
    "The dog in the mirror is really just you",
    "Other dogs aren't always out to get you",
    "Cats are just bullies, ignore them"
];

const getAdviceClick = () => {
    adviceBtn.addEventListener("click", generateAdvice);
}

const generateAdvice = () => {
    let randomAdvice = Math.floor(Math.random() * advices.length);
    let quote = advices[randomAdvice];
    adviceDisplay.innerHTML = quote;
    adviceBox.append(adviceDisplay);
}

getAdviceClick();