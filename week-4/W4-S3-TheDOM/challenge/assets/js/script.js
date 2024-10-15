//DOM waits for the document  to load before starting the function 
document.addEventListener("DOMContentLoaded", function () {
   
    //Creates the Variables and define the to-do list elements with document.getElementById()

    const addButton = document.getElementById("addTask");
    const taskInput = document.getElementById("taskInput");
    const taskTableBody = document.getElementById("taskTableBody");
    
    addButton.addEventListener('click', function() {

        const taskToWrite = taskInput.value.trim();
    
        const date = new Date().toLocaleDateString();
    
        const task = {
            status: 'Incomplete',
            description: taskToWrite,
            date: date
        };
    //Calling function 'addTaskToTable' to add the object of 'task' to the table for reference later.
        addTaskToTaskTable(task)
        taskInput.value = '';
        // Clears input field after adding a task
    
        function addTaskToTaskTable(task) {
            const createNewTask = document.createElement('tr');
            //creating new variable 'createNewTask', then it gives value which it creates a new element of tr.
            
            //.innerHTML grabs the children of create new task which has the value of tr, which is td .
            createNewTask.innerHTML = `
                <td>${task.status}</td>
                <td>${task.description}</td>
                <td>${task.date}</td>
                <td>
                    <button class='completeBtn'>Complete</button>
                    
                    <button class='deleteBtn'>Delete</button>
                </td>
            `;
            taskTableBody.appendChild(createNewTask);


               // Attach event listener for the delete button
            const deleteBtn = createNewTask.querySelector('.deleteBtn');
            
            
            deleteBtn.addEventListener('click', function() {
                   // Remove the task row from the table
            taskTableBody.removeChild(createNewTask);


            });


            
            // The back ticks create a  template literal which allows you to put multiple lines of code to build the table.            
        }
    });

})

   

















// function addTask() {
//         const task = taskInput.value.trim ();

//         if(task) {
//             createTaskElment(task);
//             taskInput.value = '';
//             saveTask();
//         } else {
//             alert("Please add a task!");
//         }
//     //This function adds an if else condition. If avalue is entered to the task input it will log and save task. else it will populate an alert message..
//     }


//     addButton.addEventListener('click', function() {
//         const newTask = taskInput.value.trim();

//         if(newTask) {
          

//                 task = { 
//                     status: "Incomplete",
//                     Description: 'New Task',
//                     date: date
//                 };
            
//         };
//     });
//     addTaskToTaskTable(task);

//     taskInput.value = "";


//     });
//     //This addEventListiner will add a triggerable event when you click the add Button.


    

