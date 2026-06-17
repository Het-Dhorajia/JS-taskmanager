let search_task = document.getElementById("src-task");
let new_task = document.getElementById("new-task");
let task_list = document.getElementById("task-list");
let add_btn = document.getElementById("add-task-btn");
let completedBtn = document.getElementById("completed");
let pendingBtn = document.getElementById("pending");
let allBtn = document.getElementById("all");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTask(taskText) {
    let li = document.createElement("li");

    let deletebtn = document.createElement("button");
    deletebtn.innerText = "delete";

    let completebtn = document.createElement("button");
    completebtn.innerText = "complete";

    li.innerText = taskText;

    li.appendChild(deletebtn);
    li.appendChild(completebtn);

    task_list.appendChild(li);

    deletebtn.addEventListener("click", function () {
        li.remove();

        tasks = tasks.filter(function (task) {
            return task !== taskText;
        });

        saveTasks();
    });

    completebtn.addEventListener("click", function () {
        li.classList.toggle("completed");
    });
}

tasks.forEach(function (taskText) {
    createTask(taskText);
});

add_btn.addEventListener("click", function () {
    let taskText = new_task.value.trim();

    if (taskText === "") {
        return;
    }

    tasks.push(taskText);
    saveTasks();

    createTask(taskText);

    new_task.value = "";
});

search_task.addEventListener("input", function () {
    let searchText = search_task.value.toLowerCase();

    let tasks = document.querySelectorAll("li");

    tasks.forEach(function (task) {
        let taskText = task.innerText.toLowerCase();

        if (taskText.includes(searchText)) {
            task.style.display = "list-item";
        } else {
            task.style.display = "none";
        }
    });
});

completedBtn.addEventListener("click", function () {
    let tasks = document.querySelectorAll("li");

    tasks.forEach(function (task) {
        if (task.classList.contains("completed")) {
            task.style.display = "list-item";
        } else {
            task.style.display = "none";
        }
    });
});

pendingBtn.addEventListener("click", function () {
    let tasks = document.querySelectorAll("li");

    tasks.forEach(function (task) {
        if (!task.classList.contains("completed")) {
            task.style.display = "list-item";
        } else {
            task.style.display = "none";
        }
    });
});

allBtn.addEventListener("click", function () {
    let tasks = document.querySelectorAll("li");

    tasks.forEach(function (task) {
        task.style.display = "list-item";
    });
});