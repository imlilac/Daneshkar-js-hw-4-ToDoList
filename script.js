"use strict";

const inputBtn = document.querySelector(".add-input");
const taskList = document.getElementById("task-list");

function addTask() {
   if (inputBtn.value === "") {
      alert("Please write your task");
   } else {
      let taskName = document.createElement("li");
      taskName.innerHTML = inputBtn.value;
      taskList.appendChild(taskName);

      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      taskName.appendChild(span);
   }
   inputBtn.value = "";
}

taskList.addEventListener("click", function (e) {
   if (e.target.tagName === "LI") {
      e.target.classList.toggle("task-checked");
   } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
   }
});
