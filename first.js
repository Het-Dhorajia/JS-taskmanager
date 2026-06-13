let search_task = document.getElementById("src-task");

let new_task = document.getElementById("new-task");

let task_list = document.getElementById("task-list");

let add_btn = document.getElementById("add-task-btn");

add_btn.addEventListener("click" , function(click){
    console.log(new_task.value);
});