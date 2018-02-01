let counter = document.querySelector("#counter");
let plus = document.getElementById("+");
let minus = document.getElementById("-");
let heart = document.getElementById("<3");
let likes = document.querySelector(".likes");
let pause = document.getElementById("pause");

let form = document.getElementById("comment-form");
let comments = document.getElementById("list");
let comment_input = document.querySelector("input");

function incrementSeconds() {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

let seconds = setInterval(incrementSeconds, 1000);

plus.addEventListener("click", function() {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
});

minus.addEventListener("click", function() {
  counter.innerHTML = parseInt(counter.innerHTML) - 1;
});

let numberArray = [];

heart.addEventListener("click", function() {
  numberArray.push(counter.innerHTML);
  if (
    numberArray.includes(counter.innerHTML) &&
    count(numberArray, counter.innerHTML) > 1
  ) {
    let current = document.getElementById(`number ${counter.innerHTML}`);
    current.innerHTML = `${counter.innerHTML} was liked ${count(
      numberArray,
      counter.innerHTML
    )} times `;
  } else {
    let paragraph = document.createElement("li");
    paragraph.setAttribute("id", `number ${counter.innerHTML}`);
    let text = document.createTextNode(
      `${counter.innerHTML} was liked ${count(
        numberArray,
        counter.innerHTML
      )} times `
    );
    paragraph.append(text);
    likes.append(paragraph);
  }
});

function count(array, number) {
  return array.filter(num => num === number).length;
}

pause.addEventListener("click", function() {
  if (pause.innerHTML !== "resume") {
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
    clearInterval(seconds);
    pause.innerHTML = "resume";
  } else {
    counter = document.querySelector("#counter");
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
    seconds = setInterval(incrementSeconds, 1000);
    pause.innerHTML = "pause";
  }
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let input = comment_input.value;
  let paragraph = document.createElement("p");
  let list_item = document.createTextNode(input);
  paragraph.append(list_item);
  comments.append(paragraph);
});
