//Create and define the to-do list elements with document.getElementById()

const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskTableBody =document.getElementById("taskTableBody");

loadTask ();

//This line checks if all the necessary elements are found acoss the document
if (addTask && taskInput && taskTableBody) {

function addTask() {
    const task = taskInput.value.trim ();

    if(task) {
        createTaskElment(task);
        taskInput.value = '';
        saveTak();
    } else {
        alert(Please add a task!);
    }

}
}
