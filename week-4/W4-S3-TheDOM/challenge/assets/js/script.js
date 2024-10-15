//Create and define the to-do list elements with document.getElementById()

const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskTableBody =document.getElementById("taskTableBody");


//This line checks if all the necessary elements are found acoss the document
if (addTask && taskInput && taskTableBody) {

function addTask() {
    const task = taskInput.value.trim ();

    if(task) {
        createTaskElment(task);
        taskInput.value = '';
        saveTask();
    } else {
        alert("Please add a task!");
    }
//This function adds an if else condition. If avalue is entered to the task input it will log and save task. else it will populate an alert message..
}
}

addButton.addEventListener('click', function()) {
    const newTask = taskInput.value.trim();

    if(newTask) {
        const date =  Date().toLocaleDateString();

        const task = { 
            status: "Incomplete",
            Description: 'New Task',
            date: date

        };
    }
addTaskToTaskTable(task);

taskInput.value = "";


}
//This addEventListiner will add a triggerable event when you click the add Button.

