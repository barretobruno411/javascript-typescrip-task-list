const form = document.querySelector("form");
const display = document.querySelector("div.display");

const saveList = function () {
  const array = [];
  const list = document.querySelectorAll("li");
  list.forEach((item) =>
    array.push(item.textContent.replace("delete", "").trim())
  );
  const toStore = JSON.stringify(array);
  localStorage.setItem("listItems", toStore);
  console.log(array);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = e.target.querySelector('input[type="text"]');
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.textContent = "delete";
  li.textContent = task.value;
  li.appendChild(btn);
  display.appendChild(li);
  saveList();
  e.target.reset();
});

document.addEventListener("click", (e) => {
  if (e.target.textContent === "delete") {
    const parent = e.target.parentNode;
    parent.remove();
    saveList();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const array = JSON.parse(localStorage.getItem("listItems"));
  array.forEach((item) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = "delete";
    li.textContent = item;
    li.appendChild(btn);
    display.appendChild(li);
  });

  console.log(array);
});
