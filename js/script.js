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

const buttonMenuElement = documen.getElementById("button-menu");
const menuElement = document.getElementById("menu");

// classList.contains
// classList.remove
// classList.add

function handleMenu() {
  if (menuElement.classList.contains("show")) {
    menuElement.classList.remove("show");
  } else {
    menuElement.classList.add("show");
  }
}

buttonMenuElementElement.addEventListener("click", handleMenu);
