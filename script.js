const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

function inputLength() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("id", "checkbox");
  checkbox.type = "checkbox";
  checkbox.value = 1;
  checkbox.name = "todo[]";

  // Add event listener to checkbox
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  });

  li.appendChild(checkbox);

  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-danger");
  deleteButton.classList.add("btn-sm"); 
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.appendChild(deleteButton);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function deleteListElement(element) {
  if (element.target.className === "btn btn-danger btn-sm") {
    element.target.parentElement.remove();
  }
}

function handleUlClick(element) {
  deleteListElement(element);
}

ul.addEventListener("click", handleUlClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
