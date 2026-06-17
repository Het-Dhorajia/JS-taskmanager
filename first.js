let search_task = document.getElementById("src-task");
let new_task = document.getElementById("new-task");
let task_list = document.getElementById("task-list");
let add_btn = document.getElementById("add-task-btn");

add_btn.addEventListener("click", function () {
    let taskText = new_task.value;

    let li = document.createElement("li");

    let deletebtn = document.createElement("button");

    li.innerText = taskText;

    task_list.appendChild(li);

    new_task.value = "";

    deletebtn.innerText = "delete";    

    li.appendChild(deletebtn);

    deletebtn.addEventListener("click" , function () {
        li.remove();
        
    })

});