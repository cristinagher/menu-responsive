const titleElement = document.getElementById("title");
const buttomMenuElement = document.getElementById("button-menu");

// classList.contains
// classList.add
// classList.remove

function changeColor() {
  if (titleElement.classList.contains("red")) {
    titleElement.classList.remove("red");
  } else {
    titleElement.classList.add("red");
  }
}

titleElement.addEventListener("click", changeColor);
