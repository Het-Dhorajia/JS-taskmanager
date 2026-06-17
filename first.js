let search_task = document.getElementById("src-task");
let new_task = document.getElementById("new-task");
let task_list = document.getElementById("task-list");
let add_btn = document.getElementById("add-task-btn");
let completedBtn = document.getElementById("completed");
let pendingBtn = document.getElementById("pending");
let allBtn = document.getElementById("all");

add_btn.addEventListener("click", function () {
    let taskText = new_task.value;

    let li = document.createElement("li");

    let deletebtn = document.createElement("button");

    li.innerText = taskText;

    task_list.appendChild(li);

    new_task.value = "";

    deletebtn.innerText = "delete";

    li.appendChild(deletebtn);

    deletebtn.addEventListener("click", function () {
        li.remove();
    });

    let completebtn = document.createElement("button");

    completebtn.innerText = "complete";

    li.appendChild(completebtn);

    completebtn.addEventListener("click", function () {
        li.classList.toggle("completed");
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

});